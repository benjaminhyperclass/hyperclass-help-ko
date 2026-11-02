---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000003195-setup-sms-verification-in-forms-and-surveys
번역일: 2026-11-02
카테고리: 06-사이트 > 폼
---

# 폼(Form)과 설문(Survey)에서 SMS 인증 설정하기

폼(Form)과 설문(Survey)의 SMS 인증 기능을 사용하면 응답자가 입력한 전화번호를 실제로 사용하고 있는지 확인할 수 있어요. 이 기능을 활성화하면 하이퍼클래스가 입력된 번호로 일회용 비밀번호(OTP)를 전송하고, 응답자는 인증을 완료해야 해요. 이 글에서는 SMS 인증이 어떻게 작동하는지, 그리고 폼이나 설문의 전화번호(Phone) 필드에서 어떻게 활성화하는지 안내해드릴게요.

**목차**

- [폼과 설문의 SMS 인증이란?](#What-is-SMS-Verification-in-Forms-and-Surveys?)
- [폼과 설문에서 SMS 인증 설정하는 방법](#How-to-Set-Up-SMS-Verification-in-Forms-and-Surveys)
- [자주 묻는 질문](#Frequently-Asked-Questions)

# 폼과 설문의 SMS 인증이란?

SMS 인증은 하이퍼클래스 폼이나 설문의 전화번호 필드에 추가 인증 단계를 더해주는 기능이에요. 폼이나 설문을 작성하는 사람이 입력한 전화번호로 실제 메시지를 받을 수 있는지 확인해주기 때문에, 수집하는 연락처 정보의 신뢰도를 높일 수 있어요.

SMS 인증이 활성화되면, 응답자는 전화번호를 입력한 후 **Verify Phone(전화번호 인증)** 버튼을 선택해요. 그러면 하이퍼클래스가 해당 번호로 OTP를 전송하고, 응답자가 이 코드를 입력하면 인증이 완료돼요.

인증 상태는 폼 또는 설문 제출 데이터의 **Phone Verified(전화번호 인증됨)** 필드에서도 확인할 수 있어요.

참고: SMS OTP 메시지 발송에는 해당 메시징 요금이 부과돼요.

## 폼과 설문에서 SMS 인증 설정하는 방법

전화번호 필드에 SMS 인증을 직접 활성화하면 응답자가 정보를 제출하기 전에 자신의 번호를 인증할 수 있어요.

참고: SMS OTP 인증을 활성화하려면 먼저 로케이션 설정(Location Settings)에 전화번호가 등록되어 있어야 해요.

- 
왼쪽 네비게이션 메뉴에서 **Sites(사이트)**를 클릭하세요.


- 
**Forms(폼)** 또는 **Surveys(설문)**를 선택하세요.


- 
새 폼이나 설문을 만들거나, 빌더(builder)에서 기존 항목을 여세요.


![](https://jumpshare.com/share/QcHYYojmG9XKZTMnZd9R+/Screen+Shot+2026-10-07+at+16.58.09.png)


- 
폼이나 설문에 아직 **Phone(전화번호)** 필드가 없다면 추가하세요.


- 
**Phone(전화번호)** 필드를 선택해서 필드 설정을 여세요.


- 
전화번호 필드 설정에서 아래로 스크롤하여 **Validate Phone(전화번호 검증)**을 활성화하세요.


- 
폼이나 설문을 미리보기(Preview)한 후 저장하고 연동하세요.

![](https://jumpshare.com/share/JrhsezoYvW70KJE9U8tw+/GIF+Recording+2026-10-07+at+17.01.00.gif)


## 자주 묻는 질문

**Q: SMS 인증을 활성화하기 전에 로케이션 전화번호가 꼭 필요한가요?**
네, 맞아요. SMS OTP 인증을 활성화하기 전에 하위 계정(Sub-account)에 전화번호가 설정되어 있어야 해요.

**Q: 응답자가 전화번호를 인증했는지는 어디서 확인하나요?**
폼 또는 설문 제출 데이터의 **Phone Verified(전화번호 인증됨)** 필드에서 인증 결과를 확인할 수 있어요.

**Q: SMS 인증 메시지는 무료인가요?**
아니요. OTP 메시지에는 해당 SMS 메시징 요금이 부과돼요.

**Q: 응답자가 전화번호 인증을 완료하지 않으면 어떻게 되나요?**
제출 데이터에서 해당 전화번호는 인증됨으로 표시되지 않아요.

---
*원문 최종 수정: 2026-10-07*
*Hyperclass 사용 가이드 — hyperclass.ai*