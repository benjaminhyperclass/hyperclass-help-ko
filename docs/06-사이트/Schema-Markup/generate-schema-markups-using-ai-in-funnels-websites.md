---

번역일: 2026-04-07
카테고리: 06-사이트 > Schema Markup
---

# 퍼널과 웹사이트에서 AI로 Schema Markup 생성하기

Schema Markup AI는 Hyperclass 웹사이트 및 퍼널 빌더 안에서 AI를 사용하여 웹사이트와 퍼널 페이지의 구조화된 데이터를 몇 분 만에 생성해주는 기능입니다. 이 가이드에서는 이 기능이 무엇을 하는지, 어떻게 접근하는지, AI로 스키마를 생성하고 개선하는 방법, 그리고 실제 배포하기 전에 검토해야 할 사항들을 설명합니다.

## Schema Markup AI 생성기란 무엇인가요?

Schema Markup AI는 페이지 콘텐츠를 구조화된 데이터로 변환하는 과정을 간소화하도록 설계되었습니다. 작업 흐름을 이해하면 AI가 자동으로 처리하는 부분과 배포 전에 여전히 검토가 필요한 부분을 알 수 있습니다.

Schema Markup AI를 열면, Hyperclass가 페이지에 이미 있는 콘텐츠를 읽고 페이지 내용과 가장 잘 맞는 스키마 유형을 식별합니다. AI는 하나 이상의 스키마를 생성하고, 사용 가능한 필드를 채우며, 결과를 검증하고 저장할 수 있습니다. 생성 후에는 AI에게 스키마 추가, 삭제, 값 업데이트, 다른 스키마 유형으로 변경 등을 요청하여 대화를 통해 스키마를 계속 개선할 수 있습니다.

개선 요청 예시:

- 이 페이지에 FAQ 스키마를 추가해 주세요
- Article 스키마를 제거해 주세요
- 이 스키마를 Organization에서 Local Business로 변경해 주세요
- 사업자 전화번호를 업데이트해 주세요
- 커스텀 설명을 추가해 주세요

Schema Markup AI는 페이지별로 작동하므로, 각 페이지나 퍼널 단계는 고유한 스키마 설정을 가질 수 있습니다. 스키마가 생성되고 검토된 후에도 페이지를 발행해야 스키마가 실제로 적용됩니다.

## AI를 사용한 Schema Markup 생성의 주요 장점

- **빠른 설정:** 유형을 수동으로 선택하고 필드를 하나씩 채우는 대신 몇 분 만에 스키마를 생성할 수 있습니다.
- **스마트한 스키마 선택:** AI가 실제 페이지 콘텐츠를 검토하고 해당 페이지에 가장 관련성 높은 스키마 유형을 추천합니다.
- **미리 채워지는 필드:** 페이지 콘텐츠를 기반으로 사용 가능한 스키마 필드가 자동으로 채워져 수동 입력을 줄입니다.
- **대화형 편집:** 모든 것을 수동으로 편집하는 대신 AI와 채팅을 통해 스키마를 추가, 변경 또는 제거할 수 있습니다.
- **내장 검증:** AI 생성 스키마는 저장 전에 검증되어 형식 오류를 줄이는 데 도움이 됩니다.
- **유연한 접근:** 퍼널 AI가 활성화되어 있든 비활성화되어 있든 Schema Markup AI를 사용할 수 있습니다.
- **페이지별 제어:** 각 웹사이트 페이지나 퍼널 단계에 대해 독립적으로 스키마를 커스터마이징할 수 있습니다.

## AI를 사용한 Schema Markup 생성 방법

적절한 설정은 페이지 콘텐츠가 이미 준비된 후에 시작됩니다. AI가 페이지를 읽어 올바른 스키마 유형과 값을 결정하기 때문에, 페이지 콘텐츠를 먼저 완성하면 더 정확한 스키마 마크업을 생성하는 데 도움이 됩니다.

참고: 스키마는 **페이지별**로 적용되며 **다른 페이지나 퍼널 단계로 전달되지 않습니다**.

- **사이트(Sites)**로 이동합니다.

- **퍼널(Funnels)** 또는 **웹사이트(Websites)** 중 스키마를 추가하고 싶은 것을 클릭합니다.

