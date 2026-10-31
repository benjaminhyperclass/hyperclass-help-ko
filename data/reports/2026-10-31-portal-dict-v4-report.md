# 포털 사전 v4.0 — 보강·재검수 보고 (2026-10-31, 작업지시서 v1 B2)

| 항목 | 값 |
|---|---|
| 원천 | `data/portal/en.json` — community.hyperclass.ai/login 비로그인 헤드리스 추출, 63 ns · 5,393키 |
| v3.0.0 | 3,676건 (현행 en 과 일치 3,635 · 고아 41 — 유지, 구 빌드 호환) |
| 결손 1,758 + 영문만 55 | 재사용(포털 동일 원문) 317 · 메인 v4 장문(4단어+) 4 · 신규 번역 1,437(`i18n-batch-translator.py` 무수정, claude-sonnet-5, 실패 0) · 수동 13 |
| 글로서리 v1.0.0 통일 | 30건 (`round-merge.unify_one` 재사용). 세금 서류 4건은 Form→폼 오적용이라 '양식'으로 되돌림 |
| 커버리지 | **5,393 / 5,393 = 100%** (EN 키 대비 값 존재). 한글 값 5,273 · 한글 없는 값 120(아래 사유) |
| 검사 | 플레이스홀더 불일치 0 · DNT 소실 0 · 브랜드(HighLevel/LeadConnector/GHL) 0 · GHL 지원번호 0 |
| 리뷰 | `round-review.py` 무수정(Python 3.12): 규칙 R5 7(의도적 원문) · R6 2 → 수정 / Claude 표본 600 지적 17(high 1·medium 8·low 8) → 전건 반영 |
| 문체 | 평서형 해요체 0 (프리셋 인사 2건 합쇼체로). 명령형 `~세요`/`~해 주세요` 549건은 **유지** — 메인 v4 사전 관례(`~세요` 6,401 · `~십시오` 0)와 같다. 작업지시서의 '해요체형 382건'은 정규식 집계로, 그중 377이 명령형 `~세요`, 5가 명사 '좋아요'(Like)였다 |
| 용어 | 포털 내 'Post' = 게시글(45:5 다수 표기로 통일), 결제 유형 = 정기 결제 / 일회성 결제 |

## 벤자민 검수 반영 (2026-10-31, 사전 v4.0.1)

| 지시 | 결과 |
|---|---|
| ① Lesson '레슨' → '강의'(글로서리 v1.0.0 확정어) + 글로서리 Lesson 변형에 '레슨' 추가 | 23회 치환(조사 보정: 레슨을→강의를 등). **예외 1**: `clientportal.events.detail.agendaSessionUpNext`("Up next", 이벤트 일정표)는 강의가 아니라 세션이라 **'다음 세션'**. 전달 건수 20과 차이는 집계 기준(값 기준 24키) |
| ② `account.certifications.*.linkCopiedCertificate` '인증서' → '수료증' | 2건 |
| ③ '게시물' → '게시글' 통일 | 40키 53회(전부 원문에 post 포함 확인). 받침이 같아 조사 변화 없음 |
| 검사 | 변경 66키 규칙 검사(R1~R7) 0건 · 사전 messages/_text 에 '레슨'·'게시물' 잔존 0 |
| 부수 영향 | 글로서리 변형 추가로 **메인 v4 사전**의 Lesson 잔존 3건이 감사 경고에 잡힘(`서예 레슨`·`장기 레슨`·`레슨 URL`, CI 경고만). 통일 여부는 다음 라운드에서 판단 |

## 한글이 없는 값 — 의도적 원문 유지 (120)

브랜드·고유명(Facebook·Instagram·YouTube·LinkedIn·Zoom·Meet·Outlook·PayPal·Giphy·GoKollab·Kollab Studio), URL·슬러그 자리표시자, 파일 형식(PDF·PNG·MP4…), 결제 조건(Net-30 등), 테마 이름(Royal Velvet 등), 배지(LIVE·REC·GIF), 자리표시자·기호만 있는 형식 문자열.

