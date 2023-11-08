# Drill

## 개요

과외, PT 등 1:1 수업환경에서  
과제 관리, 질문과 답변, 성과 추적, 공지 네 가지 메뉴를 통해  
선생님에게는 체계적인 학생관리를 학생에게는 양질의 수업을 보장해주는 웹앱  
사용 예) 과외선생님과 학생, PT트레이너와 회원 등

### 과제 관리

선생님이 다음 수업까지 학생이 해올 과제를 등록  
체크박스 형식으로 학생은 완료한 과제를 표시

### 질문과 답변

학생이 과제나 개인 공부 중 질문을 등록  
선생님이 확인 후 답변을 작성

### 성과 추적

학생의 초기 상태를 등록  
주기적으로 성과를 등록하여 변화된 과정을 그래프로 추적가능

### 공지

수업 스케줄 변경 등을 중요 공지사항을 등록

## 개발 스펙

[frontend]

- react(create-react-app) + typescript
- styled-components
- storybook

[backend]

- firebase

## 구현기능

[컴포넌트]

- [x] Avatar -- 기존 컴포넌트에서 사용하지 않는 props 제거
- [ ] BoardList
- [ ] BoardTable

-~~[ ] Button~~ -- 기존에 사용하던 페이지 Typography로 변경 및 props 점검

- [ ] Button_v2 --new 컴포넌트변경 후 이름 수정하기

- [ ] InfoTable

- [ ] Input

- [x] layout/BottomNav -- 기존 컴포넌트 대체 해야함

- [ ] layout/Container -- 기존 컴포넌트 대체 해야함
- [ ] layout/Header -- 기존 컴포넌트 대체 해야함
- [ ] layout/Main -- 기존 컴포넌트 대체 해야함
- [ ] layout/SideNav -- 기존 컴포넌트 대체 해야함

- [ ] layout/Modal -- 기존 컴포넌트 대체 해야함
- [ ] Task
- [x] typo/Typography
- ~~[ ] typo/Typo~~ -- 기존에 사용하던 페이지 Typography로 변경 및 props 점검
- [x] CTABox --new
- [x] Icons --new

- [ ] layout/Section --new

- [ ] Chart --new
- [ ] Badge --new
- [ ] Accordion --new
- [x] NoContent --new
- [x] Loading --new

- [ ] Grid(?) --new

[상태관리 - 리덕스]

- [ ] 로그인 사용자 정보(선생님 계정)
- [ ] 내가 관리하는 학생 리스트
- [ ] 선택한 학생 정보

[상태관리 - 스토리지]

- [ ] 임시저장

[기능 구현 1차 - 선생님용]

- [ ] 로그인 & 로그아웃 & 탈퇴
- [ ] 관리 회원 CRD
- [ ] 과제 CRUD
- [ ] 질문 R & 답댓글
- [ ] 공지 CRUD
- [ ] 성과분석 CRUD
- [ ] 마이 - 회원 관리 & 정보수정

[기능 구현 2차 - 선생님용]

- [ ] 회원정보 수정
- [ ] 질문 사진 등록 & 대댓글
- [ ] 게시글 임시 저장

[기능 구현 3차]

- [ ] 학생용 기능 추가
- [ ] 초대
