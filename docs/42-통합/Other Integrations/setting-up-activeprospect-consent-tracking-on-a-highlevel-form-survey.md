---

번역일: 2026-04-09
카테고리: 42-통합 > Other Integrations
---

# 폼 및 설문에서 ActiveProspect 동의 추적 설정하기

하이퍼클래스 폼(Form)에서 ActiveProspect 동의 추적을 설정하는 방법:

- 평소처럼 폼을 작성합니다
- 'xxTrustedFormCertUrl'이라는 이름의 커스텀 짧은 텍스트 필드(Custom Short Text Field)를 만들고 > 제출 버튼 위에 해당 필드를 드래그해서 넣습니다
- 폼을 저장 > 'Integrate Form(폼 연동)' 버튼 클릭 > 'Link(링크)' 탭 클릭 > 폼 URL을 복사해서 새로운 구글 크롬 탭에서 엽니다 (4단계 후 이 탭으로 돌아올 예정)
- HTML 필드를 버튼 아래로 드래그 > HTML 필드 선택 > 'Edit Script(스크립트 편집)' 버튼 클릭 > 아래 커스텀 스크립트를 복사/붙여넣기 (아직 저장하지 말것)
- 3단계에서 연 탭으로 돌아가서 > 페이지에서 마우스 우클릭 후 '검사' 선택 > 마우스 포인터 선택 > xxTrustedFormCertUrl 필드 클릭 > ID를 복사합니다
- 폼/스크립트 편집 모달로 돌아가서 두 곳의 FORMID를 복사한 ID로 교체 > 저장
- 아래 커스텀 CSS를 복사 > Styles(스타일) 탭 열기 > 커스텀 CSS 필드에 붙여넣기 > 괄호 안의 숫자를 폼 내 xxTrustedFormCertUrl 필드의 위치에 맞게 변경
- 폼 저장

**폼용 커스텀 CSS:**

```css
.form-field-wrapper:nth-child(n) {
  display: none;
}
```

**설문용 커스텀 CSS:**

```css
.slide-no-SlideNumber .form-field-wrapper:nth-child(n) {
  display: none;
}
```

**참고:**
- SlideNumber는 자리 표시자입니다. 실제 설문 슬라이드 번호로 교체해야 합니다.
- n은 숨기려는 필드의 자리 표시자입니다.
- xxTrustedFormCertUrl을 슬라이드/폼의 모든 숨김 필드보다 위에 배치하세요.

**예시:**

xxTrustedFormCertUrl 필드가 2번째 슬라이드의 4번째 요소에 있다면:

```css
.slide-no-2 .form-field-wrapper:nth-child(4) {
  display: none;
}
```

**커스텀 스크립트:**

```html
<script type="text/javascript">
  (function() {
      var field = 'xxTrustedFormCertUrl';
      var provideReferrer = false;
      var invertFieldSensitivity = false;
      var tf = document.createElement('script');
      tf.type = 'text/javascript'; tf.async = true;
      tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
        '://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) + '&field=' + escape(field) + '&l='+new Date().getTime()+Math.random() + '&invert_field_sensitivity=' + invertFieldSensitivity;
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s); }
  )();
function trustedFormCertUrlCallback(certificateUrl) {
    document.getElementsByName('customFieldId')[0].value = certificateUrl; 
  document.getElementsByName('customFieldId')[0].dispatchEvent(new Event("input"));
}
</script>
<noscript>
    <img src="http://api.trustedform.com/ns.gif" />
</noscript>
```

---
*원문 최종 수정: Tue, 24 Sep, 2024 at 3:38 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*