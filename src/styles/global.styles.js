import { createGlobalStyle } from 'styled-components'

import { fonts, breakpoints } from './vars.styles'

import TitleFont from '../fonts/GT-Sectra-Display-Super.woff2'
import BodyFont from '../fonts/GT-Eesti-Text-Light.woff2'
import BoldFont from '../fonts/GT-Eesti-Text-Bold.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.title};
    src: url(${TitleFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${fonts.regular};
    src: url(${BodyFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
	@font-face {
    font-family: ${fonts.bold};
    src: url(${BoldFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
	}
	
  html {
    box-sizing: border-box;
	}
  
  * {
    font-weight: normal;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: ${fonts.regular};
    font-size: 14px;
    margin: 0;
    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 16px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0 0 1.5em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    height: auto;
    display: block;
    width: 100%;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .link {
    cursor: pointer;
  }


  h1, h2, h3, h4 {
    margin: 0;
  }

  strong {
    font-family: $bold;
  }


  header, video, article, section, main, nav, footer {
    display: block;
  }

  .link {
    display: block;
    position: relative;
  }
  
  #modal {
    position: relative;
    z-index: 100;
  }

`

export default GlobalStyles
