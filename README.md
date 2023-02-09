# **🦁 likelion-VanillaJS-project**

HTML, CSS, VanillaJS를 이용한 TVING 사이트 클론코딩

## 💻 프로젝트 소개

멋쟁이 사자처럼 프론트엔드 스쿨에서 제공한 시안을 토대로 구현한 반응형 TAING 사이트입니다.

## ⌛개발 기간

- 2023.01.27.금 - 2023.02.09.목

## **TYING 프로젝트의 구성원**

>스크럼 마스터: 최예송
>
>팀원: 김강철
>
>팀원: 장세민
>
>팀원: 조윤호
>
>팀원: 황혜인

</br>

## 개발환경

- IDE: VScode
- Database: json-server^0.17.1 - data.json

## 📌 주요 기능

### 1. 랜딩페이지
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217635979-933a8679-d840-447a-ba7b-74bb795cc467.png" width="800">
</div>
    
  - 스크롤에 따라 움직이는 스와이퍼(Horizontal Scrolling) <- gsap과 swiper.js를 이용해 구현
  - 무한 롤링 배너
  - 화면에 나타나면 위로 올라오는 글씨 애니메이션(IntersectionObserver)
  
  
### 2. 메인페이지
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636379-90d19282-4147-4989-a7c8-ce0edc9ccb6a.png" width="500">
  <img src="https://user-images.githubusercontent.com/69625013/217636394-6a394ddb-6907-488b-9218-c4f87f994819.png" width="500">
</div>
  
  - 비주얼 스와이퍼, 각종 컨텐츠 스와이퍼 동적 렌더링
  - 비주얼 영역 스와이퍼 재생 제어 버튼 (swiper ********Autoplay Method)
  - 콘텐츠 데이터에 따라 아이콘 노출(18, 19세 콘텐츠/ 무료 콘텐츠 등)
  - localStorage에 저장된 시청하고 있는 콘텐츠 렌더링
  
  
### 3. 로그인
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636571-f7775219-8c1e-4962-bece-013cea4247e5.png" width="500">
</div>
  
  - 비밀번호 입력 숨김처리
  - 로그인 버튼 클릭 시 fetch를 이용해 이메일 및 비밀번호 유효성 검사
  - 로그인 실패 시 alert창 표시
  - 로그인 성공 시 메인페이지로 이동 (location.href)
  
  
### 4. 회원가입
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636394-6a394ddb-6907-488b-9218-c4f87f994819.png" width="500">
</div>
    
  - 아이디, 비밀번호, 이메일 입력조건 검사 → 조건 만족 시 아래 경고 문구 비활성화
  - 입력조건 갖추지 않고 가입하기 버튼 클릭 시 alert창 표시
  - 회원가입 성공 시 랜덤한 문자값을 유니크값으로 저장
  → 이 값을 이용해 로그인 시 검증
  - 유니크값 localStorage에 저장, 로그아웃 시 해당 유니크값은 삭제
  
  
### 5. 아이디/비밀번호 찾기
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637010-0e40b57b-144b-44cc-974a-5aa2e6346ee4.png" width="500">
  <img src="https://user-images.githubusercontent.com/69625013/217637012-04fa26e0-2254-4f2d-9ce8-bb2b550a6176.png" width="500">
</div>
  
  - input 창에 text 입력시 키값을 감지해 확인 버튼 활성화 + 입력값 삭제 버튼 표시
  - X 버튼 클릭 시 input창의 데이터 삭제, 확인 버튼 비활성화
  
  
### 6. 검색
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637072-ac50e422-6b44-4732-97b7-04c3463925b2.png" width="500">
</div>
  
  - localStorage를 이용한 최근검색어 업데이트
  - dataset과 이벤트위임을 이용한 선택 검색어 삭제
  - 전체 검색어 삭제
  - 빈 문자열 검색 시 alert창 표시
  - 현재 시간 렌더링
  
  
### 7. 프로필 전환/편집
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637145-80270056-4817-4d99-88f1-143e1fa5f9b5.png" width="500">
</div>
  
  - 사진 hover 시 위로 올라가는 애니메이션
  - 편집 버튼을 누르면
      - 완료 버튼으로 변환
      - 이미지 배경이 어둡게 처리
      - 연필 아이콘으로 변환

## 🔧프로젝트 구동 방법

1. 해당 repository를 clone합니다. 
    
    ```bash
    $ git clone https://github.com/likelion-js-project4/taing.git
    ```
    
2. package.json에 있는 패키지를 로컬에 설치합니다.
    
    ```bash
    $ npm i
    ```
    
3. json-server를 실행시킵니다. 
    
    ```bash
    $ npm run all
    ```
    
4. index.html 파일을 브라우저에 실행시킵니다. 
    - VScode 확장프로그램 live-server를 이용하는 방법
        
        index.html 파일에 마우스를 대고 우클릭을 한 뒤 Open with Live Server를 누른다.
        ![Untitled (75)](https://user-images.githubusercontent.com/69625013/217638706-42e79791-9737-43ea-b9bc-69115c0368d7.png)
        
    - 링크로 들어가기
        
        [http://127.0.0.1:5500/client/index.html](http://127.0.0.1:5500/client/index.html)
        
5. 회원가입 조건
    - 이메일 조건 : 최소 `@`, `.` 포함
    - 비밀번호 조건 : 8자 이상 입력
    - 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
6. 로그인 시 주의할 점
    - 아이디 입력창에 회원가입시 입력했던 **이메일**을 입력해야 합니다.
    

## 🕺페이지 이동 매커니즘

1. 로그인이 되어있을 경우
    
    → 메인 페이지로 이동
    
2. 로그인이 안되어있을 경우
    
    → 랜딩 페이지로 이동
    

### 랜딩 페이지

“새로워진 타잉을 만나보세요” 버튼 클릭 시 로그인 페이지로 이동

### 메인 페이지

헤더 로고 클릭 시 메인페이지로 이동 

헤더 프로필 창에서 로그아웃 버튼 클릭 시 랜딩페이지로 이동

헤더 프로필 창에서 프로필 전환 버튼 클릭 시 프로필 변환 페이지로 이동

헤더 검색 버튼 클릭 시 검색창 표시

### 로그인 페이지

로그인 성공 시 메인페이지로 이동

아이디 찾기, 비밀번호 찾기, 회원가입 버튼 클릭 시 각 페이지로 이동

## 🧑‍💻 Contributors

<p>
  <a href="https://github.com/dydgh142">
    <img src="https://github.com/dydgh142.png" width="130">
  </a>
  <a href="https://github.com/cf9874">
    <img src="https://github.com/cf9874.png" width="130">
  </a>
  <a href="https://github.com/semin99">
    <img src="https://github.com/semin99.png" width="130">
  </a>
  <a href="https://github.com/to06109">
    <img src="https://github.com/to06109.png" width="130">
  </a>
  <a href="https://github.com/hwanghaein">
    <img src="https://github.com/hwanghaein.png" width="130">
  </a>

</p>
