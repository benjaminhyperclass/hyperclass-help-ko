---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000008811-expanded-custom-field-types-for-opportunities-in-하이퍼클래스
번역일: 2026-11-02
카테고리: 05-기회-파이프라인 > 시작하기
---

# 하이퍼클래스 기회 관리(Opportunities)의 확장된 커스텀 필드 유형

이제 하이퍼클래스의 기회 관리(Opportunities)에서도 확장된 커스텀 필드(Custom Field) 유형을 지원하여, 팀이 거래(딜) 관련 정보를 더욱 유연하게 수집하고 관리할 수 있어요. 제안서 URL, 계약 날짜, 서식이 적용된 거래 요약, 담당 팀원 배정, 시각적 서비스 선택 항목 등을 기회(Opportunity) 레코드에 직접 저장할 수 있습니다. 이 필드들은 기회 목록 보기(List View) 컬럼과 고급 필터(Advanced Filters)에서도 사용할 수 있어서, 거래 정보를 더 쉽게 정리하고 확인할 수 있어요.

이 업데이트는 이전에 연락처(Contacts)에 먼저 적용되었고, 이제 기회 관리(Opportunities)에서도 사용할 수 있습니다.

목차

- [확장된 커스텀 필드 유형이란?](#What-Are-Expanded-Custom-Field-Types?)
- [기회 관리와 연락처를 위한 확장된 커스텀 필드의 주요 이점](#Key-Benefits-of-Expanded-Custom-Fields-for-Opportunities-and-Contacts)
- [지원되는 커스텀 필드 유형 및 설정 옵션](#Supported-Custom-Field-Types-and-Configuration-Options)
- [모바일 및 스냅샷 지원](#Mobile-and-Snapshot-Support)
- [기회 관리를 위한 확장 커스텀 필드 설정 방법](#How-to-Set-Up-Expanded-Custom-Fields-for-Opportunities)
- [확장 커스텀 필드 설정 방법](#How-To-Set-Up-Expanded-Custom-Fields)
- [기회 목록 보기에서 커스텀 필드 표시 및 필터링](#Display-and-Filter-Custom-Fields-in-Opportunity-List-View)
- [자주 묻는 질문](#Frequently-Asked-Questions)
- [관련 아티클](#Related-Articles)

# 확장된 커스텀 필드 유형이란?

확장된 커스텀 필드는 하이퍼클래스 내에서 정보를 수집, 검증, 표시하기 위한 추가 옵션을 제공해요. 이전까지는 연락처(Contacts)에서만 사용할 수 있었지만, 이제는 기회 관리(Opportunities)로도 확장되어, 연락처 필드나 정형화되지 않은 메모에 의존하지 않고도 중요한 거래 정보를 관리할 수 있습니다.

확장된 필드 유형에는 URL, 날짜 및 시간(Date & Time), 서식 있는 텍스트(Rich Text), 사용자(User), 그리고 시각적인 체크박스(Checkbox) 및 라디오 선택(Radio Select) 옵션이 포함됩니다.

## 기회 관리와 연락처를 위한 확장된 커스텀 필드의 주요 이점

확장된 커스텀 필드는 팀이 정확한 정보를 유지하고, 거래에 대해 협업하며, 중요한 기회(Opportunity) 세부 정보를 빠르게 파악하는 데 도움을 줘요.

- 
거래 정보 중앙화: 제안서 링크, 계약 날짜, 거래 요약을 기회(Opportunity)에 직접 저장할 수 있어요.

- 
더 나은 팀 협업: 사용자(User) 필드를 사용해 여러 팀원을 거래와 연결할 수 있어요.

- 
유연한 서식 적용: 서식 있는 텍스트(Rich Text)를 사용해 상세한 거래 정보를 체계적으로 정리할 수 있어요.

- 
시각적 선택: 이미지와 아이콘을 사용해 서비스, 우선순위, 카테고리를 쉽게 구분할 수 있어요.

- 
향상된 파이프라인 가시성: 목록 보기(List View)에 커스텀 필드를 표시하고 고급 필터(Advanced Filters)를 사용할 수 있어요.

- 
더 체계적인 URL 수집: 도메인 제어 기능이 포함된 전용 필드를 사용해 웹사이트 주소, 프로필 URL, 자료 링크 등 다양한 URL을 수집할 수 있어요.

- 
날짜와 시간에 대한 더 세밀한 제어: 필드가 날짜와 시간을 함께 수집할지, 날짜만 수집할지, 시간만 수집할지 선택하고, 선택 가능한 날짜 범위도 제어할 수 있어요.

- 
향상된 팀 협업: 사용자(Users) 필드를 사용해 한 명 또는 여러 명의 팀원을 레코드와 연결하고, 선택된 사용자에게 팔로워 수준의 접근 권한을 부여할 수 있어요.

- 
더 알아보기 쉬운 라디오 선택 항목: 사용자가 단일 항목을 선택해야 할 때 라디오 버튼 옵션에 이미지나 아이콘을 추가할 수 있어요.

- 
모바일 필드 업데이트: 모바일 앱에서 연락처 및 기회(Opportunity) 레코드의 지원되는 커스텀 필드를 바로 확인하고 수정할 수 있어요.

## 지원되는 커스텀 필드 유형 및 설정 옵션

각 확장 필드 유형은 정보를 가장 적합한 형식으로 수집할 수 있도록 서로 다른 설정 옵션을 제공해요. 올바른 필드 유형을 선택하면 일관성이 향상되고 기회(Opportunity) 세부 정보를 검토하기가 더 쉬워집니다.

필드 유형 | 설정 옵션 | 기회 관리 활용 사례
---|---|---
**URL** | 모든 도메인 허용, 지정된 도메인만 허용, 또는 지정된 도메인 차단 | 제안서 및 계약 링크
**날짜 및 시간(Date & Time)** | 날짜만, 시간만, 또는 둘 다; 과거/미래 날짜, 날짜 범위, 요일 설정 | 계약 시작일 및 프로젝트 마감일
**서식 있는 텍스트(Rich Text)** | 텍스트 서식, 제목, 목록, 링크, 이모지 | 거래 요약 및 범위 메모
**사용자(User)** | 단일 사용자 또는 다중 사용자 선택 | 영업팀 및 구현팀
**체크박스(Checkbox)** | 이미지가 포함된 텍스트; 다중 선택 | 거래에 포함된 서비스
**라디오 선택(Radio Select)** | 이미지 또는 아이콘이 포함된 텍스트; 단일 선택 | 거래 우선순위 또는 서비스 패키지

주요 설정 세부사항

- 
URL 유효성 검사: 도메인 제한을 위반하는 URL은 "이 URL은 허용되지 않습니다. 허용된 도메인을 사용하세요."라는 메시지와 함께 거부됩니다.

- 
날짜 제한: "미래 날짜만(Future Dates Only)"을 선택하면 오늘 날짜는 제외됩니다. 오늘 날짜를 선택할 수 있게 하려면 "모든 날짜(Any Date)"를 선택하세요.

- 
서식 있는 텍스트: 굵게, 기울임, 밑줄, 취소선, 색상, 강조 표시, 목록, 링크, 이모지, 그리고 # 또는 ##를 사용한 제목 서식을 지원합니다.

- 
사용자 필드: 선택된 사용자는 기회(Opportunity)의 소유자가 되지 않고 팔로워 수준의 접근 권한을 받습니다. "다중 사용자 허용(Allow multiple users)" 설정은 필드 생성 후에는 변경할 수 없습니다.

- 
시각적 옵션: 체크박스 필드는 이미지를 지원하고, 라디오 선택 필드는 이미지 또는 아이콘을 지원합니다.

필드 설정, 모바일 편집, 스냅샷 지원에 대한 자세한 내용은 [확장된 커스텀 필드 유형 및 설정 옵션](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000008811-expanded-custom-field-types-and-configuration-options)을 참고하세요.

## 모바일 및 스냅샷 지원

확장된 커스텀 필드는 모바일에서의 레코드 관리와 하이퍼클래스 로케이션(Location) 간 재사용 가능한 설정도 지원해요. 덕분에 팀원들이 다른 기기에서 작업하거나 새로운 하위 계정(Sub-account)을 설정할 때도 일관된 정보를 유지할 수 있습니다.

- 
모바일: 지원되는 확장 필드는 모바일 앱에서 연락처 및 기회(Opportunity) 레코드로 확인하고 수정할 수 있어요. 설정된 유효성 검사 규칙도 동일하게 적용됩니다.

- 
스냅샷(Snapshot): URL 제한, 날짜 설정, 시각적 옵션을 포함하여 지원되는 확장 커스텀 필드와 그 설정을 스냅샷에 포함할 수 있어요.

## 기회 관리를 위한 확장 커스텀 필드 설정 방법

기회(Opportunity) 오브젝트 아래에 커스텀 필드를 생성하면 정보가 올바른 거래와 연결됩니다. 저장하기 전에 필드 제한사항과 선택 설정을 구성해두세요. 특히 사용자(User) 필드의 경우 다중 사용자 선택 여부는 나중에 변경할 수 없으니 주의하세요.

- 
**Settings(설정) > Custom Fields(커스텀 필드)**로 이동하세요.

- 
**Opportunity(기회 관리)**를 선택하고 **Create Field(필드 생성)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503326/original/uC-8AasL-1B0XgjA72GL_LcVTQ8pwq8FDA.png?1793276726)

- 
**URL, 날짜 및 시간(Date & Time), 서식 있는 텍스트(Rich Text), 사용자(User), 체크박스(Checkbox), 라디오 선택(Radio Select)** 중 원하는 유형을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503411/original/qQUlNxA8pjDQGoNd4io9lcXqkVG1KGEN1g.png?1793276777)

- 
필드 이름과 해당 설정을 구성하세요. 시각적 옵션의 경우, 체크박스는 **이미지가 포함된 텍스트(Text with image)**를, 라디오 선택은 **이미지가 포함된 텍스트 / 아이콘이 포함된 텍스트(Text with image / Text with icon)**를 선택하세요.

- 
폴더를 선택하고 **Create custom field(커스텀 필드 생성)**를 클릭하세요.

- 
**Opportunities(기회 관리)**로 이동하여 거래를 열고, **Fields(필드)** 영역에서 새 필드에 값을 입력하세요.

## 확장 커스텀 필드 설정 방법

필드 유형과 사용 가능한 설정을 올바르게 구성하면 사용자가 비즈니스 프로세스에서 요구하는 형식으로 정보를 정확하게 입력할 수 있어요. 커스텀 필드는 Custom Fields(커스텀 필드) 영역에서 관리하며, 여기서 적합한 오브젝트를 선택하고 사용 목적에 맞게 필드를 설정할 수 있습니다.

- 
**Settings(설정)**로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081484152/original/TyL4ws6CggZjlYGqtYUQOy67XSoJJ4KHSA.png?1790009348)

- 
**Custom Fields(커스텀 필드)**를 선택하세요.

- 
커스텀 필드를 생성할 오브젝트를 선택하세요.

- 
**Create Field(필드 생성)** 또는 새 커스텀 필드를 만드는 옵션을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081484202/original/i4wMxkwHMYvu4Z4k1SDKnFuD4IGsWMRVgA.png?1790009374)

- 
수집하려는 정보에 적합한 필드 유형을 선택하세요.

- 
필드 이름과 기타 해당 설정을 구성하세요.

- 
선택한 필드 유형에 맞는 세부 설정을 구성하세요:

URL 필드의 경우, 적절한 도메인 제어 설정을 구성하세요.

- 
날짜 및 시간(Date and Time) 필드의 경우, 필요한 날짜/시간 형식과 해당 날짜 제한사항을 선택하세요.

- 
서식 있는 텍스트(Rich Text) 필드의 경우, 서식이 적용된 텍스트가 필요한 콘텐츠용으로 필드를 생성하세요.

- 
사용자(Users) 필드의 경우, 레코드가 한 명 또는 여러 명의 사용자와 연결되어야 하는지에 따라 구성하세요.

- 
체크박스(Checkbox) 필드의 경우, 시각적 선택이 필요하면 각 옵션에 이미지를 추가하세요.

- 
라디오(Radio) 필드의 경우, 시각적인 구분이 필요하면 각 옵션에 이미지나 아이콘을 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081484231/original/CMWakaTHoW2e58fVY7AKmwSSMCUVUnEWBA.png?1790009397)

- 
필드 설정을 검토하고 제공되는 미리보기를 확인하세요.

- 
커스텀 필드를 저장하세요.

중요: 커스텀 필드의 사용 가능 여부는 필드가 사용되는 오브젝트나 영역에 따라 달라질 수 있어요. 프로세스를 구성하기 전에 선택한 필드 유형이 원하는 오브젝트와 사용 사례에 사용 가능한지 반드시 확인하세요.

## 기회 목록 보기에서 커스텀 필드 표시 및 필터링

확장된 커스텀 필드는 기회 목록 보기(Opportunity List View)에 컬럼으로 추가하거나 고급 필터(Advanced Filters)와 함께 사용할 수 있어요. 덕분에 거래 정보를 검토하고 커스텀 필드 값을 기준으로 기회(Opportunity)를 찾기가 더 쉬워집니다.

커스텀 필드를 표시하려면:

- 
**Opportunities(기회 관리) > List View(목록 보기)**로 이동하세요.

- 
**Manage Fields(필드 관리)**를 여세요.

- 
컬럼으로 표시하고 싶은 커스텀 필드를 선택하세요.

기회(Opportunity)를 필터링하려면:

- 
Opportunities(기회 관리)에서 **Advanced Filters(고급 필터)**를 여세요.

- 
원하는 커스텀 필드를 선택하세요.

- 
사용 가능한 필터 조건과 값을 선택하세요.

- 
필터를 적용하여 조건에 맞는 기회(Opportunity)를 확인하세요.

필터 연산자는 필드 유형에 따라 다르며, 컬럼으로 표시된다고 해서 반드시 정렬을 지원하는 것은 아닙니다.

## 확장 커스텀 필드에 대한 Public API 지원

이제 하이퍼클래스의 Public API에서도 확장된 커스텀 필드 유형을 지원하여, 개발자와 연동 파트너가 프로그래밍 방식으로 커스텀 필드를 생성, 조회, 업데이트할 수 있어요. 이 기능 개선으로 외부 애플리케이션, 연동(Integration), 자동화 프로세스에서 커스텀 필드를 더 쉽게 다룰 수 있습니다.

지원되는 커스텀 필드 유형

다음 6가지 커스텀 필드 개선사항에 대해 Public API를 지원합니다:

- 
URL 필드: 도메인 제한 설정을 포함한 URL 커스텀 필드를 생성, 조회, 업데이트할 수 있어요.

- 
날짜 및 시간 필드: 날짜 및 시간(Date & Time), 날짜만(Date Only), 시간만(Time Only) 커스텀 필드를 다룰 수 있어요.

- 
서식 있는 텍스트 필드: Public API를 통해 서식 있는 텍스트(Rich Text) 커스텀 필드를 관리할 수 있어요.

- 
사용자 필드: 단일 사용자 또는 다중 사용자 선택으로 구성된 커스텀 필드를 다룰 수 있어요.

- 
이미지가 포함된 체크박스 필드: 이미지 기반 옵션이 포함된 체크박스 커스텀 필드를 다룰 수 있어요.

- 
이미지가 포함된 라디오 버튼 필드: 이미지 기반 옵션이 포함된 라디오 버튼 커스텀 필드를 다룰 수 있어요.

API 문서

개발자는 지원되는 커스텀 필드를 다루기 위해 다음 API 엔드포인트를 사용할 수 있어요:

- 
[Create Custom Field](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-field/)

- 
[Get Custom Fields](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-fields/)

- 
[Get Custom Field](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field/)

- 
[Update Custom Field](https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field/)

지원되는 요청 파라미터, 필드 설정, 응답 형식에 대해서는 API 문서를 참고하세요.

## 자주 묻는 질문

Q: 기회 관리(Opportunities)에서 확장된 커스텀 필드 유형이 보이지 않아요.

이 기능은 Opportunity-First 비공개 베타의 일부입니다. 해당 로케이션(Location)이 활성화되어 있는지 확인해주세요.

Q: 사용자(User) 커스텀 필드를 생성한 후 다중 사용자 허용으로 변경할 수 있나요?

아니요. "다중 사용자 허용(Allow multiple users)" 설정은 필드를 생성하기 전에 미리 활성화해야 합니다.

Q: 사용자(User) 커스텀 필드를 통해 사용자를 추가하면 기회(Opportunity)의 소유자가 변경되나요?

아니요. 선택된 사용자는 팔로워 수준의 접근 권한을 받지만, 소유권은 별도로 유지됩니다.

Q: 날짜 및 시간(Date & Time) 필드에서 왜 오늘 날짜를 선택할 수 없나요?

"미래 날짜만(Future Dates Only)" 설정은 오늘 날짜를 제외합니다. 오늘 날짜를 선택할 수 있게 하려면 "모든 날짜(Any Date)" 또는 적절한 날짜 범위를 사용하세요.

Q: 이 필드들을 기회 목록 보기(Opportunity List View)와 고급 필터(Advanced Filters)에서 사용할 수 있나요?

네. 확장된 필드 유형은 목록 보기 컬럼으로 표시하거나 고급 필터와 함께 사용할 수 있어요. 사용 가능한 필터링 옵션은 필드 유형에 따라 다릅니다.

Q: 기존 연락처(Contact) 커스텀 필드를 기회(Opportunity) 커스텀 필드로 변환할 수 있나요?

아니요. 커스텀 필드는 생성 시 선택한 오브젝트와 연결됩니다. 거래에 직접 정보를 저장하려면 기회(Opportunity) 아래에 새 필드를 생성하세요.

---
*원문 최종 수정: 2026-10-30*
*Hyperclass 사용 가이드 — hyperclass.ai*