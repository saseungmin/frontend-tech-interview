# ๐ frontend-tech-interview
- FrontEnd Tech Interview / ํ๋ก ํธ์๋ ๊ธฐ์  ์ํฐํด ์ ๋ฆฌ

## ๐ญ [HTML](https://github.com/saseungmin/frontend-tech-interview/tree/main/html)
- `<script>`, `<script async>`, `<script defer>` ์ฌ์ด์ ์ฐจ์ด์ 
- ์ ์ผ๋ฐ์ ์ผ๋ก CSS `<link>` ํ๊ทธ๋ฅผ `<head></head>` ํ๊ทธ ์ฌ์ด์ ์์น์ํค๊ณ , JS `<script>` ํ๊ทธ๋ฅผ `</body>` ์ง์ ์ ์์น์ํค๋ ๊ฒ์ด ์ข์ ๋ฐฉ๋ฒ์ธ๊ฐ์?
- ์ ์ง์  ๋ ๋๋ง(Progressive Rendering)์ด ๋ฌด์์ธ๊ฐ์?
- ์ด๋ฏธ์ง ํ๊ทธ์ srcset ์์ฑ์ ์ฌ์ฉํ๋ ์ด์ ๋ ๋ฌด์์ธ๊ฐ์? ์ด ์์ฑ์ ์ปจํ์ธ ๋ฅผ ์คํํ  ๋ ๋ธ๋ผ์ฐ์ ์ ํ๋ก์ธ์ค๋ฅผ ์ค๋ชํ์ธ์.

## ๐ญ [JavaScript](https://github.com/saseungmin/frontend-tech-interview/tree/main/javascript)
- const์ var์ ์ฐจ์ด์ ์?
- ํธ์ด์คํ์ด๋
- ์คํ ์ปจํ์คํธ
- this
- ํด๋ก์ 
- ์ค์ฝํ
- IIFE (Immediately-Invoked Function Expression, ์ฆ์ ์คํ ํจ์)
- ์ด๋ฒคํธ ๋ฒ๋ธ๋ง, ์บก์ฒ๋ง, ์์
- ์ฝ ์คํ๊ณผ ํ
- ํ๋กํ ํ์
- ์๋ฐ์คํฌ๋ฆฝํธ์ ๋น๋๊ธฐ ์์ ์ฒ๋ฆฌ๋ฐฉ์
- JavaScript์ ๊ด๋ จํ์ฌ same-origin ์ ์ฑ์ ์ค๋ชํ์ธ์.
- `"use strict";` ์ด ๋ฌด์์ธ๊ฐ์? ์ฌ์ฉ์ ์ฅ๋จ์ ์ด ๋ฌด์์ธ๊ฐ์?
- ๋๊ธฐ, ๋น๋๊ธฐ ํจ์์ ์ฐจ์ด์ ์ ์ค๋ชํ์ธ์.
- ๊ณ ์ฐจ ํจ์(higher-order function)์ ์ ์๋ ๋ฌด์์ธ๊ฐ์?


## ๐ญ [CSS](https://github.com/saseungmin/frontend-tech-interview/tree/main/css)
- Resetting๊ณผ Normalizing CSS์ ์ฐจ์ด์ ์ ๋ฌด์์ธ๊ฐ์?
- `* { box-sizing: border-box; }`๋ ๋ฌด์์ ํ๋์? ์ฅ์ ์ ๋ฌด์์ธ๊ฐ์?

## ๐ญ [Network](https://github.com/saseungmin/frontend-tech-interview/tree/main/network)
- HTTP์ HTTPS์ ์ฐจ์ด์ 
- TCP์ UDP
- HTTP/1.1๊ณผ HTTP/2์ ์ฐจ์ด์ 
- GET๊ณผ POST์ ์ฐจ์ด๋?
- REST API๋?
- Cookie vs Session
- URL์ ์๋ ฅํ๊ณ  ๋ฒ์ด์ง๋ ์ผ

