---
원문: https://help.gohighlevel.com/support/solutions/articles/48001224428-hosted-video-player-for-funnels
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퍼널용 호스팅 동영상 플레이어

새 동영상 플레이어로 퍼널 페이지에 동영상을 올리고 바로 재생할 수 있어요. 이 문서에서는 호스팅 동영상을 설정하는 방법과 재생 컨트롤 옵션, 인코딩된 동영상이 선택되지 않을 때의 해결 방법을 안내해요.

- 동영상을 올리고, 바꾸고, 삭제하는 화면이 더 편해졌어요.
- 480P, 720P, 1080P, 자동 화질로 재생할 수 있어요.
- **재생 속도**를 0.5x, 0.75x, 1x, 2x로 바꿀 수 있어요.
- [PiP(**화면 속 화면**)](https://en.wikipedia.org/wiki/Picture-in-picture)로 재생할 수 있어요.
- 재생 컨트롤, 전체 화면 옵션, 남은 시간을 표시하거나 숨길 수 있어요.
- 진행률 표시줄을 표시하거나 숨길 수 있고, 동영상 탐색(건너뛰기)을 막을 수 있어요.
- **자동 재생**을 켜거나 끌 수 있어요.
- 주요 형식의 동영상을 4GB까지 지원해요.
- 주요 브라우저에서 모두 지원해요.

---

## 호스팅 동영상 사용법 (영상)

[동영상](https://www.loom.com/embed/a8bf99ab64e64a7ca11814dd81e56e5f)

---

## 호스팅 동영상 사용 단계

### 1단계

1. 퍼널에 **Video Element**(동영상 요소)를 추가하세요.

![퍼널에 동영상 요소를 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080586219/original/AttSWCFafipwhgKl8MDk76WK_IU1Oekk8w.png?1789038037)

### 2단계

1. 동영상 요소를 클릭하세요.
2. 왼쪽의 **Video Settings**(동영상 설정)로 이동해 아래로 스크롤하세요.
3. **Video Type**(동영상 유형)에서 **Hosted Video**(호스팅 동영상)를 선택하세요.

![동영상 유형에서 호스팅 동영상을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080586396/original/eP-ksUL442HQv0TuHGdJM_1Fq1Yf2wJkhg.png?1789038142)

### 3단계

1. **동영상 선택**을 클릭하세요. **미디어 라이브러리**로 이동해요.

![동영상 선택 버튼을 누른 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080586514/original/1KDdpr9q7USOzAdDeX5XijgPj39ozk9RQQ.png?1789038195)

### 4단계

1. 호스팅할 동영상이 아직 없다면 **업로드**를 클릭해 동영상을 올리세요.

![미디어 라이브러리에서 동영상을 업로드하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080586615/original/ClTRaw-TZw0v_WQ6rjGa0I0HKPi-jvgzwA.png?1789038235)

{% hint style="info" %}
주요 동영상 형식이라면 4GB 미만인 파일을 올릴 수 있어요.
{% endhint %}

### 5단계

1. 동영상 업로드가 끝나면 동영상 파일을 더블 클릭해 인코딩을 시작하세요.

![동영상 파일을 더블 클릭해 인코딩을 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48263989442/original/odjpw6Z-XA46FTXMCTlRnh4yc420RG7DmA.png?1668694300)

![인코딩이 진행되는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48263990013/original/HKInsAb5rkwCIY6cloFFxweJWmaD7Jw1GQ.png?1668694369)

{% hint style="info" %}
동영상 트래킹을 하려면 동영상을 인코딩해야 해요. 인코딩이 실패 상태라면 동영상을 다시 선택해 인코딩을 재시도할 수 있어요. 처리 중인 상태가 하루 넘게 이어지는 동영상은 자동으로 실패 처리돼요.
인코딩은 시청자가 여러 화질 중에서 고를 수 있게 하는 데도 필요해요. 원본 동영상은 한 가지 화질로만 재생돼요.
{% endhint %}

---

## **Playback Controls**(재생 컨트롤)의 토글은 각각 어떤 역할을 하나요?

동영상 요소 설정의 **Playback Controls**에서 아래 토글을 설정할 수 있어요.

### **자동 재생**

{% hint style="info" %}
자동 재생 규정에 따라 iOS, Safari, Chrome, Android, Firefox, Edge에서 자동 재생되는 동영상은 음소거 상태로 시작해야 해요. 이 정책은 브라우저 제조사가 정하며, 모든 동영상 호스팅 서비스가 따라야 해요.

브라우저별 자동 재생 정책 변경 안내는 다음과 같아요.
- iOS 자동 재생 동영상 정책
- Safari 자동 재생 동영상 정책
- Chrome 자동 재생 동영상 정책
- Android 자동 재생 동영상 정책
- Firefox 자동 재생 동영상 정책
- Edge 자동 재생 동영상 정책

Chrome은 시청자의 미디어 참여 지수(Media Engagement Index)를 보고 소리와 함께 자동 재생할지 정해요. Chrome은 미디어를 정기적으로 재생하는 사이트일수록 높은 참여 점수를 매겨요. 점수가 충분히 높으면 데스크톱에서만 소리와 함께 자동 재생될 수 있어요.

자동 재생이 아닌 동영상은 음소거가 해제된 상태로 시작해요.
{% endhint %}

### **Allow Play/Pause**(재생/일시정지 허용)

![재생/일시정지 허용 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48263999817/original/AROIDEcRHgolLc2D3GpnBWCkRzzuYaR8GQ.png?1668696212)
![재생/일시정지 허용 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48264000127/original/xiEKuE8DghavllsuJXJh0LC1HTgYrRFiBQ.png?1668696269)

### **Allow Playback Speed Control**(재생 속도 조절 허용)

### **Show Pending Time**(남은 시간 표시)

![남은 시간 표시 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48267931414/original/B3GmVOcfwgpIPQf8Rzx-VFMYrU-i33kH4Q.png?1670411278)

![남은 시간 표시 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48267932909/original/x1LlTKhNKSoUL7k2g0L54JBmNOkeFzqwlA.png?1670411436)

### **Show Full-Screen Toggle**(전체 화면 토글 표시)

![전체 화면 토글 표시 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48267934155/original/q6ACPWaQE3LI-XK3rOwh02OCsSAXDqboIw.png?1670411601)
![전체 화면 토글 표시 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48267934456/original/lY4cdsrOAYKxOx8l_iAApAuYWfJPqzDXUQ.png?1670411662)

### **Show Progress Bar**(진행률 표시줄 표시)

### **Redirect Unregistered Visitors**(미등록 방문자 리디렉션)

방문자가 URL로 동영상 페이지에 바로 들어왔다고 가정해 볼게요. 이 방문자는 시스템에 연락처로 등록되어 있지 않고, 옵트인 폼에 이름과 정보를 입력한 적도 없어요. 방문자의 동영상 시청 진행률을 추적할 계획이었다면, 동영상 진행률 추적 워크플로우는 이름과 상세 정보를 받지 못해요. 그러면 이름이 있는 연락처에 대한 유용한 통계를 얻을 수 없어요. 워크플로우가 빈 리드를 스스로 추가하게 돼요.

이런 상황을 피하려면 **Redirect Unregistered Visitors** 토글을 사용하세요. 이 토글을 켜면 해당 방문자를 옵트인 폼이 있는 다른 페이지로 보내서 이름과 정보를 입력하게 해요. 입력이 끝나면 방문자는 다시 동영상으로 돌아와요. 이때 방문자는 쿠키 없이 지정한 페이지로만 이동해요. 쿠키가 있었다면 방문자에 대한 정보가 담겼을 거예요.

방문자가 사이트의 쿠키 저장을 허용하지 않으면 이 리디렉션이 작동하지 않을 수 있어요. 어느 단계/페이지로 리디렉션할지 꼭 지정해 주세요.

---

## 문제 해결: 인코딩된 동영상이 선택되지 않아요

**미디어 라이브러리**에서는 동영상이 인코딩된 것으로 보이는데 퍼널 페이지에 넣을 때 선택되지 않으면 다음 방법을 차례로 시도해 보세요.

- 몇 분 기다리기: 완료된 것처럼 보여도 백그라운드에서 인코딩이 아직 진행 중일 수 있어요.
- 페이지 새로고침: 퍼널 편집기나 **미디어 라이브러리**를 다시 불러와 동영상이 선택 가능해졌는지 확인하세요.
- 인코딩 재시도: 문제가 계속되면 **미디어 라이브러리**에서 파일을 다시 선택해 인코딩을 다시 시도하세요.
- 파일 형식과 크기 확인: 동영상이 [지원하는 미디어 조건](../../11-설정/media-storage-file-upload-limits.md)에 맞는지 확인하세요. 형식은 .mp4 같은 지원 형식이어야 하고, 크기는 4GB 미만이어야 해요.
