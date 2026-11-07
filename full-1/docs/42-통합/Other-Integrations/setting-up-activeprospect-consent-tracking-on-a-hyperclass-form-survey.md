---
원문: https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey
번역일: 2026-11-07
카테고리: 42-통합
---

# 하이퍼클래스 폼·설문에 ActiveProspect 동의 추적 설정하기

하이퍼클래스 폼과 설문에 ActiveProspect 동의 추적(TrustedForm)을 붙이는 방법을 안내해요. 숨김 필드, 커스텀 스크립트, 커스텀 CSS를 차례로 설정해요.

[동영상](https://www.youtube.com/embed/lNEB3Calxl0?&wmode=opaque)

## 폼에 설정하기

1. 평소처럼 폼을 만들어요.
2. 커스텀 필드로 **Short Text**(짧은 텍스트) 필드를 추가하고 이름을 `xxTrustedFormCertUrl`로 정해요. 이 필드를 폼에서 **제출** 버튼 위로 끌어다 놓아요.
3. **저장**을 클릭한 뒤 **Integrate Form**(폼 연동) 버튼을 클릭하고 **링크** 탭을 열어요. 폼 URL을 복사해서 Google Chrome의 다른 탭에서 열어 주세요. 4단계를 마치고 이 탭으로 돌아와요.
4. **HTML** 필드를 폼의 버튼 아래로 끌어다 놓아요. HTML 필드를 선택하고 **스크립트 편집** 버튼을 클릭한 다음, 아래 「커스텀 스크립트」를 복사해서 붙여 넣어요. 아직 저장하지 마세요.
5. 3단계에서 연 탭으로 돌아가요. 페이지에서 마우스 오른쪽 버튼을 클릭하고 **검사**를 선택해요. 마우스 포인터 아이콘을 선택한 뒤 `xxTrustedFormCertUrl` 필드를 클릭하고 그 필드의 ID를 복사해요.
6. 폼의 **스크립트 편집** 창으로 돌아와서 `FORMID` 두 곳을 모두 복사한 ID로 바꾸고 **저장**을 클릭해요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
7. 아래 「폼용 커스텀 CSS」를 복사해요. **스타일** 탭을 열고 **Custom CSS**(커스텀 CSS) 필드에 붙여 넣어요. 괄호 안의 숫자는 폼에서 `xxTrustedFormCertUrl` 필드가 놓인 위치에 맞게 바꿔요.
8. 폼을 저장해요.

### 폼용 커스텀 CSS

```
.form-field-wrapper:nth-child(n) {
  display: none;
}
```

### 설문용 커스텀 CSS

```
.slide-no-SlideNumber .form-field-wrapper:nth-child(n) {
  display: none;
}
```

{% hint style="info" %}
1. SlideNumber는 자리 표시용 값이에요. 실제 설문 슬라이드 번호로 바꿔 주세요.
2. n은 숨기려는 필드의 자리 표시용 값이에요.
3. `xxTrustedFormCertUrl`은 슬라이드나 폼에서 숨기는 모든 필드보다 위에 놓아 주세요.
{% endhint %}

### 예시

`xxTrustedFormCertUrl` 필드가 2번째 슬라이드의 4번째 요소라면 이렇게 써요.

```
.slide-no-2 .form-field-wrapper:nth-child(4) {
  display: none;
}
```

### 커스텀 스크립트

```
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
