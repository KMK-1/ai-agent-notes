# Today Planner × Work Memory × LLMWiki 업무 지식 축적 구조

## 문제

업무 중 새롭게 알게 된 내용을 Obsidian/LLMWiki에 기록하려고 해도 실제 업무에 집중하다 보면 Wiki에 넣는 것을 자주 잊게 된다.

따라서 사용자가 `Wiki에 기록해야 한다`고 기억하는 구조가 아니라, **오늘의 할 일과 오늘 한 일을 기록하는 자연스러운 업무 흐름 자체에서 지식을 자동 회수하는 구조**를 지향한다.

## 핵심 개념

- **Work Memory = 전체 업무 기억 시스템 / 사용자 진입점**
- **Today Planner = 단기 기억 / 현재 해야 할 일**
- **Work Journal = 오늘 한 일을 아무렇게나 기록하는 Raw Memory**
- **Timeline = 업무 활동의 시간순 기록**
- **LLMWiki = 재사용 가치가 있는 정제된 장기 기억**
- **Decision Log = 중요한 판단과 결정의 이력**
- **LLM = 분류 / 추출 / 연결 / 병합 / 검색 계층**

일반적인 Notion처럼 사용자가 페이지 구조, 데이터베이스 속성, 태그를 직접 관리하는 방식보다는 **사용자는 자유롭게 기록하고 LLM이 뒤에서 구조화하는 AI 업무 Workspace**를 목표로 한다.

```text
                   Work Memory
                        │
       ┌────────────────┼────────────────┐
       ↓                ↓                ↓
 Today Planner      Work Journal      중요 Email
       │                │                │
       └────────────────┼────────────────┘
                        ↓
                       LLM
                        ↓
       ┌────────┬───────┼────────┬──────────┐
       ↓        ↓       ↓        ↓          ↓
     Task    Timeline  Wiki   Decision   Follow-up
```

## 1. Today Planner

하루 업무의 진입점을 Planner로 통일한다.

```text
📅 오늘의 업무

□ HDA DTC C1234 원인 분석
□ 협력사 SW 1.32 검증
□ CANoe Panel 수정
□ 프로젝트 주간회의
```

Task를 시작하면 관련된 기존 Wiki와 과거 기록을 자동으로 보여준다.

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

Wiki를 단순 저장소가 아니라 **현재 업무를 수행할 때 다시 사용하는 지식 시스템**으로 만든다.

## 2. Today + Work Journal

Work Memory의 메인 화면에는 Today Planner와 함께 자유 입력 공간인 Work Journal을 둔다.

사용자는 정리하거나 분류할 필요 없이 오늘 한 일을 자연어로 아무렇게나 적는다.

```text
오늘 CANoe 패널 수정함.
CH2로 바꾸니까 처음에 안 됐는데 node mapping도 CH2로 바꿔야 했음.
다음에 주의.
```

LLM은 이를 자동으로 다음과 같이 분리한다.

```text
[완료 업무]
CANoe Panel CH2 수정

[새로운 지식]
Channel 변경 시 Node/Network Mapping 확인 필요

[Wiki]
→ [[CANoe Panel]] 업데이트 후보

[태그]
#CANoe #Panel #CAN

[후속 업무]
없음
```

핵심 원칙은 **사람은 기록하고 AI는 정리한다**이다.

## 3. Raw Memory와 Long-term Knowledge 분리

Work Journal의 원문은 지우지 않고 Raw Memory로 보존한다.

```text
Work Journal (Raw Memory)
        │
        ├──────────────→ Timeline
        │
        ├── LLM ──────→ Task / Planner
        │
        ├── LLM ──────→ Decision Log
        │
        └── LLM ──────→ LLMWiki
```

### Work Journal

`오늘 무엇을 했는가?`를 기록하는 원본 기억이다. 완벽하게 정리할 필요가 없다.

### Timeline

Work Journal, Task, 중요 이벤트를 날짜/시간순으로 연결한다.

```text
2026.10.05
09:30  HDA 시험차 DTC 확인
10:40  협력사 A 문의
13:20  SW 1.32 수정사항 확인
15:30  CANoe Panel CH2 수정
17:10  시험 결과 정리
```

### LLMWiki

Raw Memory 전체를 Wiki로 만들지 않는다. 여러 업무에서 다시 사용할 가치가 있는 지식만 정제하여 장기 기억으로 저장한다.

### Decision Log

업무 과정에서 결정된 사항은 일반 지식과 별도로 추적할 수 있게 한다.

## 4. 업무 중 Quick Capture

Work Journal뿐 아니라 Task 안에서도 짧은 메모를 남길 수 있다.

```text
특정 IGN cycle에서만 발생
27 11 Security Unlock 이후에는 미발생
협력사 SW 1.32 수정 예정
```

