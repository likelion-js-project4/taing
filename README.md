# **๐ฆย likelion-VanillaJS-project**

HTML, CSS, VanillaJS๋ฅผ ์ด์ฉํ TVING ์ฌ์ดํธ ํด๋ก ์ฝ๋ฉ

## ๐ป ํ๋ก์ ํธ ์๊ฐ

๋ฉ์์ด ์ฌ์์ฒ๋ผ ํ๋ก ํธ์๋ ์ค์ฟจ์์ ์ ๊ณตํ ์์์ ํ ๋๋ก ๊ตฌํํ ๋ฐ์ํ TAING ์ฌ์ดํธ์๋๋ค.

## โ๊ฐ๋ฐ ๊ธฐ๊ฐ

- 2023.01.27.๊ธ - 2023.02.09.๋ชฉ

## **TYING ํ๋ก์ ํธ์ ๊ตฌ์ฑ์**

>์คํฌ๋ผ ๋ง์คํฐ: ์ต์์ก
>
>ํ์: ๊น๊ฐ์ฒ 
>
>ํ์: ์ฅ์ธ๋ฏผ
>
>ํ์: ์กฐ์คํธ
>
>ํ์: ํฉํ์ธ

</br>

## ๊ฐ๋ฐํ๊ฒฝ

- IDE: VScode
- Database: json-server^0.17.1 - data.json

## ๐ ์ฃผ์ ๊ธฐ๋ฅ

### 1. ๋๋ฉํ์ด์ง
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217635979-933a8679-d840-447a-ba7b-74bb795cc467.png" width="800">
</div>
    
  - ์คํฌ๋กค์ ๋ฐ๋ผ ์์ง์ด๋ ์ค์์ดํผ(Horizontal Scrolling) <- gsap๊ณผ swiper.js๋ฅผ ์ด์ฉํด ๊ตฌํ
  - ๋ฌดํ ๋กค๋ง ๋ฐฐ๋
  - ํ๋ฉด์ ๋ํ๋๋ฉด ์๋ก ์ฌ๋ผ์ค๋ ๊ธ์จ ์ ๋๋ฉ์ด์(IntersectionObserver)
  
  
### 2. ๋ฉ์ธํ์ด์ง
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636379-90d19282-4147-4989-a7c8-ce0edc9ccb6a.png" width="500">
  <img src="https://user-images.githubusercontent.com/69625013/217636394-6a394ddb-6907-488b-9218-c4f87f994819.png" width="500">
</div>
  
  - ๋น์ฃผ์ผ ์ค์์ดํผ, ๊ฐ์ข ์ปจํ์ธ  ์ค์์ดํผ ๋์  ๋ ๋๋ง
  - ๋น์ฃผ์ผ ์์ญ ์ค์์ดํผ ์ฌ์ ์ ์ด ๋ฒํผ (swiper ********Autoplay Method)
  - ์ฝํ์ธ  ๋ฐ์ดํฐ์ ๋ฐ๋ผ ์์ด์ฝ ๋ธ์ถ(18, 19์ธ ์ฝํ์ธ / ๋ฌด๋ฃ ์ฝํ์ธ  ๋ฑ)
  - localStorage์ ์ ์ฅ๋ ์์ฒญํ๊ณ  ์๋ ์ฝํ์ธ  ๋ ๋๋ง
  
  
### 3. ๋ก๊ทธ์ธ
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636571-f7775219-8c1e-4962-bece-013cea4247e5.png" width="500">
</div>
  
  - ๋น๋ฐ๋ฒํธ ์๋ ฅ ์จ๊น์ฒ๋ฆฌ
  - ๋ก๊ทธ์ธ ๋ฒํผ ํด๋ฆญ ์ fetch๋ฅผ ์ด์ฉํด ์ด๋ฉ์ผ ๋ฐ ๋น๋ฐ๋ฒํธ ์ ํจ์ฑ ๊ฒ์ฌ
  - ๋ก๊ทธ์ธ ์คํจ ์ alert์ฐฝ ํ์
  - ๋ก๊ทธ์ธ ์ฑ๊ณต ์ ๋ฉ์ธํ์ด์ง๋ก ์ด๋ (location.href)
  
  
