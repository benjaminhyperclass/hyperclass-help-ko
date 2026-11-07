---
원문: /support/solutions/articles/155000009231-how-to-check-email-campaigns-for-spam-before-sending
번역일: 2026-11-07
카테고리: 44-신기능-2026
---

# 이메일 캠페인 발송 전 스팸 위험 확인하기

**Pre-Send Spam Check**(발송 전 스팸 확인)는 이메일 캠페인을 보내기 전에 스팸으로 분류될 위험이 있는지 미리 점검하는 기능이에요. 이메일 콘텐츠와 발신자 설정을 분석해서 전달률에 영향을 줄 수 있는 문제를 알려 주고, 받는 사람의 받은편지함에 도착할 가능성을 높이는 개선 방법도 안내해 줘요.

## Pre-Send Spam Check란?

Pre-Send Spam Check는 캠페인을 시작하기 전에 스팸과 관련된 문제를 찾아 해결할 수 있도록 돕는 이메일 분석 도구예요.

다음 세 가지 영역을 살펴봐요.

- **콘텐츠**: 이메일 콘텐츠에 스팸으로 의심받을 만한 요소, 위험한 문구, 그 밖에 전달률에 영향을 줄 수 있는 문제가 있는지 확인해요.
- **Sender setup**(발신자 설정): 발신자 설정에 문제가 있는지 확인해요.
- **Trust & reputation**(신뢰도 및 평판): 이메일 서비스 제공업체가 메시지를 평가할 때 영향을 줄 수 있는 요소를 알려 줘요.

확인이 끝나면 개선을 권장하는 항목의 개수, **위험도 높음**이나 **중간 위험** 같은 위험 수준, 문제별 해결 방법이 표시돼요.

내용을 수정한 뒤 발송 전에 다시 확인할 수도 있어요.

## 이메일 스팸 위험 확인하기

1. **마케팅 > 이메일 > 캠페인**으로 이동한 다음, 이메일 캠페인을 만들거나 열어요.

   ![이메일 캠페인 목록 화면](https://jumpshare.com/share/FPMkk7pQz08nMrIJizAK+/Screen+Shot+2026-10-19+at+21.08.12.png)
2. 이메일을 준비한 뒤 **Send or Schedule**(발송 또는 예약)을 열어요.

   ![발송 또는 예약 화면 열기](https://jumpshare.com/share/rrB0UrXyDnBZGeR0xRV6+/Screen+Shot+2026-10-19+at+21.09.37.png)
3. 발신자 이름, 도메인, 발신 이메일, 제목 같은 필요한 정보를 입력해요.

   ![발신자 정보 입력 화면](https://jumpshare.com/share/FuTwRqjFQyvZbDQnPjVs+/Screenshot+2026-10-19+at+21.12.56.png)
4. **수신자 (받는 사람)** 아래로 스크롤한 다음 **Check now**(지금 확인)를 클릭해요.

   ![지금 확인 버튼](https://jumpshare.com/share/yPvSaQwAiDIAkzsmKVTy+/Screenshot+2026-10-19+at+21.13.40.png)
5. 확인 결과를 살펴봐요.
6. 안내된 권장 사항에 따라 문제를 수정한 뒤 **다시 확인**을 클릭해서 변경한 내용을 점검해요.
7. 결과에 만족하면 **Review and Send**(검토 및 발송)로 넘어가요.

   ![검토 및 발송 화면](https://jumpshare.com/share/U2ODxSon0vWt9KtWLywm+/Screenshot+2026-10-19+at+21.14.02.png)

{% hint style="info" %}
이메일 캠페인을 보내거나 예약하는 전체 과정은 [일반 이메일 캠페인 발송 또는 예약하기](../09-이메일/기타/how-to-send-a-regular-email-campaign-send-now-or-schedule.md)에서 볼 수 있어요. 발송 전에 이메일을 미리 보고 테스트하려면 [이메일 캠페인/템플릿 미리보기 및 테스트](../09-이메일/기타/preview-and-test-your-email-campaign-templates.md)를 참고하세요.
{% endhint %}

## 스팸 확인 결과 이해하기

결과 화면에는 세 가지 영역별로 개선을 권장하는 항목이 몇 개인지 표시돼요.

- **위험도 높음**: 발송 전에 우선 확인해야 하는 문제예요.
- **중간 위험**: 살펴보고 개선하는 것이 좋은 잠재적인 문제예요.
- **No improvements needed**(개선 필요 없음): 선택한 영역에서 발견된 문제가 없어요.

문제로 표시된 항목마다 무엇을 바꿔야 할지 이해하는 데 도움이 되는 안내가 함께 나와요.

{% hint style="warning" %}
**중요**: 권장 개선 사항이 없는 영역이 있어도 이메일 전체에 스팸 위험이 전혀 없다는 뜻은 아니에요. 발송하기 전에 세 가지 영역을 모두 살펴보세요.
{% endhint %}

이메일이 스팸함으로 가는 원인이 궁금하다면 [내 이메일이 스팸함으로 가는 이유](../09-이메일/why-are-my-emails-going-to-spam.md)를 참고하세요. SPF, DKIM, DMARC 인증 오류는 [이메일 인증 오류 해결하기: SPF, DKIM, DMARC 문제](../09-이메일/Authentication-and-Security/email-authentication-errors-fix-spf-dkim-and-dmarc-issues.md)에서 해결할 수 있어요.