정리, 제목 작성, 태그 지정, 문서 분류 등은 LLM이 담당한다.

향후 Windows 단축키(예: Ctrl+Alt+W)를 통한 전역 Quick Capture도 고려한다.

## 5. Task 완료 시 Knowledge Capture

`업무 완료`를 Wiki 기록의 또 다른 트리거로 사용한다.

```text
🧠 이번 업무에서 발견된 지식

HDA DTC C1234 분석 결과

- 특정 IGN Cycle에서 발생
- Security Unlock 이후 미발생
- 협력사 SW 1.32 수정 예정

기존 Wiki 검색 결과
[[HDA DTC]] → 업데이트 권장
[[Security Access]] → 관련 지식 발견

☑ HDA DTC 업데이트
☐ Security Access 업데이트

[Wiki 반영 후 완료]
[그냥 완료]
```

기본 흐름은 **후보 발견 → 사용자 승인 → 저장/병합**으로 한다.

## 6. Task에서 추출할 핵심 정보

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

- **Used**: 업무 수행에 사용한 기존 지식
- **Learned**: 업무를 통해 새롭게 발견한 재사용 가능한 지식
- **Decision**: 업무 과정에서 확정된 판단이나 결정
- **Follow-up**: 추가로 수행해야 하는 업무 또는 검증

## 7. Wiki ↔ Planner 양방향 흐름

```text
          LLMWiki
          ↑     ↓
   지식 축적     관련 지식 검색
          ↑     ↓
      Work Memory
          │
      Today Planner
          ↓
       업무 수행
```

### 아침: Wiki → Planner

오늘 Task와 관련된 과거 경험, 주의사항, 기존 분석 결과를 자동 제시한다.

> CANoe Panel CH2 검증
>
> ⚠️ 과거 기록: Panel Channel 변경 시 Node/Network Mapping도 확인 필요

### 업무 중/종료: Planner & Journal → Wiki

오늘 Task와 Work Journal에서 새롭게 얻은 지식과 결정을 추출하여 Wiki 후보로 만든다.

## 8. Today 화면 아이디어

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
             WORK MEMORY
          TODAY · 2026.10.05
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

오늘의 업무                       3 / 6 완료

🔴 HDA DTC C1234 분석             진행중
🟡 협력사 SW 1.32 검증
🟢 CANoe Panel 수정               ✓
⚪ 주간회의                        ✓
⚪ 품질현황 보고서
⚪ 시험차 결과 확인

──────── Work Journal ────────────

오늘 뭐 했나요?
┌────────────────────────────────┐
│ 자유롭게 아무렇게나 기록...    │
└────────────────────────────────┘
                         [기록]

──────── AI 정리 ────────────────

🟡 업무   HDA DTC C1234 원인 분석
🧠 지식   SW 1.32 DTC 조건 변경
🔵 결정   SW 1.32 적용
⏰ 할일   내일 시험차 재검증

──────── Knowledge Capture ──────

✓ CANoe Channel Mapping 주의사항
✓ SW 1.32 변경사항
? Security Access 관련 내용
? DTC C1234 발생조건

[오늘의 Wiki 정리]

──────── Relevant Knowledge ─────

[[CANoe Panel]]
[[UDS Security Access]]
[[HDA DTC 분석]]
[[협력사 SW 관리]]
```

## 9. Email → Knowledge Pipeline

### 배경

회사 이메일 전체를 LLMWiki/RAG에 넣으면 인사말, 반복 스레드, 일정 조율, 서명 등 장기 기억에 불필요한 정보가 많다.

따라서 이메일 전체를 자동 수집하지 않고 **Work Memory의 기존 메일 선별 기능을 이용해 사용자가 중요하다고 판단한 메일만 1차 선별한 뒤, LLM이 장기 기억 가치가 있는 정보만 추출**한다.

```text
Outlook / Email
      ↓
평소 업무
      ↓
Work Memory에서 중요 메일을 Wiki 후보로 표시
      ↓
Wiki Inbox
      ↓
Export
      ↓
LLM Knowledge Extractor
      ↓
┌────────┬────────┬────────┬────────┐
 Fact     Decision  Know-how  Follow-up
└────────┴────────┴────────┴────────┘
      ↓
기존 LLMWiki와 비교
      ↓
신규 / 기존 업데이트 / 중복 / 일회성 정보
      ↓
사용자 검토 및 승인
      ↓
