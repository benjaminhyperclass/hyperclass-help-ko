---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000007830-ask-the-booker-location-for-services-v2-
번역일: 2026-08-11
카테고리: 04-캘린더-예약 > 서비스
---

# 서비스(v2)에서 예약자에게 위치 물어보기(Ask the Booker Location)

예약자에게 위치 물어보기(Ask the Booker Location) 기능(v2)을 사용하면 예약 진행 중에 고객의 서비스 주소를 직접 수집할 수 있습니다. 이 문서에서는 이 기능의 작동 방식, 사용 시점, Ask the Booker 위치 생성 방법, 직원 예약 가능 시간(Staff Availability)에 배정하는 방법, 그리고 고객이 예약 페이지에서 주소를 입력할 때 보게 되는 화면에 대해 설명합니다.

**목차**

- [예약자에게 위치 물어보기(Ask the Booker Location for Services) v2란 무엇인가요?](#What-is-Ask-the-Booker-Location-for-Services-(v2)?)
- [Ask the Booker Location의 주요 장점](#Key-Benefits-of-Ask-the-Booker-Location)
- [Ask the Booker Location 기능을 사용해야 할 때](#When-to-Use-the-Ask-the-Booker-Location-Feature)
- [서비스(v2)에서 Ask the Booker Location 설정 방법](#How-To-Setup-Ask-the-Booker-Location-for-Services-(v2))
- [자주 묻는 질문](#Frequently-Asked-Questions)

# **예약자에게 위치 물어보기(Ask the Booker Location for Services) v2란 무엇인가요?**

Ask the Booker Location은 서비스(Services) v2의 위치 유형 중 하나로, 예약 진행 중에 고객이 직접 서비스 주소를 입력할 수 있도록 해줍니다. 이 기능은 서비스가 고객의 자택, 사무실, 작업 현장, 또는 예약자가 선택한 기타 주소에서 이루어질 때 예약별로 위치 정보를 수집하는 데 도움이 됩니다.

Ask the Booker 위치는 서비스(Services) v2에서 예약 가능한 서비스 위치처럼 동작하지만, 고정된 사업장 주소를 요구하는 대신 고객에게 서비스가 이루어질 주소를 직접 입력하도록 안내합니다. 고객이 입력한 주소는 해당 예약(Appointment)에 저장되며, 예약 상세 정보와 예약 관련 커뮤니케이션에서 참조할 수 있습니다.

이 위치 유형은 다음과 같이 이동형 또는 현장 서비스를 제공하는 비즈니스에 가장 적합합니다:

- 
출장 뷰티/웰니스 서비스

- 
가정 수리 또는 유지보수 예약

- 
현장 상담

- 
필드 서비스 예약

- 
고객 현장 설치 또는 점검

## **Ask the Booker Location의 주요 장점**

- 
고객이 제공하는 서비스 주소 수집: 고객이 예약 진행 중에 서비스가 이루어질 정확한 주소를 입력합니다.


- 
이동형/현장 서비스 지원: 고객의 자택, 사무실, 작업 현장 또는 기타 요청 위치에서 서비스를 제공할 수 있습니다.


- 
수동 후속 작업 감소: 예약 시 주소가 수집되므로, 이후 전화·이메일·문자로 별도 요청할 필요가 줄어듭니다.


- 
일관된 예약 흐름 유지: 고객은 평소와 동일하게 서비스를 선택하고, 시간을 정하고, 세부 정보를 확인한 뒤 예약을 확정합니다.


- 
위치 기반 예약 가능 시간 활용: 서비스, 직원 예약 가능 시간(Staff Availability), 요금은 해당 위치에 배정된 설정을 계속 따릅니다.

## **Ask the Booker Location 기능을 사용해야 할 때**

Ask the Booker 위치는 고객마다 서비스 주소가 달라지는 예약에 적합하게 설계되었습니다. 이 위치 유형을 선택하면 각 예약에만 적용되는 주소마다 별도의 고정 위치를 만들지 않아도 됩니다.

다음과 같은 경우에 Ask the Booker 위치를 사용하세요:

- 
사업자가 예약을 위해 고객에게 직접 방문하는 경우

- 
고객이 서비스가 이루어질 장소를 직접 결정하는 경우

- 
예약마다 서비스 주소가 다른 경우

- 
주소를 해당 예약에 직접 저장해야 하는 경우

- 
서비스에 고정된 사업장 위치가 적용되지 않는 경우


사용할 수 있는 위치 이름의 예시는 다음과 같습니다:

- 
직접 주소 입력(Enter Your Own Address)

- 
고객 위치(Customer Location)

- 
현장 예약(On-Site Appointment)

- 
이동형 서비스 주소(Mobile Service Address)

- 
고객이 제공하는 서비스 주소(Service Address Provided by Customer)

## **서비스(v2)에서 Ask the Booker Location 설정 방법**

올바르게 설정해야 고객이 Ask the Booker 위치를 선택하고 주소를 입력하며, 올바른 직원 예약 가능 시간으로 예약할 수 있습니다. 위치를 먼저 생성한 다음, 예약 가능한 옵션으로 표시되도록 직원 예약 가능 시간에 배정해야 합니다.

- 
**캘린더(Calendar)** > 캘린더 설정(Calendar Settings)으로 이동합니다.


![](https://jumpshare.com/share/ccApyYllUOupUphUampr+/Screen+Shot+2026-05-06+at+20.16.33.png)


- 
서비스(Services) > **위치(Locations)** 탭을 클릭합니다.


![](https://jumpshare.com/share/tz3kXHyCRroBfI5hLUJ5+/Screen+Shot+2026-05-06+at+20.17.44.png)


- 
+ New Location을 클릭하여 [새 위치를 추가](https://hyperclass.gitbook.io/hyperclass-docs)하거나 **기존 위치**를 **편집**합니다.


![](https://jumpshare.com/share/xP4Cn6BGjT4bVGZ8xKnh+/Screen+Shot+2026-05-06+at+20.19.15.png)


- 
예약자가 직접 서비스 주소를 입력하도록 허용(Let bookers enter their own service address) 옵션을 활성화합니다.


- 
고객이 언제 이 옵션을 선택해야 하는지 설명하는 **설명(description)**을 추가합니다. (권장 설명 예시: "서비스가 원하는 주소에서 이루어지길 원하시면 이 옵션을 선택하세요. 예약을 확정하기 전에 서비스 주소를 입력하라는 안내가 표시됩니다.")


- 
**변경사항 저장(Save Changes)**을 클릭합니다.


![](https://jumpshare.com/share/TxQrB7jZZr1Zdfdp2n5H+/Screen+Shot+2026-05-06+at+20.21.32.png)


- 
필요에 따라 직원 예약 가능 시간(Staff Availability)에 해당 위치를 배정합니다. ([서비스에서 직원 설정하기](../configuring-staff-in-services.md) 문서를 참고하세요.)

## **자주 묻는 질문**

**Q: 기존 위치를 편집해서 Ask the Booker 위치로 바꿀 수 있나요?**
네, 기존 위치를 편집하고 해당 위치에서 예약 시 고객 주소를 수집해야 한다면 **예약자가 직접 서비스 주소를 입력하도록 허용(Let bookers enter their own service address)** 옵션을 활성화할 수 있어요.

**Q: 고객이 주소를 입력하기 전에 위치를 먼저 선택하나요?**
네. 고객은 예약 진행 중에 Ask the Booker 위치를 선택한 다음, 예약을 확정하기 전에 서비스 주소를 입력해요.

**Q: 고객이 입력한 주소가 예약에 저장되나요?**
네. 고객이 제공한 주소는 예약에 저장되어, 사업자가 서비스가 이루어질 위치를 확인할 수 있어요.

**Q: 직원 예약 가능 시간에 위치를 배정해야 하나요?**
네. 고객이 해당 직원을 그 위치로 예약할 수 있도록 Ask the Booker 위치를 직원 예약 가능 시간에 배정해야 해요.

**Q: 이 기능이 서비스 요금이나 소요 시간에 영향을 주나요?**
아니요. 서비스 요금, 소요 시간, 예약 가능 시간, 예약 규칙은 서비스 및 직원 설정을 계속 따라가요.

**Q: 위치 이름은 어떻게 지어야 하나요?**
**직접 주소 입력(Enter Your Own Address)**, **고객 위치(Customer Location)**, **현장 예약(On-Site Appointment)**, **이동형 서비스 주소(Mobile Service Address)**처럼 고객이 이해하기 쉬운 이름을 사용하세요.

**Q: 고정된 사업장 위치에도 이 기능을 사용할 수 있나요?**
고정된 사업장 위치는 일반적으로 주소가 저장된 표준 위치로 생성해야 해요. Ask the Booker 위치는 예약마다 고객이 서비스 주소를 제공하는 경우에 가장 적합해요.

---
*원문 최종 수정: 2026-05-06*
*Hyperclass 사용 가이드 — hyperclass.ai*