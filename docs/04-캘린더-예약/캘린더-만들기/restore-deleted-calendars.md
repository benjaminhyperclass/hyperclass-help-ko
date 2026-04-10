---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 삭제된 캘린더 복구하기

[](https://youtu.be/1NPtdNqkRtc)

이 글에서 다룰 내용:

- [개요](#개요)
- [삭제된 캘린더를 복구하는 방법](#삭제된-캘린더를-복구하는-방법)
- [주의사항](#주의사항)

---

### 개요

이제 "캘린더 복구" 기능을 사용하여 삭제된 캘린더와 예약을 함께 복구할 수 있습니다. 이 기능은 중요한 기능적 공백을 메워주며, 사용자가 실수로 삭제한 내용을 쉽게 되돌릴 수 있도록 도와줍니다.

캘린더를 삭제하면 해당 캘린더의 모든 예약도 함께 삭제됩니다. 사용자들이 캘린더를 삭제한 후 다시 복구하고 싶어하는 경우가 많은데, 이제 복구 기능을 통해 캘린더와 함께 삭제된 모든 예약을 복원할 수 있습니다.

---

### 삭제된 캘린더를 복구하는 방법

- Settings(설정) > Audit Logs(감사 로그)로 이동하세요.

![감사 로그 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168218/original/8VenB-Hi6kOYkM1wqsxJgbnfhs_us-EjVA.png?1726746248)

- 삭제된 캘린더에 해당하는 로그 항목을 찾아주세요.

![삭제된 캘린더 로그 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168584/original/KWHKUSke_gJuBh8XSmPvQDOfDHLo7gfFCw.png?1726746471)

- 로그 항목 옆 점 3개 버튼을 클릭하고 "Restore(복구)"를 선택하세요.

![복구 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168878/original/MwroShuUDDYtxjRUgG441XBRLf3DrXn6lw.png?1726746628)

- 캘린더와 함께 이전에 삭제된 모든 예약이 성공적으로 복구됩니다.

![캘린더 복구 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033169553/original/BDxNpjemC-gSHk3X5T801yEpqkjvpAg-YQ.png?1726746839)

---

### 주의사항

- 캘린더를 삭제하면 해당 캘린더와 관련된 모든 예약도 함께 삭제됩니다.
- 캘린더 삭제 시점을 기준으로 ±30분 이내에 삭제된 예약만 복구됩니다.
- 이 시간대를 벗어나 삭제된 예약은 복구되지 않습니다.
- 감사 로그는 최대 60일 동안만 보관됩니다. 데이터 손실을 방지하려면 삭제된 캘린더를 적시에 복구해야 합니다.
- **예시:** 5월 15일 오전 10시에 캘린더를 삭제했다면, 해당 캘린더의 모든 예약도 즉시 삭제됩니다. 이런 예약들은 캘린더 삭제 시점에서 30분 이내에 삭제된 것으로 간주됩니다. 캘린더를 복구하면 이러한 예약들이 모두 함께 복구됩니다. 하지만 5월 15일 오전 9시에 미리 삭제했던 예약은 복구되지 않습니다.
- 이는 캘린더 삭제로 인해 삭제된 예약만 복구하고, 사용자가 별도로 삭제한 예약은 복구하지 않도록 하기 위한 조치입니다.

---
*원문 최종 수정: 2024년 9월 20일*
*Hyperclass 사용 가이드 — hyperclass.ai*