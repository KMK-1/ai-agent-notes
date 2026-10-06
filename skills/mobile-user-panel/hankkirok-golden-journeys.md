# 한끼록 Golden Mobile Journeys v0.1

Purpose: reusable product-quality regression set for design, user simulation, browser/device execution, and UX diagnosis.

Each journey should be evaluated by essential-state completion rather than requiring one exact click sequence.

| ID | Journey | Essential completion state | Primary risk |
|---|---|---|---|
| G01 | 냉장고 재료로 레시피 추천 받기 | available ingredients reflected in recommendation | recommendation relevance |
| G02 | 재료 일부만 입력하고 추천 받기 | useful result despite incomplete inventory | setup burden |
| G03 | 1인분 레시피를 2인분으로 변경 | all relevant amounts consistently converted | quantity correctness |
| G04 | Fork한 레시피를 내 기본 계량에 맞추기 | fork preserves identity and applies user units | personalization correctness |
| G05 | 20분 이하 저녁 찾기 | duration constraint preserved through selection | filter persistence |
| G06 | 조리 시작 | cooking mode enters correct recipe/version | state correctness |
| G07 | 조리 중 다음 단계 이동 | current step advances with clear feedback | one-hand usability |
| G08 | 이전 단계로 돌아가기 | prior step restored without losing progress | recovery |
| G09 | 화면을 잠시 벗어났다가 복귀 | cooking progress resumes correctly | interruption resilience |
| G10 | 음성으로 '다음' 요청 | listening feedback and correct step transition | voice confidence |
| G11 | 음성 인식 실패 후 재시도 | failure is visible and recovery is obvious | recovery |
| G12 | '오늘만 조금 싱겁게' 요청 | temporary adjustment applies only to current cook | scope control |
| G13 | 평소 간 선호 반영 | known preference influences recipe appropriately | preference fit |
| G14 | 모호한 맛 요청 처리 | product asks only necessary clarification | ambiguity handling |
| G15 | 매운맛 낮추기 | ingredients/instructions adjust coherently | recipe consistency |
| G16 | 다이어트 모드 적용 | modification is visible and nutritional implication explained | trust |
| G17 | 최종 레시피 칼로리 확인 | calories correspond to final adjusted recipe | derived-data correctness |
| G18 | 없는 재료 대체하기 | substitute is practical and amount/instruction updates | substitution quality |
| G19 | 타이머 시작/확인 | timer remains discoverable during cooking | glanceability |
| G20 | 조리 완료 후 평가 남기기 | rating/feedback persisted to intended scope | feedback loop |
| G21 | 완성 레시피 저장 | correct recipe version saved | persistence |
| G22 | 저장 레시피 다시 조리 | saved version is recoverable and cookable | repeat value |
| G23 | 레시피 Fork 후 수정 | original remains unchanged; fork is distinct | identity/data safety |
| G24 | 잘못된 변경 취소 | user can recover without rebuilding recipe | undo/recovery |
| G25 | 긴 재료명/큰 글자 설정 | critical content/actions remain usable | accessibility |
| G26 | 작은 화면에서 조리 | no essential action is clipped/occluded | adaptivity |
| G27 | 네트워크 지연 중 조작 | loading state prevents duplicate/uncertain action | reliability |
| G28 | 네트워크 실패 후 복구 | retry preserves safe local progress | recovery |
| G29 | 신규 사용자가 첫 레시피 완주 | no unexplained setup blocks core value | onboarding |
| G30 | 숙련 사용자가 반복 레시피 빠르게 시작 | frequent path avoids redundant friction | efficiency |

## Default synthetic panel

- P01 Novice: low cooking confidence, needs explicit guidance, medium mobile skill.
- P02 Busy worker: high time pressure, strong preference for <=20 minute meals, low tolerance for setup.
- P03 One-hand cook: frequently holds utensils/ingredients; prioritizes reachability and glanceability.
- P04 Preference-heavy user: expects learned salt/spice preferences but dislikes unexplained autonomous changes.
- P05 Diet-focused user: checks serving size, calories, and ingredient substitutions carefully.
- P06 Power user: frequently forks, edits, repeats recipes, and expects shortcuts without losing version identity.

## Gate proposal

A release candidate should not pass solely because unit/integration tests are green. Report separately: functional tests, Golden Journey success, unresolved P0/P1 UX findings, accessibility blockers, recovery failures, and personalization/intervention failures. Do not invent a numeric release threshold until baseline runs establish realistic distributions.
