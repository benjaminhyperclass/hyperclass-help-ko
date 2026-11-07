---
원문: /support/solutions/articles/155000005108-how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-
번역일: 2026-11-07
카테고리: 06-사이트
---

# WordPress 사이트의 PHP 업로드 용량 제한 늘리기 (post_max_size, upload_max_filesize)

하이퍼클래스에서 호스팅하는 WordPress 사이트에 큰 파일, 테마, 플러그인을 올릴 때 "exceeds the maximum upload size for this site" 같은 오류가 나면 PHP 용량 제한을 늘려야 해요. 이 문서에서는 WordPress 관리자 화면에서 `.htaccess` 파일을 직접 수정해 기본 제한을 늘리는 방법을 안내해요.

{% hint style="warning" %}
`.htaccess` 방식으로 안정적으로 설정할 수 있는 업로드 용량의 최댓값은 300MB예요.

- 300MB보다 큰 값을 입력하면 **미디어 라이브러리**에는 새 용량 제한이 표시될 수 있어요. 하지만 실제 업로드는 여전히 실패해요.
- 300MB보다 큰 파일을 올리려면 서버 수준의 설정이 필요해요.
{% endhint %}

## 따라 하기

### 1단계: 파일 매니저 플러그인 설치하기

FTP 접속 없이 사이트의 핵심 파일을 수정하려면 플러그인을 사용하면 돼요.

1. WordPress 관리자 대시보드에 로그인하세요.
2. 왼쪽 메뉴에서 **플러그인 > 새로 추가**로 이동하세요.
3. "WP File Manager"(또는 이와 비슷한 신뢰할 수 있는 파일 매니저 플러그인)를 검색하세요.
4. **Install Now**(지금 설치)를 클릭한 다음 **Activate**(활성화)를 클릭하세요.

### 2단계: .htaccess 파일 찾기

1. 왼쪽 메뉴에서 방금 설치한 WP File Manager를 여세요.
2. 루트 디렉터리로 이동하세요. 보통 `public_html`이라는 이름이며, WordPress 핵심 파일이 설치된 폴더예요.
3. `.htaccess` 파일을 찾으세요.

{% hint style="info" %}
`.htaccess`는 시스템 핵심 파일이라 기본적으로 숨겨져 있을 수 있어요. 보이지 않으면 파일 매니저의 설정(환경설정)에서 **Show Hidden Files**(숨김 파일 표시)를 켜 보세요.
{% endhint %}

### 3단계: .htaccess 파일 수정하기

1. `.htaccess` 파일을 마우스 오른쪽 버튼으로 클릭하고 **Code Editor**(코드 편집기)를 선택하세요. 이 항목이 없으면 **편집**을 선택하세요.
2. 문서의 맨 아래로 스크롤하세요.
3. 아래 코드를 복사해서 맨 아래에 붙여넣으세요. `128M` 값은 필요에 맞게 바꿀 수 있어요(최대 300M).

   ```
   php_value upload_max_filesize 128M
   php_value post_max_size 128M
   php_value memory_limit 2048M
   php_value max_execution_time 600
   php_value max_input_vars 10000
   ```

4. **Save & Close**(저장 후 닫기)를 클릭하세요. 이 버튼이 없으면 **업데이트**를 클릭하세요.

### 4단계: 변경 내용 확인하기

WordPress가 새 제한 값을 인식했는지 바로 확인해 보세요.

1. WordPress 대시보드에서 **미디어 > 새로 추가**로 이동하세요.
2. 업로드 영역 아래를 보세요. "Maximum upload file size: 128 MB"처럼 설정한 값이 표시되면 적용된 거예요.

## 문제 해결

- 이전 제한 값이 그대로 보여요: 브라우저 캐시를 지우세요. 사용 중인 캐싱 플러그인과 서버 쪽 CDN 캐시도 함께 지운 뒤 페이지를 새로고침하세요.
- 제한을 늘렸는데도 업로드가 실패해요: 올리려는 파일 형식이 보안상 WordPress에서 지원되는 형식인지 확인하세요.
- 300MB보다 큰 용량이 필요해요: 위에서 안내한 대로 300MB를 넘는 값은 서버 수준에서 설정해야 하며, `.htaccess`로는 적용할 수 없어요.

위 단계를 따라 했는데도 제한 값이 바뀌지 않거나 300MB보다 큰 용량을 설정하고 싶다면 하이퍼클래스 고객지원에 문의하세요.
