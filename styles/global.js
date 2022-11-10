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
    font-size: 62.5%;
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
    background: ${theme.colors.whiteColor};
    box-sizing: border-box;
    overscroll-behavior: none;
    font-family: 'Assistant';
    
  }
  .slick-next:before, .slick-prev:before {
    font-size: 36px;
  }
  .slick-dots {
    bottom: 25px;
  }
  .home_slider .slick-prev {
    left: 10px;
    top: 52%;
    z-index: 9;
  }
  .home_slider .slick-next {
    right: 25px;
    top: 52%;
    z-index: 9;
  }
  .limitless_slider .slick-prev {
    left: 10px;
    z-index: 9;
  }
  .limitless_slider .slick-next {
    right: 25px;
    z-index: 9;
  }
  video#video_bg {
    position: fixed;
    z-index: -1;
    width: 100vw;
  }
  .limitless_slider .slick-next:before, .limitless_slider .slick-prev:before {
    color: #000;
  }
  @keyframes floating {
    0% { transform: translate(200px,  0px); }
    100%   { transform: translate(0, 0px); }   
  }
  @keyframes floating1 {
    0% { transform: translate(-200px,  0px); }
    100%   { transform: translate(0, 0px); }   
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 465px){
    video#video_bg {
      width: auto;
      height: 100vh;
    }
    .roadmap_section, .home_slider .slick-prev, .home_slider .slick-next {
      display:none!important;
    }
  }
`

export default GlobalStyles
