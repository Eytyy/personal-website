import styled, { css } from 'styled-components'
import { vars } from '../styles'

import NextBtn from '../icons/NextBtn'
import PrevBtn from '../icons/PrevBtn'

export const Images = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`

export const ImageWrapper = styled.div`
  transition: opacity 200ms ease-in-out;
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

  @media (min-width: ${vars.breakpoints.tablet}px) {
    right: -50px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    right: -60px;
  }
`

export const GalleryPrevBtn = styled(PrevBtn)`
  ${GalleryBtnDefaultStyles}
  left: -30px;

  @media (min-width: ${vars.breakpoints.tablet}px) {
    right: -50px;
  }

  @media (min-width: ${vars.breakpoints.desktop}px) {
    left: -60px;
  }
`
