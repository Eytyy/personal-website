import { createGlobalStyle } from 'styled-components'

import { fonts, breakpoints } from './vars.styles'

const GlobalStyles = createGlobalStyle`
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
