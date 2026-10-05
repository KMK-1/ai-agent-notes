# Today Planner × LLMWiki 업무 지식 축적 구조

## 문제

업무 중 새롭게 알게 된 내용을 Obsidian/LLMWiki에 기록하려고 해도, 실제 업무에 집중하다 보면 Wiki에 넣는 것을 자주 잊게 된다.

따라서 사용자가 `Wiki에 기록해야 한다`고 기억하는 구조가 아니라, **오늘의 할 일 플래너를 업무의 시작점으로 만들고 업무 완료 과정에서 지식을 자동 회수하는 구조**를 지향한다.

## 핵심 개념

- **Planner = 단기 기억 / 현재 해야 할 일**
- **LLMWiki = 장기 기억 / 축적된 업무 지식**
- **LLM = Planner와 Wiki 사이의 지식 연결 계층**

```text
아침
  ↓
Today Planner
  ↓
Task 시작
  ↓
관련 기존 Wiki 자동 제시
  ↓
업무 수행
  ↓
Quick Capture / 파일 / 업무 결과
  ↓
Task 완료
  ↓
LLM이 지식 후보 추출
  ↓
기존 Wiki 검색 및 비교
  ↓
신규 생성 / 기존 문서 업데이트 / 무시
  ↓
사용자 승인
  ↓
LLMWiki / Obsidian 반영
```

## 1. Today Planner

하루 업무의 진입점을 Planner로 통일한다.

예시:

```text
📅 오늘의 업무

□ HDA DTC C1234 원인 분석
□ 협력사 SW 1.32 검증
□ CANoe Panel 수정
□ 프로젝트 주간회의
```

## 2. Task 시작 시 Wiki 활용

Task를 시작하면 업무 내용과 관련된 기존 Wiki를 자동 검색해 보여준다.

예시:

```text
▶ HDA DTC C1234 원인 분석

관련 Wiki
- [[HDA DTC]]
- [[DTC 분석 방법]]
- [[ECU 진단]]

관련 자료
- C1234_analysis.xlsx
- 협력사 회신
```

이를 통해 Wiki를 단순한 기록 저장소가 아니라 **현재 업무를 수행할 때 활용하는 지식 시스템**으로 만든다.

## 3. 업무 중 Quick Capture

업무 중에는 Wiki 문서를 직접 작성하지 않는다.

Task에 짧은 메모만 남긴다.

```text
특정 IGN cycle에서만 발생
27 11 Security Unlock 이후에는 미발생
협력사 SW 1.32 수정 예정
```

정리, 제목 작성, 태그 지정, 문서 분류 등은 LLM이 담당한다.

향후 Windows 단축키(예: Ctrl+Alt+W)를 통한 전역 Quick Capture도 고려한다.

## 4. Task 완료 시 Knowledge Capture

`업무 완료`가 Wiki 기록의 트리거가 된다.

Task 완료 시 LLM이 해당 업무에서 얻은 정보를 분석하여 Wiki 후보를 제안한다.

```text
🧠 이번 업무에서 발견된 지식

HDA DTC C1234 분석 결과

- 특정 IGN Cycle에서 발생
- Security Unlock 이후 미발생
- 협력사 SW 1.32 수정 예정

기존 Wiki 검색 결과

[[HDA DTC]]
→ 업데이트 권장

[[Security Access]]
→ 관련 지식 발견

☑ HDA DTC 업데이트
☐ Security Access 업데이트

[Wiki 반영 후 완료]
[그냥 완료]
```

LLM이 자동으로 Wiki를 변경하기보다는 기본적으로 **후보 발견 → 사용자 승인 → 저장/병합** 흐름을 사용한다.

## 5. Task에서 추출할 핵심 정보

각 Task에서 다음 4가지 정보를 자동 추출한다.

```yaml
knowledge:
  used:
    - CANoe Panel
    - HDA DTC

  learned:
    - CH 변경 시 Node Mapping 확인 필요

  decision:
    - SW 1.32 적용

  follow_up:
    - 양산차 재검증
```

### Used
업무 수행에 사용한 기존 지식.

### Learned
업무를 통해 새롭게 발견한 재사용 가능한 지식.

### Decision
업무 과정에서 확정된 판단이나 결정.

### Follow-up
추가로 수행해야 하는 업무 또는 검증.

## 6. 양방향 흐름

Wiki와 Planner는 단방향 저장 구조가 아니라 양방향으로 연결한다.

```text
          LLMWiki
          ↑     ↓
   지식 축적     관련 지식 검색
          ↑     ↓
       Today Planner
             ↓
          업무 수행
```

### 아침: Wiki → Planner

오늘 Task와 관련된 과거 경험, 주의사항, 기존 분석 결과를 자동으로 제시한다.

예:

> CANoe Panel CH2 검증
>
> ⚠️ 과거 기록: Panel Channel 변경 시 Node/Network Mapping도 확인 필요

### 업무 종료: Planner → Wiki

오늘 Task에서 새롭게 얻은 지식과 결정을 추출하여 Wiki에 축적한다.

## 7. Today 화면 아이디어

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        TODAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

오늘의 업무                  3 / 6 완료

🔴 HDA DTC C1234 분석        진행중
🟡 협력사 SW 1.32 검증
🟢 CANoe Panel 수정          ✓
⚪ 주간회의                   ✓
⚪ 품질현황 보고서
⚪ 시험차 결과 확인

────── Knowledge Capture ──────

오늘 발견한 지식             7개

✓ CANoe Channel Mapping 주의사항
✓ SW 1.32 변경사항
? Security Access 관련 내용
? DTC C1234 발생조건

[오늘의 Wiki 정리]

────── Relevant Knowledge ──────

[[CANoe Panel]]
[[UDS Security Access]]
[[HDA DTC 분석]]
[[협력사 SW 관리]]
```

## 8. 구현 우선순위

초기 PoC에서는 기능을 크게 만들지 않고 다음 흐름부터 검증한다.

1. Today Planner
2. Task Detail
3. Task별 Quick Capture
4. Complete & Wiki
5. 기존 Wiki 검색
6. 신규 문서 vs 기존 문서 업데이트 판단
7. 사용자 승인 후 Markdown 반영

이후 단계에서 다음 기능을 확장한다.

- Windows 전역 Quick Capture
- 업무 파일 자동 연결
- Outlook/Teams 등 업무 데이터 연계
- 하루 업무 흔적 기반 Wiki 후보 자동 탐색
- RAG/semantic search
- 반복 이슈 및 과거 사례 자동 추천
- 주간/월간 Knowledge Review

## 목표

최종적으로 사용자가 Wiki를 별도로 관리하는 것이 아니라,

> **업무를 하면 자연스럽게 지식이 쌓이고, 다음 업무를 시작하면 과거 지식이 다시 나타나는 구조**

를 만드는 것이 목표다.