Obsidian / LLMWiki
```

### 중요 메일 표시의 의미

Wiki 버튼/표시는 `메일 원문을 Wiki에 저장`한다는 의미보다 다음 의미로 사용한다.

> **이 메일에는 장기적으로 기억할 가치가 있는 업무 정보가 있다.**

실제 지식 정리, 분류, 태깅, 기존 문서 탐색 및 병합은 후속 파이프라인이 담당한다.

### Export 권장 구조

```json
{
  "source": "email",
  "subject": "HDA ECU SW 1.32 검증 결과",
  "date": "2026-10-05",
  "sender": "협력사 A",
  "project": "HDA",
  "task_id": "TASK-142",
  "body": "...",
  "user_marked_important": true
}
```

메일 원문은 Source로 보존하되 LLMWiki의 주 검색 대상은 정제된 Knowledge로 한다.

### Knowledge Extractor

```yaml
type: knowledge
source: email
topic: HDA_DTC

facts:
  - SW 1.32에서 C1234 발생 조건 변경
  - IGN ON 후 30초 조건 삭제

decisions:
  - SOP 차량부터 적용

know_how: []
follow_up: []
confidence: high
```

특히 `Decision`을 별도 지식 타입으로 관리한다.

- 왜 이렇게 결정했는가?
- 언제 결정되었는가?
- 어떤 조건에서 결정되었는가?
- 어떤 사양/버전부터 적용되었는가?
- 이후 변경된 결정은 없는가?

## 10. Source와 Knowledge 분리

```text
Work Memory
│
├── Raw Memory
│   ├── Work Journal
│   ├── Timeline
│   └── Sources
│       └── Email 원본 또는 원본 참조
│
└── Structured Memory
    ├── Task
    ├── Fact
    ├── Decision
    ├── Know-how
    ├── Issue
    ├── Lesson Learned
    └── Follow-up
             │
             ↓
          LLMWiki
```

검색/RAG에서는 우선 정제된 Knowledge를 검색한다. 근거 확인이 필요한 경우에만 Raw Memory나 Source를 따라간다.

## 11. 미래 업무에서 재사용

```text
중요 메일 / Work Journal / Task
             ↓
      Knowledge Extractor
             ↓
     "SW 1.32 SOP 적용 결정"
             ↓
          LLMWiki
             ↓
────────────────────────────
몇 주 후
────────────────────────────
             ↓
Today Task: HDA 양산 SW 검증
             ↓
관련 Knowledge 자동 검색
             ↓
💡 과거 결정: SW 1.32부터 SOP 적용하기로 협의됨
```

사용자는 다음과 같은 질문도 할 수 있다.

- 이번 주 내가 한 일 정리해줘.
- 이번 달 HDA 관련해서 무엇을 했지?
- 지난번 CANoe CH2 문제를 어떻게 해결했지?
- 9월부터 지금까지 협력사 A 관련 이슈 타임라인을 보여줘.
- 특정 사양이 왜 그렇게 결정됐는지 찾아줘.

## 12. 역할 정의

```text
Work Memory
  = 전체 업무 기억 시스템 / 통합 Workspace

Today Planner
  = 현재 업무 컨텍스트 / 단기 기억

Work Journal
  = 자유롭게 기록하는 Raw Memory

Timeline
  = 시간순 업무 활동 기록

LLMWiki
  = 정제된 장기 기억

Decision Log
  = 중요한 판단과 결정 이력

LLM
  = 분류 / 추출 / 연결 / 병합 / 검색 계층
```

## 13. 구현 우선순위

초기 PoC:

1. Work Memory Today 화면
2. Today Planner
3. Work Journal 자유 입력
4. LLM 자동 분류(Task / Knowledge / Decision / Follow-up)
5. Timeline 저장
6. Task Detail + Quick Capture
7. Complete & Wiki
8. 기존 Wiki 검색
9. 신규 문서 vs 기존 문서 업데이트 판단
10. 사용자 승인 후 Markdown 반영
11. 중요 메일 Wiki 후보 표시
12. 선택 메일 Export
13. Email Knowledge Extractor
14. Source ↔ Knowledge 연결
15. 추출된 Decision/Fact를 Today Task에서 재사용

이후 확장:

- Windows 전역 Quick Capture
- 업무 파일 자동 연결
- Outlook/Teams 등 업무 데이터 연계
- 하루 업무 흔적 기반 Wiki 후보 자동 탐색
- RAG / semantic search
- 반복 이슈 및 과거 사례 자동 추천
- 주간/월간 Knowledge Review
- 자동 주간 업무보고 생성

## 목표

최종적으로 사용자가 Wiki를 별도로 관리하는 것이 아니라,

> **오늘 할 일을 보고, 오늘 한 일을 아무렇게나 기록하면 AI가 업무 기억을 정리하고, 가치 있는 지식은 장기 기억으로 축적하며, 미래 업무에서 다시 꺼내주는 구조**

를 만드는 것이 목표다.