### 4. ํ์๊ฐ์
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217636394-6a394ddb-6907-488b-9218-c4f87f994819.png" width="500">
</div>
    
  - ์์ด๋, ๋น๋ฐ๋ฒํธ, ์ด๋ฉ์ผ ์๋ ฅ์กฐ๊ฑด ๊ฒ์ฌ โ ์กฐ๊ฑด ๋ง์กฑ ์ ์๋ ๊ฒฝ๊ณ  ๋ฌธ๊ตฌ ๋นํ์ฑํ
  - ์๋ ฅ์กฐ๊ฑด ๊ฐ์ถ์ง ์๊ณ  ๊ฐ์ํ๊ธฐ ๋ฒํผ ํด๋ฆญ ์ alert์ฐฝ ํ์
  - ํ์๊ฐ์ ์ฑ๊ณต ์ ๋๋คํ ๋ฌธ์๊ฐ์ ์ ๋ํฌ๊ฐ์ผ๋ก ์ ์ฅ
  โ ์ด ๊ฐ์ ์ด์ฉํด ๋ก๊ทธ์ธ ์ ๊ฒ์ฆ
  - ์ ๋ํฌ๊ฐ localStorage์ ์ ์ฅ, ๋ก๊ทธ์์ ์ ํด๋น ์ ๋ํฌ๊ฐ์ ์ญ์ 
  
  
### 5. ์์ด๋/๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637010-0e40b57b-144b-44cc-974a-5aa2e6346ee4.png" width="500">
  <img src="https://user-images.githubusercontent.com/69625013/217637012-04fa26e0-2254-4f2d-9ce8-bb2b550a6176.png" width="500">
</div>
  
  - input ์ฐฝ์ text ์๋ ฅ์ ํค๊ฐ์ ๊ฐ์งํด ํ์ธ ๋ฒํผ ํ์ฑํ + ์๋ ฅ๊ฐ ์ญ์  ๋ฒํผ ํ์
  - X ๋ฒํผ ํด๋ฆญ ์ input์ฐฝ์ ๋ฐ์ดํฐ ์ญ์ , ํ์ธ ๋ฒํผ ๋นํ์ฑํ
  
  
### 6. ๊ฒ์
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637072-ac50e422-6b44-4732-97b7-04c3463925b2.png" width="500">
</div>
  
  - localStorage๋ฅผ ์ด์ฉํ ์ต๊ทผ๊ฒ์์ด ์๋ฐ์ดํธ
  - dataset๊ณผ ์ด๋ฒคํธ์์์ ์ด์ฉํ ์ ํ ๊ฒ์์ด ์ญ์ 
  - ์ ์ฒด ๊ฒ์์ด ์ญ์ 
  - ๋น ๋ฌธ์์ด ๊ฒ์ ์ alert์ฐฝ ํ์
  - ํ์ฌ ์๊ฐ ๋ ๋๋ง
  
  
### 7. ํ๋กํ ์ ํ/ํธ์ง
<div align=center>
  <img src="https://user-images.githubusercontent.com/69625013/217637145-80270056-4817-4d99-88f1-143e1fa5f9b5.png" width="500">
</div>
  
  - ์ฌ์ง hover ์ ์๋ก ์ฌ๋ผ๊ฐ๋ ์ ๋๋ฉ์ด์
  - ํธ์ง ๋ฒํผ์ ๋๋ฅด๋ฉด
      - ์๋ฃ ๋ฒํผ์ผ๋ก ๋ณํ
      - ์ด๋ฏธ์ง ๋ฐฐ๊ฒฝ์ด ์ด๋ก๊ฒ ์ฒ๋ฆฌ
      - ์ฐํ ์์ด์ฝ์ผ๋ก ๋ณํ

## ๐งํ๋ก์ ํธ ๊ตฌ๋ ๋ฐฉ๋ฒ

1. ํด๋น repository๋ฅผ cloneํฉ๋๋ค. 
    
    ```bash
    $ git clone https://github.com/likelion-js-project4/taing.git
    ```
    
2. package.json์ ์๋ ํจํค์ง๋ฅผ ๋ก์ปฌ์ ์ค์นํฉ๋๋ค.
    
    ```bash
    $ npm i
    ```
    