## ๐ญ [React](https://github.com/saseungmin/frontend-tech-interview/tree/main/react)
- [React Architecture ๋ฐ ํจํด๊ณผ ๊ด๋ จ๋ ์ํฐํด](https://github.com/saseungmin/frontend-tech-interview/tree/main/react/React%20Clean%20Architecture)
- [SWR ๋๋ React Query์ ๊ฐ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ๋ํ๋๊ฒ ๋ ๋ฐฐ๊ฒฝ ๋ฐ ์์ธ](https://github.com/saseungmin/frontend-tech-interview/tree/main/react/redux%20vs%20react-query)
- [React ์ง๋ฌธ](https://github.com/saseungmin/frontend-tech-interview/tree/main/react/question)
- [React 18 ๋ณ๊ฒฝ์ ](https://github.com/saseungmin/frontend-tech-interview/tree/main/react/react-18)
- [์ฌ์กฐ์ (Reconciliation)](https://github.com/saseungmin/frontend-tech-interview/blob/main/react/reconciliation.md)
- [When to `useMemo` and `useCallback`](https://github.com/saseungmin/frontend-tech-interview/blob/main/react/when-to-useMemo-and-useCallback.md)

## ๐ญ [web](https://github.com/saseungmin/frontend-tech-interview/tree/main/web)
- CSR vs SSR
- ๋ธ๋ผ์ฐ์  ๋ ๋๋ง ๊ณผ์  (Critical Rendering Path)
- Reflow or Repaint(or ReDraw)๊ณผ์  ์ค๋ช ๋ฐ ์ต์ ํ ๋ฐฉ๋ฒ
- CORS
- local storage vs session storage vs cookie
- XSS์ CSRF
- ํ๋ ์์ํฌ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์ฐจ์ด์ 
- [CORS๋ ์ ์ด๋ ๊ฒ ์ฐ๋ฆฌ๋ฅผ ํ๋ค๊ฒ ํ๋๊ฑธ๊น?](https://github.com/saseungmin/frontend-tech-interview/tree/main/web/cors)
- [๋ธ๋ผ์ฐ์ ์ ๋์ ์๋ฆฌ](https://github.com/saseungmin/frontend-tech-interview/tree/main/web/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98%20%EB%8F%99%EC%9E%91%20%EC%9B%90%EB%A6%AC)

## ๐ญ [Test์ TDD์ ๋ํ ์ ๋ฆฌ](https://github.com/saseungmin/frontend-tech-interview/tree/main/TestAndTDD)
- [ํจ๊ป ์๋ผ๊ธฐ](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/%ED%95%A8%EA%BB%98%EC%9E%90%EB%9D%BC%EA%B8%B0.md)
- [ํด๋ฆฐ ์ ์์ผ](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/clean-agile.md)
- [ํด๋ฆฐ ์ฝ๋](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/clean-code.md)
- [์ค์ฉ์ฃผ์ ํ๋ก๊ทธ๋๋จธ](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/pragmatic-programmer.md)
- [ํ์คํธ ์ฃผ๋ ๊ฐ๋ฐ๋ก ๋ฐฐ์ฐ๋ ๊ฐ์ฒด ์งํฅ ์ค๊ณ์ ์ค์ฒ](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/growing-object-oriented-software-guided-by-tests.md)
- [๋ฃจ๋น๋ก ๋ฐฐ์ฐ๋ ๊ฐ์ฒด์งํฅ ๋์์ธ](https://github.com/saseungmin/frontend-tech-interview/blob/main/TestAndTDD/design-in-ruby.md)

## ๐ญ [LiftIO 2021](https://github.com/saseungmin/frontend-tech-interview/tree/main/liftIO-2021)


## ๐ Reference
- [front-end interview handbook](https://github.com/yangshun/front-end-interview-handbook)
- https://github.com/baeharam/Must-Know-About-Frontend
- https://github.com/javascript-tutorial/ko.javascript.info
- https://github.com/gyoogle/tech-interview-for-developer
- https://github.com/JaeYeopHan/Interview_Question_for_Beginner
