import styled from 'styled-components'
import { CommonStyles, vars } from './styles'

export const Nav = styled.nav`
  margin-bottom: 20px;

  @media (min-width: ${vars.breakpoints.laptop}px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 60px;
    margin-bottom: 30px;
    span:first-child {
      grid-column: 1 / 3;
    }

    span:last-child {
      grid-column: 3 / 7;
    }
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    max-width: 1020px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 40px;
  }
`

export const NavigationLink = styled.span`
  ${CommonStyles.BigType}
  margin: 0px 30px 0px 0px;
  opacity: 0.2;
  &.active {
    opacity: 1;
  }
  @media (min-width: ${vars.breakpoints.mobile}px) {
    margin: 0px 60px 0px 0px;
  }
  @media (min-width: ${vars.breakpoints.tablet}px) {
    margin: 0px 100px 0px 0px;
  }

  @media (min-width: ${vars.breakpoints.laptop}px) {
    margin: 0px 100px 0px 0px;
    opacity: 1;
  }
`