3. json-server๋ฅผ ์คํ์ํต๋๋ค. 
    
    ```bash
    $ npm run all
    ```
    
4. index.html ํ์ผ์ ๋ธ๋ผ์ฐ์ ์ ์คํ์ํต๋๋ค. 
    - VScode ํ์ฅํ๋ก๊ทธ๋จ live-server๋ฅผ ์ด์ฉํ๋ ๋ฐฉ๋ฒ
        
        index.html ํ์ผ์ ๋ง์ฐ์ค๋ฅผ ๋๊ณ  ์ฐํด๋ฆญ์ ํ ๋ค Open with Live Server๋ฅผ ๋๋ฅธ๋ค.
        ![Untitled (75)](https://user-images.githubusercontent.com/69625013/217638706-42e79791-9737-43ea-b9bc-69115c0368d7.png)
        
    - ๋งํฌ๋ก ๋ค์ด๊ฐ๊ธฐ
        
        [http://127.0.0.1:5500/client/index.html](http://127.0.0.1:5500/client/index.html)
        
5. ํ์๊ฐ์ ์กฐ๊ฑด
    - ์ด๋ฉ์ผ ์กฐ๊ฑด : ์ต์ `@`, `.` ํฌํจ
    - ๋น๋ฐ๋ฒํธ ์กฐ๊ฑด : 8์ ์ด์ ์๋ ฅ
    - ์ด๋ฉ์ผ๊ณผ ๋น๋ฐ๋ฒํธ๊ฐ ๋ชจ๋ ์๋ ฅ๋์ด ์๊ณ , ์กฐ๊ฑด์ ๋ง์กฑํด์ผ ์ ์ถ ๋ฒํผ์ด ํ์ฑํ
6. ๋ก๊ทธ์ธ ์ ์ฃผ์ํ  ์ 
    - ์์ด๋ ์๋ ฅ์ฐฝ์ ํ์๊ฐ์์ ์๋ ฅํ๋ **์ด๋ฉ์ผ**์ ์๋ ฅํด์ผ ํฉ๋๋ค.
    

## ๐บํ์ด์ง ์ด๋ ๋งค์ปค๋์ฆ

1. ๋ก๊ทธ์ธ์ด ๋์ด์์ ๊ฒฝ์ฐ
    
    โ ๋ฉ์ธ ํ์ด์ง๋ก ์ด๋
    
2. ๋ก๊ทธ์ธ์ด ์๋์ด์์ ๊ฒฝ์ฐ
    
    โ ๋๋ฉ ํ์ด์ง๋ก ์ด๋
    

### ๋๋ฉ ํ์ด์ง

โ์๋ก์์ง ํ์์ ๋ง๋๋ณด์ธ์โ ๋ฒํผ ํด๋ฆญ ์ ๋ก๊ทธ์ธ ํ์ด์ง๋ก ์ด๋

### ๋ฉ์ธ ํ์ด์ง

ํค๋ ๋ก๊ณ  ํด๋ฆญ ์ ๋ฉ์ธํ์ด์ง๋ก ์ด๋ 

ํค๋ ํ๋กํ ์ฐฝ์์ ๋ก๊ทธ์์ ๋ฒํผ ํด๋ฆญ ์ ๋๋ฉํ์ด์ง๋ก ์ด๋

ํค๋ ํ๋กํ ์ฐฝ์์ ํ๋กํ ์ ํ ๋ฒํผ ํด๋ฆญ ์ ํ๋กํ ๋ณํ ํ์ด์ง๋ก ์ด๋

ํค๋ ๊ฒ์ ๋ฒํผ ํด๋ฆญ ์ ๊ฒ์์ฐฝ ํ์

### ๋ก๊ทธ์ธ ํ์ด์ง

๋ก๊ทธ์ธ ์ฑ๊ณต ์ ๋ฉ์ธํ์ด์ง๋ก ์ด๋

์์ด๋ ์ฐพ๊ธฐ, ๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ, ํ์๊ฐ์ ๋ฒํผ ํด๋ฆญ ์ ๊ฐ ํ์ด์ง๋ก ์ด๋

## ๐งโ๐ป Contributors

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
