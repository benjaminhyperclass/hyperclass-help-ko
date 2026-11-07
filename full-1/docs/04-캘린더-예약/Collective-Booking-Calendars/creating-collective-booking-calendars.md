---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003557-creating-collective-booking-calendars
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 공동 예약 캘린더 만들기

공동 예약 캘린더는 여러 팀원이 함께 참여하는 예약을 받을 때 쓰는 캘린더예요. 이 문서에서는 캘린더를 만드는 방법, 주 소유자를 바꾸는 방법, 알림과 결제가 어떻게 동작하는지 설명해요.

[동영상](https://www.youtube.com/embed/EAxHVz7H3Yk?&wmode=opaque)

1. **캘린더 > 캘린더 설정**으로 이동하세요.
2. **Create Calendar**(캘린더 만들기)를 클릭하세요.
3. **공동 예약**을 선택하세요.

![공동 예약 캘린더 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004350274/original/RpvzHmj3XUSnFky8A8G_PFRP4ppgcsBrAA.png?1691038898)

1. 이 캘린더에 꼭 필요한 정보를 입력하세요.
   1. **캘린더 이름**
   2. **팀원**: 공동 예약 캘린더에는 팀원이 최소 2명 필요해요.
   3. **Custom URL**(사용자 지정 URL): 캘린더 이름을 바탕으로 자동으로 만들어져요. 필요하면 직접 수정할 수 있어요.
   4. **미팅 장소**: 필수는 아니지만 입력하기를 권해요. 미팅 장소를 입력하지 않으면 주 소유자의 사용자 지정 미팅 장소가 기본값으로 쓰여요.
2. **확인**을 클릭하면 공동 예약 캘린더가 만들어져요.

![공동 예약 캘린더 기본 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004350272/original/ubYHojSvUY0ZC2qiofg-Hf6ANvpL1DG0oQ.png?1691038897)

3. 캘린더를 만든 뒤 세부 내용을 바꾸려면 **캘린더 편집**을 클릭하세요. 캘린더 설정은 섹션별로 나뉘어 있어서 찾기 쉬워요. **결제**, **Notifications & policies**(알림 및 정책), **Widget appearance**(위젯 모양), **External sync**(외부 동기화), **Booking channels**(예약 채널) 같은 항목은 **고급 설정**에서 열 수 있어요.

{% hint style="info" %}
**여러 서비스를 제공하는 비즈니스를 위한 팁**

냉장고 수리, 세탁기 수리, 건조기 수리처럼 서비스가 여러 가지라면 예약을 정리하는 방법이 두 가지 있어요.

방법 1: 서비스마다 캘린더를 따로 만드세요. 서비스에 맞게 팀원, 가능 시간, 미팅 설정을 다르게 정할 수 있어요.

방법 2: 공동 예약 캘린더 하나에 서비스 선택 드롭다운이 있는 커스텀 폼을 추가하세요. 고객이 예약할 때 서비스 종류를 고르고, 내부에서는 연락처 배정, 태그, 자동화로 예약을 나눠 처리할 수 있어요.
{% endhint %}

---

## **주 소유자 설정하기**

공동 예약에서 주 소유자는 예약을 이끄는 팀원이에요. 주 소유자는 **예약 담당자**도 맡아요. 연락처 배정이 켜져 있으면 연락처도 주 소유자에게 배정돼요.

기본적으로 공동 예약에 가장 먼저 추가한 팀원이 주 소유자가 돼요. 공동 예약에서 주 소유자는 삭제할 수 없어요.

**주 소유자를 바꾸려면**

1. **캘린더 편집**을 열고 **기본 세부 정보**(또는 미팅·소유자 정보가 있는 섹션)로 이동하세요.
2. 현재 주 소유자가 아닌 모든 팀원 옆에 **Make owner**(소유자로 지정)가 보여요.
3. 주 소유자로 바꿀 팀원 옆의 **Make owner**를 클릭하세요.
4. 아래 화면처럼 소유자가 바뀌고, 해당 팀원 옆에 **소유자** 표시가 나타나요.

   ![주 소유자 변경 후 소유자 표시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066595536/original/qZOHlub9CbviIBOEjCjlLv1LOLKyl3a2Zw.png?1773146140)

{% hint style="info" %}
주 소유자는 공동 예약 캘린더에서 삭제할 수 없어요. 팀원을 삭제하려면 먼저 그 팀원이 주 소유자가 아닌지 확인하세요.
{% endhint %}

![공동 예약 캘린더 팀원 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004350273/original/_hR4OVjyuR5g_jgkE9AzpGFhfWWbItXI8w.png?1691038897)

### **알림은 어떻게 가나요?**

배정된 사용자만 이메일 알림을 받아요. 다만 모든 사용자는 연동된 외부 캘린더(Google, Outlook, iCloud)에서 캘린더 초대 알림을 받아요.

### **결제**

캘린더에서 결제를 켜 두면 공동 예약에서도 결제가 그대로 동작해요. 사용자가 먼저 결제하고, 결제가 확인된 뒤에야 예약이 완료돼요.
