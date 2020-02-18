import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`
const SharedImageStyles = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
`

const Thumb = styled(SharedImageStyles)`
  transition: opacity 2s ease-in-out;
  opacity: ${props => (props.state === 'visible' ? 1 : 0)};
  z-index: 0;
  filter: blur(8px);
  object-fit: ${props => (props.layout === 'mockup' ? 'contain' : 'cover')};
`
const ImageStyle = styled(SharedImageStyles)`
  object-fit: ${props => (props.layout === 'mockup' ? 'contain' : 'cover')};
`

const ProgressiveImage = ({ content, renderMainMediaAsMockUp }) => {
  const [ready, updateState] = React.useState(false)
  const _mounted = useRef()

  const src = `${content.file.url}?w=1920`
  const srcSect = `${content.file.url}?w=500 500w, ${content.file.url}?w=728 728w, ${content.file.url}?w=900 900w, ${content.file.url}?w=1280 1280w, ${content.file.url}?w=1920 1920w`
  const sizes = `(max-width: 580px) 500px, 
  (max-width: 768px) 728px, 
  (max-width: 1024px) 904px, 
  (max-width: 1440px) 1280px, 
  1920px`

  useEffect(() => {
    _mounted.current = true

    const buffer = new Image()
    buffer.onload = () => _mounted.current && updateState(true)
    buffer.srcSet = srcSect
    buffer.sizes = sizes
    buffer.src = src
    return function cleanup() {
      _mounted.current = false
    }
  }, [])

  return (
    <ImageWrapper className="media-block">
      {ready ? (
        <ImageStyle
          layout={renderMainMediaAsMockUp ? 'mockup' : 'default'}
          alt={content.title}
          srcSet={srcSect}
          sizes={sizes}
          src={src}
        />
      ) : null}
      <Thumb
        layout={renderMainMediaAsMockUp ? 'mockup' : 'default'}
        state={ready ? 'hidden' : 'visible'}
        src={`${content.file.url}?w=20`}
        alt={content.title}
        className="thumb"
      />
    </ImageWrapper>
  )
}

ProgressiveImage.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.object
  }),
  renderMainMediaAsMockUp: PropTypes.bool
}

export default ProgressiveImage
