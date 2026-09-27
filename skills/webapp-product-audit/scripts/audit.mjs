#!/usr/bin/env node
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const profilePath = resolve(process.env.AUDIT_PROFILE ?? "profile.json");
const profile = JSON.parse(await readFile(profilePath, "utf8"));

const base = new URL(process.env.AUDIT_BASE_URL ?? profile.baseUrl);
if (!["http:", "https:"].includes(base.protocol)) {
  throw new Error("AUDIT_BASE_URL/profile.baseUrl must be HTTP(S)");
}

let chromium;
try {
  ({ chromium } = await import("@playwright/test"));
} catch {
  throw new Error(
    "Install Playwright first: npm install --no-save @playwright/test && npx playwright install chromium",
  );
}

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const output = resolve(
  process.env.AUDIT_OUTPUT_DIR ?? join(".audit-output", timestamp),
);
await mkdir(output, { recursive: true });

const profiles = [
  { name: "desktop", viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
  { name: "mobile-320", viewport: { width: 320, height: 720 }, isMobile: true, hasTouch: true },
];

const routes = Array.isArray(profile.routes) ? profile.routes : [];
if (!routes.length) throw new Error("Profile must define at least one route");

const summary = {
  productName: profile.productName ?? "Web App",
  generatedAt: new Date().toISOString(),
  profilePath,
  baseOrigin: base.origin,
  mutationPolicy: profile.mutationPolicy ?? "read-only",
  profiles: [],
};

const browser = await chromium.launch();
try {
  for (const device of profiles) {
    const context = await browser.newContext({
      viewport: device.viewport,
      isMobile: device.isMobile,
      hasTouch: device.hasTouch ?? false,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const observed = {
      profile: device.name,
      viewport: device.viewport,
      routes: [],
      errors: [],
    };
    summary.profiles.push(observed);

    page.on("console", msg => {
      if (msg.type() === "error") {
        observed.errors.push({
          kind: "console",
          message: msg.text().slice(0, 500),
        });
      }
    });

    page.on("pageerror", error => {
      observed.errors.push({
        kind: "page",
        message: error.message.slice(0, 500),
      });
    });

    page.on("requestfailed", request => {
      const url = new URL(request.url());
      observed.errors.push({
        kind: "request",
        path: url.origin === base.origin ? url.pathname : url.origin,
        reason: request.failure()?.errorText ?? null,
      });
    });

    page.on("response", response => {
      if (response.status() >= 400) {
        const url = new URL(response.url());
        observed.errors.push({
          kind: "http",
          status: response.status(),
          path: url.origin === base.origin ? url.pathname : url.origin,
        });
      }
    });

    try {
      if (profile.auth?.mode === "handoff" && profile.auth.loginUrl) {
        const loginUrl = new URL(profile.auth.loginUrl, base).href;
        const response = await page.goto(loginUrl, {
          waitUntil: "domcontentloaded",
          timeout: 20000,
        });
        if (!response || response.status() >= 400) {
          throw new Error("Authentication handoff failed");
        }
        if (
          profile.auth.expectedPathPrefix &&
          !new URL(page.url()).pathname.startsWith(profile.auth.expectedPathPrefix)
        ) {
          throw new Error(
            "Authentication handoff did not reach the expected path",
          );
        }
      }

      for (const route of routes) {
        const item = {
          name: route.name ?? route.path,
          path: route.path,
        };
        observed.routes.push(item);

        try {
          const response = await page.goto(new URL(route.path, base).href, {
            waitUntil: "domcontentloaded",
            timeout: 20000,
          });
          await page.locator("body").waitFor({
            state: "visible",
            timeout: 10000,
          });

          item.status = response?.status() ?? null;
          item.finalPath = new URL(page.url()).pathname;
          item.title = (await page.title()).slice(0, 200);
          item.horizontalOverflow = await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth + 2,
          );
          item.screenshot = `${device.name}-${String(item.name)
            .replace(/[^a-z0-9_-]+/gi, "-")
            .toLowerCase()}.png`;
          await page.screenshot({
            path: join(output, item.screenshot),
            fullPage: true,
          });
        } catch (error) {
          item.error = String(error?.message ?? error).slice(0, 500);
        }
      }
    } catch (error) {
      observed.setupError = String(error?.message ?? error).slice(0, 500);
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}

await writeFile(
  join(output, "summary.json"),
  JSON.stringify(summary, null, 2) + "\n",
);

console.log(`Audit baseline saved to ${output}`);

if (
  summary.profiles.some(
    profile =>
      profile.setupError || profile.routes.some(route => route.error),
  )
) {
  process.exitCode = 1;
}
