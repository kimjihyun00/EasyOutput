import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --black-color: #010D22;
  --white-color: #fff;

  --primary-color-50: #D3F1FA;
  --primary-color-100: #C4EBF8;
  --primary-color-300: #5ECDED;
  --primary-color-400: #00A7DC;
  --primary-color-500: #0887F6;
  --primary-color-600: #014886;
  --primary-color-900: #091937;

  --gray-color-50: #F7F7F7;
  --gray-color-100: #E0E0E3;
  --gray-color-200: #CDCDCF;
  --gray-color-300: #B6B6B7;
  --gray-color-400: #939393;
  --gray-color-500: #8A8A8E;
  --gray-color-600: #828284;
  --gray-color-700: #4C4C4D;

  --red-color: #FF3B30;
  --red-color-light: #FF7870;

  --default-border-radius: 12px;
}

/* global style */
* {
font-family: "Pretendard Variable", 
  Pretendard, -apple-system, BlinkMacSystemFont, 
  system-ui, Roboto, "Helvetica Neue", "Segoe UI", 
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", 
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

}

html {
  width: 100%;
  min-height: 100vh;
  font-size: 16px;
  line-height: 1.3em;
  word-spacing: -0.02em;

  background-color: var(--gray-color-50);
  color: var(--black-color);
}

body {
  min-height: 100vh;
}

#root {
  min-height: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2em;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2em;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2em;
}

.subtitle {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2em;
}

.body1, p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3em;
}

.body2 {
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.3em;
}

.body3 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3em;
}

.caption {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.3em;
}

.desc-text {
  color: var(--gray-color-500);
}


`;

export const ResetStyle = createGlobalStyle`  
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  all: unset; /* 모든 기본 스타일 제거 */
  display: inline-block; /* 레이아웃 깨짐 방지 */
  cursor: pointer; /* 클릭 가능하도록 설정 */
  height: auto;
}

`;