<details><summary>목록</summary>

| 키 | EN(=KO) |
|---|---|
| `auth.emailPlaceholder` | you{'@'}example.com |
| `auth.profileConfirmation.profileSlugPlaceholder` | your-profile-url |
| `editor.videoUpload.defaultFormats` | MP4, WebM, MOV |
| `editor.videoUpload.defaultMediaFormats` | PNG, JPEG, SVG, JPG, MP4 |
| `editor.mentions.everyone` | everyone |
| `emailUnsubscribe.branding.goKollab` | GoKollab |
| `payment.summary.recurring` | {symbol}{price}/{interval} |
| `profileMenu.kollabStudio` | Kollab Studio |
| `common.ui.expandArrow` | → |
| `common.ui.collapseArrow` | ← |
| `common.actions.in` | in |
| `common.actions.for` | for |
| `account.profile.slug.placeholder` | your-name |
| `account.profile.website.placeholder` | example.com |
| `account.billing.ellipsis` | ⋯ |
| `account.billing.maskedCard` | XXXX XXXX XXXX |
| `account.billing.of` | of |
| `account.billing.subscriptionDetails.id` | ID |
| `account.certifications.share.nativeTitle` | {name} |
| `account.certifications.preview.downloadFormat.pdf` | PDF |
| `account.certifications.preview.downloadFormat.png` | PNG |
| `account.certifications.preview.downloadFormat.jpg` | JPG |
| `account.certifications.preview.verificationModal.step1.description` | {recipient} |
| `account.certifications.preview.verificationModal.step2.description` | {issuer} |
| `account.social_media.contact.website.placeholder` | https://yourwebsite.com |
| `account.social_media.links.facebook.label` | Facebook |
| `account.social_media.links.facebook.placeholder` | https://facebook.com/marketing |
| `account.social_media.links.twitter.label` | X |
| `account.social_media.links.twitter.placeholder` | https://x.com/marketing |
| `account.social_media.links.instagram.label` | Instagram |
| `account.social_media.links.instagram.placeholder` | https://instagram.com/marketing |
| `account.social_media.links.linkedin.label` | LinkedIn |
| `account.social_media.links.linkedin.placeholder` | https://linkedin.com/marketing |
| `account.social_media.links.youtube.label` | YouTube |
| `account.social_media.links.youtube.placeholder` | https://youtube.com/marketing |
| `account.events.schedule.calendarOutlook` | Outlook |
| `chats.messageEditor.attachments.gif` | GIF |
| `gifPicker.poweredBy` | Giphy |
| `sidebar.gokollab` | GoKollab |
| `sidebar.studio` | Kollab Studio |
| `userProfile.socials.facebook` | Facebook |
| `userProfile.socials.instagram` | Instagram |
| `userProfile.socials.linkedin` | LinkedIn |
| `userProfile.socials.twitter` | Twitter |
| `userProfile.socials.youtube` | YouTube |
| `meeting.slugPlaceholder` | my-meeting |
| `library.bundleCard.priceOneTime` | {price} |
| `courses.productCard.customProgress` | {progress}% |
| `courses.paidLocked` | {currency} {price} |
| `courses.paidLockedRecurring` | {currency} {price} /{interval} |
| `analytics.trend.na` | --% |
| `analytics.traffic.sources.instagram` | Instagram |
| `analytics.traffic.sources.youtube` | YouTube |
| `analytics.traffic.sources.facebook` | Facebook |
| `analytics.traffic.sources.linkedin` | LinkedIn |
| `channel.access.statsSeparator` | · |
| `channel.access.managersSeparator` | ,  |
| `channel.settings.about.on` | on {date} |
| `comments.actions.separator` | · |
| `comments.editor.gif` | GIF |
| `comments.editor.defaultAudioFileName` | audio.mp3 |
| `comments.editor.defaultVoiceNoteName` | voice-note.wav |
| `events.create.to` | to |
| `events.options.location.zoom` | Zoom |
| `events.options.location.meet` | Meet |
| `groupInfo.groupSettings.enterGroupSlug` | group-slug |
| `groupInfo.groupSettings.themes.purple` | Royal Velvet |
| `groupInfo.groupSettings.themes.green` | Lush Meadow |
| `groupInfo.groupSettings.themes.zestyCitrus` | Zesty Citrus |
| `groupInfo.groupSettings.themes.sunnyDelight` | Sunny Delight |
| `groupInfo.groupSettings.themes.azureDreams` | Azure Dreams |
| `groupInfo.groupSettings.themes.bubblegumBliss` | Bubblegum Bliss |
| `groupInfo.groupSettings.themes.ivoryWhisper` | Ivory Whisper |
| `groupInfo.groupSettings.themes.midnightDeep` | Midnight Deep |
| `groupInfo.groupSettings.linkUrlPlaceholder` | https://example.com |
| `groupInfo.groupSettings.enterCommunitySlug` | community-slug |
| `groupInfo.groupSettings.contentModeration.authorMeta` | · {meta} |
| `groupInfo.subscriptions.v2.planForm.preview.noPrice` | $— |
| `groupInfo.communityTabs.renamePlaceholder` | {tab} |
| `about.by` | by |
| `groups.joinPlans.carousel.page` | {current}/{total} |
| `groups.joinPlans.confirm.planWithPeriod` | {plan} · {period} |
| `groups.manageSubscription.labels.notApplicable` | — |
| `groups.manageSubscription.paymentMethod.masked` | {brand} •••• {last4} |
| `leaderboard.table.rankColumn` | # |
| `members.courseAccess.priceRecurring` | {price} / {interval} |
| `posts.poll.metaSeparator` | · |
| `posts.editor.gif` | GIF |
| `posts.editor.gifDefaultName` | GIF |
| `posts.golive.live` | LIVE |
| `posts.golive.rec` | REC |
| `welcomeSetup.autoDm.linkUrlLabel` | URL |
| `affiliates.media.emptyCellDash` | – |
| `affiliates.banners.duplicateName` | {affiliateName} ({contactId}) |
| `affiliates.common.emDash` | — |
| `affiliates.customers.csv.id` | ID |
| `affiliates.campaigns.payoutLabels.PAY_7` | Net-7 |
| `affiliates.campaigns.payoutLabels.PAY_15` | Net-15 |
| `affiliates.campaigns.payoutLabels.PAY_30` | Net-30 |
| `affiliates.campaigns.payoutLabels.PAY_45` | Net-45 |
| `affiliates.campaigns.payoutLabels.PAY_60` | Net-60 |
| `affiliates.campaigns.payoutLabels.PAY_90` | Net-90 |
| `affiliates.commissions.csv.id` | ID |
| `affiliates.commissions.csv.notAvailable` | — |
| `affiliates.payout.typePaypal` | PayPal |
| `clientportal.events.locationWithCount` | {location} ({count}) |
| `clientportal.events.metaDot` | · |
| `clientportal.events.detail.sponsorsMore` | +{count} |
| `clientportal.events.detail.calendarOutlook` | Outlook |
| `clientportal.events.detail.customPdfZoomLevel` | {value}% |
| `clientportal.events.detail.customPdfPageCompact` | {current} / {total} |
| `clientportal.events.detail.exhibitorCenterEditLinkUrlLabel` | URL |
| `clientportal.events.detail.exhibitorsBoothNoteLine` | {booth} - {note} |
| `clientportal.events.connections.introQuote` | “{message}” |
| `communities.priceOneTime` | {price} |
| `discover.price.oneTime` | {price} |
| `fileManagement.preview_meta.separator` | · |
| `fileManagement.preview_meta.placeholder` | — |
| `loyalty.home.redeem.spendingPercentage` | {percentage}% |
| `loyalty.home.referral.descriptionSuffix` |  {benefit}. |

