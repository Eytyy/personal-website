import styled from 'styled-components'
import { vars } from '../styles'

export const Container = styled.div`
  padding: 20px 40px 40px;

  @media (min-width: ${vars.breakpoints.tablet}px) {
    padding: 30px 60px 60px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    padding: 40px 80px 80px;
  }
`

export const HomeContent = styled.div`
  position: relative;
  .home-content-col {
    position: absolute;
    transition: opacity 200ms ease-in-out;
    background: #fff;
  }

  @media (min-width: ${vars.breakpoints.laptop}px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 60px;
    .home-content-col {
      opacity: 1;
      visibility: visible;
      position: relative;
    }
    .projects {
      grid-column: 1 / 3;
    }
    .info {
      grid-column: 3 / 7;
    }
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    max-width: 1020px;
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProjectsWrapper = styled.div`
  opacity: ${props => (props.active === 'work' ? '1' : '0')};
  visibility: ${props => (props.active === 'work' ? 'visible' : 'hidden')};
`

export const InfoWrapper = styled.div`
  opacity: ${props => (props.active === 'info' ? '1' : '0')};
  visibility: ${props => (props.active === 'info' ? 'visible' : 'hidden')};
`

export const ClosePage = styled.div`
  position: fixed;
  top: 20px;
  right: 10px;
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 36px;
  height: 36px;
  visibility: ${props => (props.state === 'visible' ? 'visible' : 'hidden')};
  opacity: ${props => (props.state === 'visible' ? 1 : 0)};
  transition: opacity 300ms ease-in-out;
  .w,
  .c {
    display: block;
    width: 12px;
    height: 12px;
  }
  .c {
    background: ${vars.colors.blue};
  }
  @media (min-width: ${vars.breakpoints.tablet}px) {
    top: 30px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    right: 80px;
    width: 45px;
    height: 45px;
    top: 40px;
    .w,
    .c {
      display: block;
      width: 15px;
      height: 15px;
    }
  }
`
