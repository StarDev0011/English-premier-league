import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Assistant';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Assistant-Regular.otf");
  }

  html {
    scroll-behavior: smooth;
    @media(min-width: 112.5em){
      font-size: 75%;
    }
    @media(max-width: 75em){
      font-size: 56.25%;
    }
    @media(max-width: 56.25em){
      font-size: 50%;
    }
    @media(max-width: 37.5em){
      font-size: 43.75%;
    }
  }
  body{
    min-height: 100%;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    font-weight: normal;
    color: ${theme.colors.bodytxtColor};
    background: ${theme.colors.primacybgColor};
    box-sizing: border-box;
    overscroll-behavior: none;
    font-family: 'Assistant';
    font-size: 14px;
    line-height: 1.4;
    
  }
  .primary-text {
    color: #d91e00;
    font-size: 18px;
    text-transform: uppercase;
    border-bottom: solid 1px #eee;
    padding-bottom: 10px;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  .body {
    max-width: 1160px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
  }
  .left_bar {
    width: 75%;
    padding: 10px;
  }
  .right_bar {
    width: 25%;
    padding: 10px;
  }
  .articles {
    margin-top: 30px;
    display: flex;
  }
  .articles_list {
    width: 58%;
    margin-right: 2%;
    background: #fff;
    padding: 20px;
  }
  .transactions_list {
    width: 40%;
    background: #fff;
    padding: 20px;
  }
`

export default GlobalStyles
