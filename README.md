# 💳 소비 기록 캘린더 앱

사용자가 일자별로 소비 내역을 기록하고, 월별 캘린더를 통해 소비 금액을 시각적으로 확인할 수 있는 React 기반 웹 애플리케이션입니다.

## 🔍 주요 기능

### ✅ 소비 내역 관리

- **사용처 / 금액 / 일자 / 카테고리 / 결제수단 / 메모** 정보로 소비내역 구성
- 소비 내역을 `생성`,`수정`,`삭제`,`상세보기` 기능 제공
- 다양한 소비 카테고리를 아이콘으로 제공하여, 클릭시 상태 반영
- 홈 화면에 해당 월을 지출금액 `합계`를 표시

### 📆 캘린더 기능

- `react-calendar` 라이브러리 사용
- 각 일자의 지출 금액 합계를 `캘린더 셀`에 표시
- 월별 데이터 필터링 후 전달하여 렌더링
- 달력 토글 버튼 → Summary 컴포넌트 내 포함

## 💾 데이터 저장

- 브라우저 `localStorage`를 활용하여
- 초기 로드 시 데이터 복원
- 추가/수정/삭제 시 실시간 저장

## ⚙️ 기술 스택

- **React**
- **React Router**
- **React Calendar**
- **moment.js**

## 📁 프로젝트 구조
![image](https://github.com/user-attachments/assets/c0e7f13a-aa99-461c-bbb2-f7f4ff062542)

