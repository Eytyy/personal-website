import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { vars } from '../styles'

const StyledNextBtn = styled.div`
  width: 36px;
  height: 36px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 2;
  transition: opacity 300ms ease-in-out;
  .w,
  .c {
    display: block;
    width: 12px;
    height: 12px;
  }
  .c {
    background: ${vars.colors.blue};
    transform: ${props =>
      props.state === 'visible' ? 'rotate(45deg)' : 'rotate(0deg)'};
    transition: transform 200ms ease-in-out;
  }
  @media (min-width: ${vars.breakpoints.desktop}px) {
    width: 45px;
    height: 45px;
    .w,
    .c {
      display: block;
      width: 15px;
      height: 15px;
    }
  }
`

const NextBtn = ({ onClick, className }) => {
  return (
    <StyledNextBtn className={className} onClick={onClick}>
      <span className="w"></span>
      <span className="c"></span>
      <span className="w"></span>
      <span className="w"></span>
      <span className="w"></span>
      <span className="c"></span>
      <span className="w"></span>
      <span className="c"></span>
      <span className="w"></span>
    </StyledNextBtn>
  )
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default NextBtn