</details>


## 자동 리뷰 원문 (반영 전)

## 🔍 번역 라운드 자동 리뷰 — 변경 1792건

규칙 검사 지적 **9건** · Claude 검수 지적 **17건** (high 1 / medium 8 / low 8)

### 규칙 검사 (전건)

| 코드 | 키 | EN | KO | 지적 |
|---|---|---|---|---|
| R5 | `editor.videoUpload.defaultMediaFormats` | PNG, JPEG, SVG, JPG, MP4 | PNG, JPEG, SVG, JPG, MP4 | 영문 그대로 |
| R6 | `account.certifications.preview.verificationModal.step3.description` | Identifier {credentialId} is unique and valid | 식별자 {credentialId}는 고유하며 유효합니다 | 플레이스홀더 뒤 조사 직결 |
| R5 | `groups.joinPlans.carousel.page` | {current}/{total} | {current}/{total} | 영문 그대로 |
| R5 | `groups.joinPlans.confirm.planWithPeriod` | {plan} · {period} | {plan} · {period} | 영문 그대로 |
| R5 | `groups.manageSubscription.paymentMethod.masked` | {brand} •••• {last4} | {brand} •••• {last4} | 영문 그대로 |
| R6 | `welcomeSetup.autoDm.mentionHint` | Type {'@'} to insert member name. | {'@'}를 입력해서 멤버 이름을 삽입하세요. | 플레이스홀더 뒤 조사 직결 |
| R5 | `clientportal.events.locationWithCount` | {location} ({count}) | {location} ({count}) | 영문 그대로 |
| R5 | `clientportal.events.detail.customPdfPageCompact` | {current} / {total} | {current} / {total} | 영문 그대로 |
| R5 | `clientportal.events.connections.introQuote` | “{message}” | "{message}" | 영문 그대로 |

