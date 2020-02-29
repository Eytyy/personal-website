import React from 'react'

import Video from './Video'
import ProgressiveImage from './ProgressiveImage'
import Gallery from './Gallery'

const MediaBlock = ({ content, autoplay, fullwidth }) => {
  if (content.length > 1) {
    return (
      <Gallery autoplay={autoplay} fullwidth={fullwidth} slides={content} />
    )
  } else {
    const singleAsset = content[0]
    if (singleAsset.fields.file.contentType === 'video/mp4') {
      return <Video autoplay={autoplay} {...singleAsset.fields} />
    } else {
      return (
        <ProgressiveImage fullwidth={fullwidth} content={singleAsset.fields} />
      )
    }
  }
}

export default MediaBlock