![퍼널과 웹사이트 선택](https://jumpshare.com/share/wsZfptt2DguYpQJbHHTH+/Screen+Shot+2026-02-26+at+20.14.59.png)

- 새 퍼널/웹사이트를 생성하거나 **기존 것을 편집**합니다.

![퍼널/웹사이트 편집](https://jumpshare.com/share/ZFaUPsMBztxJep3j6eZe+/Screen+Shot+2026-02-26+at+20.20.06.png)

- 업데이트하고 싶은 **특정** 웹사이트 **페이지** 또는 퍼널 **단계**에서 **편집(Edit)**을 클릭합니다.

![페이지 편집](https://jumpshare.com/share/C8qTMF89ohRoT8S3Nyfd+/Screen+Shot+2026-02-26+at+20.22.01+%281%29.png)

- **SEO & AI 검색 최적화(SEO & AI search optimization)**를 클릭합니다.

- **Schema Markup**을 클릭합니다. (페이지에 이미 콘텐츠가 있는지 확인하세요. Schema Markup AI는 빈 페이지에 대해서는 스키마를 생성할 수 없습니다.)

![Schema Markup 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067504545/original/hZPQMfhShnErmvI8Kgjv3NnFEgFVug5XvQ.jpeg?1774273925)

- + New Schema 버튼을 클릭하고 **Create with AI** 옵션을 선택합니다.

![AI로 생성하기](https://jumpshare.com/share/6IYkpBidVb1Ky1yXIq2s+/Screen+Shot+2026-03-23+at+19.34.40.png)

- 자세하고 **관련성 있는 프롬프트**를 입력하고 **Send Message** 버튼을 클릭합니다.

![프롬프트 입력](https://jumpshare.com/share/YR2XyvKe7aEl6EIbUVgZ+/Screen+Shot+2026-03-23+at+19.38.42.png)

- AI가 페이지를 분석하고 가장 관련성 높은 스키마 마크업을 생성할 때까지 기다립니다.

![AI 분석 중](https://jumpshare.com/share/kJf0oSwupwkaIspEAIP3+/Screen+Shot+2026-03-23+at+19.39.36.png)

- View Schema Markup 버튼을 클릭하고 생성된 스키마와 Form 및 JSON 뷰에서 채워진 값들을 검토합니다.

![스키마 검토](https://jumpshare.com/share/UnjK1vV1x0irHS0eHpiI+/Screen+Shot+2026-03-23+at+19.44.08.png)

- 채팅 창에서 직접 스키마를 **추가**, **수정**, **삭제**할 수 있습니다.

![스키마 수정](https://jumpshare.com/share/5bzP4T7zfTgAZQl5g0kD+/Screen+Shot+2026-03-23+at+19.51.17.png)

- **Validate and Save**를 클릭합니다.

![검증 및 저장](https://jumpshare.com/share/b7A6KA5UWI6sBrSN8W4Q+/Screen+Shot+2026-03-17+at+01.11.02.png)

- 생성된 스키마가 **Active Schemas** 아래에 나타나는지 확인합니다.

- 스키마를 실제로 적용하려면 **페이지를 발행**하세요.

![페이지 발행](https://jumpshare.com/share/40EscYTC3Uobgm7bq3N9+/Screen+Shot+2026-03-23+at+20.15.25.png)

## 중요한 참고사항 및 제한사항

현재 동작 방식과 제한사항을 알면 설정 문제를 방지하고 기능을 더 효과적으로 사용할 수 있습니다. 이러한 세부사항은 특히 스키마가 생성되지 않거나 다른 페이지에 나타나지 않는 이유를 문제 해결할 때 유용합니다.

- Schema Markup AI는 수동으로 실행해야 합니다. AI로 새 페이지를 생성할 때 자동으로 생성되지 않습니다.
- Schema Markup AI를 실행하기 전에 페이지에 콘텐츠가 있어야 합니다. 빈 페이지는 오류를 반환하며 스키마가 생성되지 않습니다.
- {{custom_values.field_name}}과 같은 커스텀 값 필드 매핑은 현재 Schema Markup AI에서 지원되지 않습니다.
- 스키마는 페이지별로 적용됩니다. 다른 웹사이트 페이지나 퍼널 단계로 자동으로 전달되지 않습니다.
- AI 생성 스키마는 검증 후 자동 저장되지만, 스키마가 실제로 적용되려면 여전히 페이지를 발행해야 합니다.

## 자주 묻는 질문

**Q: 수동 설정과 AI 생성 스키마 간의 스키마 선택은 어떻게 다른가요?**
수동 설정에서는 사용 가능한 스키마 유형이 미리 정의된 목록으로 제한됩니다. 보통 SEO, AEO(Answer Engine Optimization), GEO(Generative Engine Optimization)에 가장 일반적으로 사용되는 것들입니다.

AI를 사용하면 이러한 제한이 없습니다. AI는 페이지 콘텐츠를 기반으로 모든 유효한 스키마 유형을 생성할 수 있습니다.

**Q: AI가 수동 목록에서 사용할 수 없는 스키마 유형을 생성할 수 있나요?**
예. AI는 페이지 콘텐츠를 분석하고 수동 선택 옵션에 포함되지 않은 유효한 스키마 유형이라도 스키마 마크업을 생성할 수 있습니다.

**Q: Schema Markup AI가 스키마를 저장한 후 페이지를 발행해야 하나요?**
예. 스키마는 검증 후 빌더에 저장되지만, 페이지를 발행한 후에만 실제로 적용됩니다.

**Q: Schema Markup AI가 한 페이지에 여러 스키마를 생성할 수 있나요?**
예. AI는 페이지의 콘텐츠에 따라 하나 이상의 스키마 유형을 생성할 수 있습니다.

**Q: 페이지에 콘텐츠가 없으면 어떻게 되나요?**
Schema Markup AI는 빈 페이지에 대해 스키마를 생성하지 않으며 오류를 표시합니다.

**Q: AI가 스키마를 생성한 후 제거하거나 변경할 수 있나요?**
예. AI에게 스키마 추가, 제거 또는 수정을 요청할 수 있으며, Schema Markup 영역에서 저장된 스키마를 검토할 수 있습니다.

**Q: 한 페이지의 스키마가 웹사이트나 퍼널의 모든 페이지에 적용되나요?**
아니요. 스키마는 페이지별로 적용되며 각 페이지나 퍼널 단계에 대해 별도로 관리해야 합니다.

**Q: Schema Markup AI는 퍼널 AI가 비활성화되었을 때만 작동하나요?**
아니요. 퍼널 AI가 비활성화된 경우, 스키마 전용 작업을 위한 전용 Schema Markup AI 패널이 왼쪽 패널에 열립니다.

**Q: AI를 사용하는 대신 수동으로 스키마를 추가할 수 있나요?**
예. Hyperclass는 스키마 유형과 필드 값을 직접 제어하고 싶은 사용자를 위해 수동 스키마 설정도 지원합니다.

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 8:13 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*