### Claude 검수 (심각도순)

| 심각도 | 키 | EN | KO | 문제 | 제안 |
|---|---|---|---|---|---|
| high | `badges.profile.upNextTitle` | Up next | 다음 레슨 | 원문은 '다음 배지(획득 예정)'를 의미하는데 '다음 레슨'으로 오역되어 맥락상 전혀 다른 의미(강의 콘텐츠)로 번역됨 | 다음 배지 |
| medium | `payment.plan.title` | Choose your billing | 결제 방식을 선택하세요 | 'billing'이 결제 수단이 아닌 결제 주기(월간/연간/주간)를 의미하는데 '결제 방식'으로 번역되어 의미가 모호함 | 청구 주기를 선택하세요 |
| medium | `analytics.traffic.sources.direct` | Direct | 다이렉트 | 'Direct'를 음역 '다이렉트'로 번역하여 어색함, 동일 개념의 28번 설명과도 불일치 | 직접 유입 |
| medium | `analytics.engagementTrend.infoTooltip` | Posts, comments, reactions, poll votes, and net event RSVPs  | 이 기간의 게시물, 댓글, 반응, 투표 참여, 순 이벤트 참석 여부를 포함합니다. | 'net event RSVPs'를 '순 이벤트 참석 여부'로 번역해 '개수' 개념이 '여부(Yes/No)'로 왜곡됨 | 이 기간의 게시물, 댓글, 반응, 투표 참여, 순 이벤트 참석 수를 포함합니다. |
| medium | `analytics.refresh.rateLimited` | Please wait a minute before refreshing again | 다시 새로고침하기 전에 잠시 기다려 주세요 | 'a minute'(1분)이라는 구체적 시간 정보가 '잠시'로 뭉뚱그려져 의미가 약화됨 | 1분 정도 기다린 후 다시 새로고침해 주세요 |
| medium | `badges.pill.descriptions.groupAdmin` | This badge is awarded to members with admin or owner role in | 이 배지는 이 그룹에서 관리자(admin) 또는 소유자(owner) 역할을 가진 멤버에게 수여됩니다. | 역할명에 불필요한 영어 병기(admin, owner)를 추가하여 다른 문자열과 스타일이 불일치하고 어색함 | 이 배지는 이 그룹에서 관리자 또는 소유자 역할을 가진 멤버에게 수여됩니다. |
| medium | `channel.create.form.private.discoverable.visible.description` | This channel appears in the list for non-members to spark in | 이 채널은 비멤버가 게시물과 리소스를 보기 위해 가입하기 전에 관심을 끌 수 있도록 목록에 표시됩니다. | 원문은 '채널이 비멤버의 관심을 끈다'는 의미인데, 번역은 '비멤버가 관심을 끈다'로 주체가 바뀌어 의미가 어색하게 반전됨 | 이 채널은 비회원이 가입해 게시물과 리소스를 보기 전에 관심을 가질 수 있도록 목록에 표시됩니다. |
| medium | `channel.paymentSetup.types.oneTime` | One-time | 1회 | 'One-time' 타입 라벨이 다른 곳(#11,#13)에서는 '일회성'으로 번역되었으나 여기선 '1회'로 불일치 | 일회성 |
| medium | `channel.paymentSetup.freeEmptyDescription` | Members can join without paying. Choose Recurring or One-tim | 멤버는 결제 없이 참여할 수 있습니다. 접근 권한에 요금을 부과하려면 정기 결제 또는 일회성 결제를 선택하세 | 'Recurring'이 타입 옵션(#4)에서는 '반복'으로 번역되는데 여기선 '정기 결제'로 표현이 달라 용어 일관성이 깨짐 | 멤버는 결제 없이 참여할 수 있습니다. 접근 권한에 요금을 부과하려면 반복 또는 일회성 결제를 선택하세요. |
| low | `notifications.showLess` | Show less | 간략히 보기 | 'Show more'(더 보기)와의 대구가 어색함(간략히 보기) | 접기 |
| low | `account.events.emptyState.title` | Nothing here yet | 아직 여기에 아무것도 없습니다 | 직역투로 다소 어색함 | 아직 표시할 항목이 없습니다 |
| low | `account.events.status.past` | Past | 지난 이벤트 | 다른 상태 레이블(Live→라이브, Upcoming→예정)과 달리 '이벤트'가 추가되어 일관성이 떨어짐 | 지난 |
| low | `account.certifications.preview.downloadFailed.title` | Download failed | 다운로드에 실패했습니다 | 제목(title)으로 쓰기엔 다소 긴 문장형, 다른 제목류와 톤이 다름 | 다운로드 실패 |
| low | `account.events.placeholder.schedule.title` | Nothing on your schedule | 예정된 일정이 없습니다 | 동일한 원문(Nothing on your schedule)이 8번과 다르게 번역되어 용어 일관성이 깨짐 | 일정이 없습니다 |
| low | `analytics.kpi.totalEarnings.description` | Revenue from all sources | 모든 소스로부터의 수익 | 직역투로 어색함 ('모든 소스로부터의') | 모든 소스에서 발생한 수익 |
| low | `analytics.engagement.posts` | Posts | 게시글 | 'Posts'가 50·51번에서는 '게시물'로 번역되었으나 여기서는 '게시글'로 번역되어 용어 불일치 | 게시물 |
| low | `badges.credentialsHintPrefix` | To create new badges, go to | 새 배지를 만들려면 이동하세요 | 'go to' 뒤에 이어질 링크 대상이 문장에서 생략되어 단독으로는 어색함 | 새 배지를 만들려면 다음으로 이동하세요 |


> 수정은 `_source/hc-ko-app.pretty.json` 에서 → `split-ko-app.py` → 커밋. 이 리뷰는 차단하지 않습니다.

