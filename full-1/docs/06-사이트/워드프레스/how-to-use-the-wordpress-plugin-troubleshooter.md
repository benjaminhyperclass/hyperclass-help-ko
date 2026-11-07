---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006064-how-to-use-the-wordpress-plugin-troubleshooter
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 플러그인 문제 해결 도구 사용하기

플러그인끼리 충돌해서 사이트에 문제가 생겼을 때, 원인이 되는 플러그인을 찾아 바로 조치할 수 있는 도구예요. 화면이 하얗게 나오는 오류(White Screen of Death)가 떠도 사용할 수 있어요. 이 문서에서는 도구가 하는 일과 사용 시점, 그리고 사이트를 다시 정상으로 돌리는 순서를 안내해요.

## WordPress 플러그인 문제 해결 도구란?

WordPress 플러그인 문제 해결 도구는 하이퍼클래스 호스팅 대시보드에 들어 있는 기능이에요. 사이트 문제를 일으키는 플러그인을 자동으로 찾아 줘요. 사용 중인 플러그인을 끄고 다시 켜 보는 과정을 반복해서 원인 플러그인을 가려내요. 그래서 사이트가 멈춰 있는 시간을 줄일 수 있고, 심각한 오류가 있어도 사이트 기능을 복구할 수 있어요.

---

## 주요 장점

- 빠른 진단: 플러그인을 여러 개씩 묶어 테스트해서 원인 플러그인을 빠르게 찾아요.
- 쉬운 화면: 단계별로 안내해 주는 화면이라 문제 해결이 빨라요.
- 한 번에 조치: 원인 플러그인을 바로 비활성화해서 사이트 성능을 되돌려요.
- 심각한 오류에도 작동: White Screen of Death 같은 치명적인 오류가 나도 쓸 수 있어요.
- 팀 작업에 적합: 고객 사이트를 관리하는 에이전시, 프리랜서, 지원 팀을 위해 만들어졌어요.

---

## 사용 방법

아래 순서대로 따라 해 보세요.

1. 서브 계정에 로그인하세요.
2. **사이트 > WordPress**로 이동하세요.

   ![사이트 > WordPress 메뉴 화면](https://jumpshare.com/share/yUovDDJiwBFJS35IqaGW+/Screen+Shot+2025-08-19+at+7.35.36+PM.png)
3. 문제를 해결할 WordPress 웹사이트에서 **Manage Website**(웹사이트 관리)를 클릭하세요.

   ![Manage Website 버튼](https://jumpshare.com/share/kv3xSdavHWk8Cwqls4ke+/Screen+Shot+2025-08-19+at+7.40.12+PM.png)
4. 사이트 관리 화면 오른쪽 위에서 **빠른 작업** 드롭다운을 클릭하세요.
5. **Troubleshoot site**(사이트 문제 해결)를 클릭하세요.

   ![Troubleshoot site 메뉴](https://jumpshare.com/share/Djug5blSQFdMaiFiloDZ+/Screen+Shot+2025-08-19+at+7.44.16+PM.png)
6. **Find issues**(문제 찾기) 패널에서 **Start the process**(시작하기)를 클릭하세요.

   ![Find issues 패널의 Start the process 버튼](https://jumpshare.com/share/f0rMqJxTpiAjoqPcJI5E+/image+%2855%29.png)
7. 안내가 나오면 사이트의 핵심 기능에 꼭 필요한 플러그인만 선택하세요.
8. **Confirm plugins**(플러그인 확인)를 클릭하세요. 도구가 플러그인을 검사하기 시작해요.

   ![Confirm plugins 버튼](https://jumpshare.com/share/S7K6mgojzp2jKMpw6LsK+/image+%2856%29.png)
9. 오른쪽 패널에 **Finding the fix**(해결 방법 찾는 중) 화면이 나타나요.
10. 안내가 나오면 **계속**을 클릭하세요.

    ![Finding the fix 화면의 계속 버튼](https://jumpshare.com/share/QnHx52HL3oHix5HsNw8O+/image+%2858%29.png)
11. “Broken plugins found—We have identified the plugins causing your site to break”(문제를 일으키는 플러그인을 찾았어요)라는 메시지가 나오면 **Deactivate the plugin**(플러그인 비활성화)을 클릭해서 문제를 해결하세요.

    ![Broken plugins found 화면](https://jumpshare.com/share/vhSh0tvQu7AendBWSJp5+/image+%2859%29.png)
12. **Issues fixed**(문제 해결됨) 화면에 “We have reloaded your site again. Is everything fixed now?”(사이트를 다시 불러왔어요. 이제 모두 해결됐나요?)라는 질문이 나와요.

    - 사이트가 정상으로 작동하면 **Yes, it is fixed**(해결됐어요)를 클릭하세요.
    - 사이트가 아직 정상이 아니면 **Still broken**(아직 문제가 있어요)을 클릭해서 문제 해결을 이어 가세요.

      ![Issues fixed 화면](https://jumpshare.com/share/TKb9gNiISJgskUlV0fIU+/image+%2857%29.png)
13. “No plugin issues found—We have tested all active plugins and couldn’t identify a specific plugin causing your issue”(플러그인 문제를 찾지 못했어요. 사용 중인 모든 플러그인을 테스트했지만 문제를 일으키는 플러그인을 확인할 수 없었어요)라는 메시지가 나오면 아래 중 하나를 선택하세요.

    - **Return to dashboard**(대시보드로 돌아가기)를 클릭해서 돌아가거나,
    - **Restart troubleshooting**(문제 해결 다시 시작)을 클릭해서 처음부터 다시 실행하세요. 예를 들어 '꼭 필요한 플러그인' 선택을 바꾼 뒤 다시 테스트할 수 있어요.

      ![No plugin issues found 화면](https://jumpshare.com/share/tpIGpmTm90EFR2bwjUhw+/Screen+Shot+2025-08-19+at+8.22.31+PM.png)

---

## 자주 묻는 질문

### 사이트가 일부만 깨져 있어도 이 도구를 쓸 수 있나요?
네, 쓸 수 있어요. White Screen of Death 같은 심각한 문제가 있어도 작동해요.

### 특정 플러그인이 비활성화되지 않게 할 수 있나요?
네, 꼭 필요한 플러그인을 표시해 두면 문제 해결 과정 중에도 계속 켜진 상태로 유지돼요.

### 어떤 플러그인이 문제인지 도구가 어떻게 알아내나요?
플러그인을 껐다 켜기를 반복하면서 사이트 상태를 확인해요. 이 과정을 거쳐 문제를 일으키는 플러그인을 가려내요.

### WordPress 플러그인 문제 해결 도구는 누구를 위한 기능인가요?
고객 사이트를 관리하는 에이전시 사용자, 프리랜서, 소규모 사업자를 위해 만들어졌어요.
