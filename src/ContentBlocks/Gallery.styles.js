import styled, { css } from 'styled-components'
import { vars } from '../styles'

import NextBtn from '../icons/NextBtn'
import PrevBtn from '../icons/PrevBtn'

export const Images = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${vars.breakpoints.desktop}px) {
    width: 90%;
  }
`

export const ImageWrapper = styled.div`
  transition: opacity 200ms ease-in-out;
  box-shadow: 0px 0px 10px -5px;
  background: ${vars.colors.blue};
  &.active {
    height: 100%;
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }
  &.inactive {
    height: 0px;
    visibility: hidden;
    opacity: 0;
    z-index: 0;
  }
`

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100vh;
  margin: 0 auto;
`

export const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
`

const GalleryBtnDefaultStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
`

export const GalleryNextBtn = styled(NextBtn)`
  ${GalleryBtnDefaultStyles}
  right: -30px;
  @media (min-width: ${vars.breakpoints.desktop}px) {
    right: 0px;
  }
`

export const GalleryPrevBtn = styled(PrevBtn)`
  ${GalleryBtnDefaultStyles}
  left: -30px;

  @media (min-width: ${vars.breakpoints.desktop}px) {
    left: 0px;
  }
`
