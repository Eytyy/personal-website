import styled, { css } from 'styled-components'
import { vars } from '../styles'

import NextBtn from '../icons/NextBtn'
import PrevBtn from '../icons/PrevBtn'

export const Images = styled.div`
  position: relative;
  padding-top: 80%;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${vars.breakpoints.desktop}px) {
    padding-top: 60%;
    width: 90%;
  }
`

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 200ms ease-in-out;
  &.active {
    opacity: 1;
    z-index: 1;
  }
  &.inactive {
    opacity: 0;
    z-index: 0;
  }
`

export const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
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
