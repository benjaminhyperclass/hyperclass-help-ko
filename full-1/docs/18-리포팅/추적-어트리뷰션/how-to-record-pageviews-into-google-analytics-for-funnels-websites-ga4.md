---
원문: https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-
번역일: 2026-11-07
카테고리: 18-리포팅
---

# 퍼널/웹사이트 페이지뷰를 Google Analytics(GA4)에 기록하기

Google Analytics 4(GA4)를 설정해서 퍼널과 웹사이트의 페이지뷰를 기록하는 방법을 단계별로 안내해요. 이 글을 따라 하면 퍼널/웹사이트가 GA4에 페이지뷰를 보내도록 설정할 수 있어요.

Google Analytics를 어느 정도 안다고 가정하고 설명해요. 처음이라면 먼저 [GA4 - Beginner's Guide to Google Analytics](https://support.google.com/analytics/answer/10089681?hl=en)를 읽어 보세요.

## 1단계: Google Analytics에 로그인하세요

Google Analytics에 로그인해요.

## 2단계: Admin Settings로 이동하세요

Google Analytics에서 **Admin Settings**(관리 설정)로 이동해요.

## 3단계: Create Property를 클릭하고 속성 이름을 입력하세요

**Create Property**(속성 만들기)를 클릭한 다음 속성 이름을 입력해요.

![Create Property 화면에서 속성 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248414481/original/_crNYwqPZLPsbFhR_wtE2RGPpUVpWU7lUA.png?1661963925)

## 4단계: 왼쪽 메뉴에서 Data Stream으로 이동하세요

왼쪽 메뉴에 있는 **Data Stream**(데이터 스트림)으로 이동해요.

![왼쪽 메뉴의 Data Stream](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242970421/original/JT7f2wFLJddyal3mPq52134ub2eucYhgsg.png?1659563635)

## 5단계: Web을 선택하고 추적할 퍼널/웹사이트 URL을 입력하세요

**Web**(웹) 옵션을 선택하고, 추적하려는 퍼널/웹사이트의 URL을 입력해요.

스트림 URL과 스트림 이름을 입력했으면 **Create Stream**(스트림 만들기) 버튼을 클릭하세요.

![Web 선택 후 스트림 URL과 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248397407/original/pdNNp3rYDDYl3DFcfJtnTLXZSLMd7b2Nng.png?1661959750)

## 6단계: gtag.js 스크립트를 추가하거나 Google Tag Manager를 설정하세요

Google에서 제공하는 스크립트(gtag.js)를 퍼널/웹사이트 추적 코드에 추가해요. 또는 아래 Google Tag Manager 안내를 따르세요.

![Google에서 제공하는 gtag.js 스크립트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248415171/original/7AN42XqQ5QG7nrNKJWJ6Loppu0-UclOw6g.png?1661964159)

### 퍼널/웹사이트 `<head>`에 Google Site Tag(gtag.js) 추가하기

<!-- 검토 필요: 원문에 이 항목의 본문이 없음 -->
