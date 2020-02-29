/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import VideoIcon from '../icons/VideoIcon'

import {
  ClosePage,
  VideoWrapper,
  VideoControls,
  VideoCaption
} from './Video.styles'
import { CommonStyles } from '../styles'

const Video = ({ file, description, autoplay }) => {
  const videoElement = useRef(null)
  const [state, setState] = useState({
    playing: false,
    loading: true
  })

  const play = () => {
    videoElement.current.play()
    setState({
      playing: true
    })
  }

  const pause = () => {
    videoElement.current.pause()
    setState({
      playing: false
    })
  }

  const onComplete = () => {
    setState({
      playing: false
    })
    videoElement.current.currentTime = 0
  }

  const showLoading = () => {
    setState({
      loading: true
    })
  }

  const hideLoading = () => {
    setState({
      loading: false
    })
  }

  const Playing = () => {
    setState({
      playing: true
    })
  }

  const Paused = () => {
    setState({
      playing: false
    })
  }

  const ToggleVideo = () => (state.playing ? pause() : play())

  useEffect(() => {
    videoElement.current.addEventListener('ended', onComplete)
    videoElement.current.addEventListener('waiting', showLoading)
    videoElement.current.addEventListener('loadedmetadata', hideLoading)
    videoElement.current.addEventListener('playing', Playing)
    videoElement.current.addEventListener('play', Playing)
    videoElement.current.addEventListener('pause', Paused)

    return function cleanup() {
      videoElement.current.removeEventListener('ended', onComplete)
      videoElement.current.removeEventListener('waiting', showLoading)
      videoElement.current.removeEventListener('loadedmetadata', hideLoading)
      videoElement.current.removeEventListener('playing', Playing)
      videoElement.current.removeEventListener('play', Playing)
      videoElement.current.removeEventListener('pause', Paused)
    }
  }, [])

  const { playing, loading } = state
  return (
    <div className="video-block">
      <VideoWrapper>
        {autoplay ? (
          <video
            playsinline
            loop
            muted
            autoPlay
            ref={videoElement}
            preload="auto"
            src={file.url}
            className="video"
          />
        ) : (
          <video
            playsinline
            ref={videoElement}
            preload="auto"
            src={file.url}
            className="video"
          />
        )}

        {loading ? (
          <CommonStyles.Loading component big className="loading">
            <div className="c c1"></div>
            <div className="c c2"></div>
            <div className="c c3"></div>
            <div className="c c4"></div>
          </CommonStyles.Loading>
        ) : (
          <VideoControls
            state={playing ? 'playing' : 'paused'}
            onClick={ToggleVideo}
          >
            <div className="video-btn">
              {playing ? (
                <div className="pause">
                  <ClosePage className="icon">
                    <span className="c"></span>
                    <span className="w"></span>
                    <span className="c"></span>
                    <span className="w"></span>
                    <span className="c"></span>
                    <span className="w"></span>
                    <span className="c"></span>
                    <span className="w"></span>
                    <span className="c"></span>
                  </ClosePage>
                </div>
              ) : (
                <div className="play">
                  <VideoIcon />
                  <div className="text">watch</div>
                </div>
              )}
            </div>
          </VideoControls>
        )}
      </VideoWrapper>
      {description && (
        <VideoCaption className="caption">{description}</VideoCaption>
      )}
    </div>
  )
}

Video.propTypes = {
  file: PropTypes.object,
  description: PropTypes.string,
  autoplay: PropTypes.bool
}

export default Video
