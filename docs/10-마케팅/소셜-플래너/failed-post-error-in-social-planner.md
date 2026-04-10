---

번역일: 2026-04-07
카테고리: 10-마케팅 > 소셜-플래너
---

# 소셜 플래너에서 게시물 실패 오류

소셜 게시물이 실패하는 경우가 여러 가지 있습니다. 다음은 모든 원인과 문제를 해결하기 위해 적용할 수 있는 해결책입니다.

**오류 메시지 및 해결책**

| **플랫폼** | **실패 메시지 및 해결책** | **오류 코드** |
|------------|-------------------------|---------------|

**Facebook**

| Facebook | 소셜 계정 토큰이 만료되었습니다. 소셜 계정을 다시 연결해 주세요. | OAuthException, 102, 109, 463, 467 |
| Facebook | Facebook에서 일시적인 오류가 발생했습니다. 브라우저를 강력 새로고침하여 캐시를 지우고 몇 분 후 다시 시도해 주세요. | 1, 2, Unexpected Error |
| Facebook | 소셜 계정 토큰이 만료되었거나 연결된 계정에 게시 권한이 없습니다. 게시 권한이 있는 계정으로 소셜 계정을 다시 연결해 주세요. | 3 |
| Facebook | LeadConnector 앱이 누락되었습니다. 페이지 또는 그룹에 LeadConnector를 추가해 주세요. | 10 |
| Facebook | 연결된 계정에 게시 권한이 없습니다. 게시 권한이 있는 계정으로 소셜 계정을 다시 연결해 주세요. | 200-299 |
| Facebook | 게시물 내용이 커뮤니티 가이드라인을 위반합니다. | 368 |
| Facebook | 중복된 게시물 내용입니다. 12시간 이내 중복 내용 게시는 금지됩니다. | 506 |
| Facebook | 게시물에 잘못된 링크가 포함되어 있습니다. | 1609005 |
| Facebook | 사용자 체크포인트입니다. Facebook에 로그인하여 LeadConnector 앱이 페이지/그룹에 추가되었는지 확인해 주세요. | 459 |
| Facebook | 비밀번호 불일치입니다. Facebook에 로그인하여 LeadConnector 앱이 페이지/그룹에 추가되었는지 확인해 주세요. | 460 |
| Facebook | 미확인 사용자입니다. Facebook에 로그인하여 LeadConnector 앱이 페이지/그룹에 추가되었는지 확인해 주세요. | 464 |
| Facebook | 게시 권한이 부족하거나 토큰이 만료되었습니다. 계정을 다시 연결하고 권한을 확인해 주세요. | 492 |
| Facebook | Facebook에서 일시적인 오류가 발생했습니다. 브라우저를 강력 새로고침하여 캐시를 지우고 몇 분 후 다시 시도해 주세요. | Unexpected Error |
| Facebook | 일시 차단되었습니다. Facebook은 프로필의 게시 기능이 복원되기까지 일정 기간 기다리게 합니다. | Temporary Block |

**Instagram**

| Instagram | 파일 업로드 시간 초과입니다. 더 작은 크기의 파일을 첨부해 보세요. | 400 -2207003 |
| Instagram | 정의되지 않은 Instagram 문제입니다. 곧 자동으로 해결될 예정입니다. | 400- 2207001, 2207053 |
| Instagram | 게시물 내용이 커뮤니티 가이드라인을 위반합니다. | 400 - 2207051 |
| Instagram | 일일 게시 한도에 도달했습니다. Facebook API는 하루 특정 수의 게시물만 허용합니다. | 400 - 2207042 |
| Instagram | Instagram의 소셜 계정 토큰이 만료되었거나, 취소되었거나, 유효하지 않습니다. 소셜 플래너에서 Instagram 비즈니스 계정을 다시 연결해 주세요. | 400 - 2207006 |
| Instagram | Instagram 계정이 제한되었습니다. 계정이 비즈니스 계정인지 확인해 주세요. | 400 - 2207050 |
| Instagram | Instagram 비즈니스 계정은 2개 이상 10개 미만의 이미지/동영상으로 구성된 캐러셀 게시물을 지원합니다. | 400 - 2207028 |
| Instagram | 최대 태그 한도를 초과했습니다. 30개 이하의 태그를 사용해 주세요. | 400 - 2207040 |
| Instagram | 사용자 권한이 부족합니다. 게시 권한이 있는 계정으로 이 소셜 계정을 다시 연결해 주세요. | 400 - 2207005 |

**LinkedIn**

| LinkedIn | LinkedIn의 소셜 계정 토큰이 만료되었거나, 취소되었거나, 유효하지 않습니다. LinkedIn을 다시 연결해 주세요. | 400 또는 403 |
| LinkedIn | 정의되지 않은 LinkedIn 문제입니다. 곧 자동으로 해결될 예정입니다. | 404, 500, 504 |
| LinkedIn | 중복된 게시물 내용입니다. 12시간 이내 중복 내용 게시는 금지됩니다. | 422 |
| LinkedIn | 필수 필드가 없거나 게시물 텍스트가 너무 깁니다. | 422 |
| LinkedIn | 연결된 계정에 게시 권한이 없습니다. 게시 권한이 있는 계정으로 소셜 계정을 다시 연결해 주세요. | 400 |
| LinkedIn | LinkedIn에서 일시적인 오류가 발생했습니다. 브라우저를 강력 새로고침하여 캐시를 지우고 몇 분 후 다시 시도해 주세요. | 409 |

**구글 마이 비즈니스(GMB)**

| GMB | 값이 누락되었습니다. Google 비즈니스 프로필 설정을 완료하고 소셜 플래너에서 다시 연결해 주세요. | MISSING_VALUE, INVALID_VALUE |
| GMB | 게시물 글자 수 한도를 초과했습니다. 게시물 텍스트의 단어 수를 줄여주세요. | VALUE_OUTSIDE_ALLOWED_RANGE |
| GMB | 소셜 계정 토큰이 만료되었습니다. 소셜 계정을 다시 연결해 주세요. | OPERATION_EXECUTION_ERROR, EXPIRED_VALUE |
| GMB | 미디어 업로드에 실패했습니다. | PHOTO_FETCH_FAILED, PHOTO_UPLOAD_FAILED |
| GMB | 계정 조건으로 인해 소셜 계정 작업이 지원되지 않습니다. | OPERATION_UNSUPPORTED_UNDER_ACCOUNT_CONDITION |
| GMB | Local Post API가 비활성화되었습니다. 이는 보통 위치가 체인점의 일부일 때 발생합니다. | LOCATION_DISABLED_FOR_LOCAL_POST_API |

---
*원문 최종 수정: Mon, 11 Jul, 2022 at 9:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*