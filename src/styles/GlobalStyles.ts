import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Thin.woff2'), url('./assets/font/Pretendard-Thin.woff2') format('woff2');
        font-weight: 300;
        font-style: thin;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Regular.woff2'), url('./assets/font/Pretendard-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: regular;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Medium.woff2'), url('./assets/font/Pretendard-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Blod.woff2'), url('./assets/font/Pretendard-Blod.woff2') format('woff2');
        font-weight: 700;
        font-style: bold;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-ExtraBold.woff2'), url('./assets/font/Pretendard-ExtraBold.woff2') format('woff2');
        font-weight: extrabold;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: local('Pretendard-Black.woff2'), url('./assets/font/Pretendard-Black.woff2') format('woff2');
        font-weight: 900;
        font-style: black;
      }

    * {
        font-family: 'Pretendard-Regular', sans-serif;
        color: #333;
        box-sizing: border-box;
    }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Pretendard-Regular', sans-serif;
        background-color: #fefefe;
    }
    ol, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    #root{
        display: flex;
        flex-direction: column;
        height:100dvh;
    }
`;

export default GlobalStyles;
