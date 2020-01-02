import styled from 'styled-components'
import { vars } from './styles'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: ${vars.layout.gutter_mobile * 3}px ${vars.layout.gutter_mobile * 2}px
    ${vars.layout.gutter_mobile * 2}px;

  @media (min-width: ${vars.breakpoints.mobile}px) {
    padding: ${vars.layout.gutter_mobile * 3}px;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    padding: ${vars.layout.gutter_desktop * 2}px;
  }
`
