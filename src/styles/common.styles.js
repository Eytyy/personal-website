import styled, { css } from 'styled-components'
import { breakpoints, layout, fonts, colors } from './vars.styles'

export const strippedFormElementStyle = css`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
`

export const List = styled.ul``

export const FloatingNav = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: ${layout.gutter_mobile / 2}px ${layout.gutter_mobile * 2}px
    ${layout.gutter_mobile}px;

  @media (min-width: ${breakpoints.mobile}px) {
    padding: ${layout.gutter_mobile / 2}px ${layout.gutter_mobile * 3}px
      ${layout.gutter_mobile}px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    height: ${layout.gutter_desktop * 2}px;
    padding: 0px ${layout.gutter_desktop * 2}px 0px;
  }
`

export const ContentNav = styled(FloatingNav)`
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 200ms linear;
  transform: ${props =>
    props.visible === 'visible' ? 'translateY(0%)' : 'translateY(100%)'};

  * {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    bottom: -1 * ${layout.gutter_desktop}px;
  }
`

export const BigType = css`
  font-size: 32px;
  font-family: ${fonts.bold};
  @media (min-width: ${breakpoints.mobile}px) {
    font-size: 52px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 68px;
  }
`

const FullLoadingStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ComponentLoadingStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Loading = styled.div`
  ${props => props.full && FullLoadingStyles}
  ${props => props.component && ComponentLoadingStyles}
  display: flex;
  .c {
    animation: 1s alternate infinite loadingMobile ease-in;
    width: 20px;
    height: 20px;
    background: ${colors.blue};
    margin-right: 20px;
  }
  .c2 {
    animation-delay: 200ms;
  }
  .c3 {
    animation-delay: 400ms;
  }
  .c4 {
    animation-delay: 600ms;
  }

  @media (min-width: ${breakpoints.laptop}px) {
    .c {
      animation: 1s alternate infinite loadingDesktop ease-in;
      width: ${props =>
        props.component ? '20px' : props.big ? '50px' : '10px'};
      height: ${props =>
        props.component ? '20px' : props.big ? '50px' : '10px'};
      background: ${colors.blue};
      margin-right: ${props =>
        props.component ? '20px' : props.big ? '50px' : '10px'};
    }
  }

  @keyframes loadingDesktop {
    0% {
      transform: ${props =>
        props.component
          ? 'translateY(20px)'
          : props.big
          ? 'translateY(50px)'
          : 'translateY(10px)'};
    }
    100% {
      transform: ${props =>
        props.component
          ? 'translateY(-20px)'
          : props.big
          ? 'translateY(-50px)'
          : 'translateY(-10px)'};
    }
  }

  @keyframes loadingMobile {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`
