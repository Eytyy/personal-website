import styled, { keyframes } from 'styled-components'
import { vars } from '../styles'

export const ClosePage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 36px;
  height: 36px;
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
  @media (min-width: ${vars.breakpoints.desktop}px) {
    right: 80px;
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

const animateEyeBulb = keyframes`
	0% {
		transform: translate(10px, 10px);
	}

	25% {
		transform: translate(-10px, 10px);
	}

	50% {
		transform: translate(-10px, -10px);
	}

	100% {
		transform: translate(10px, -10px);
	}
`

export const VideoWrapper = styled.div`
  position: relative;
  max-height: 80vh;
  overflow: hidden;
  color: ${vars.colors.blue};

  video {
    width: 100%;
    height: auto;
    max-height: 80vh;
  }
`
export const VideoCaption = styled.div`
  margin-top: 10px;
`

export const VideoControls = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  .video-btn {
    display: block;
    transform: ${({ state }) =>
      state === 'playing' ? `scale(2)` : `scale(1)`};
    text-align: center;
    font-size: 20px;
    font-family: ${vars.fonts.bold};
    mix-blend-mode: difference;

    &:hover {
      .pause {
        opacity: 1;
        visibility: visible;
      }
      #eyeball {
        animation: none;
      }
    }
  }

  #eyeball {
    animation: 5s alternate infinite ${animateEyeBulb};
  }
  #upperbrow,
  #lowerbrow {
    transition: transform 200ms linear;
  }

  .pause {
    opacity: ${({ state }) => (state === 'playing' ? 0 : 1)};
    visibility: ${({ state }) => (state === 'playing' ? 'hidden' : 'visible')};
    .icon {
      margin: 0 auto;
    }
  }
`
