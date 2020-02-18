import React from 'react'

import Video from './Video'
import ProgressiveImage from './ProgressiveImage'
import Gallery from './Gallery'

const MediaBlock = ({ content, renderMainMediaAsMockUp }) => {
  if (content.length > 1) {
    return (
      <Gallery
        renderMainMediaAsMockUp={renderMainMediaAsMockUp}
        slides={content}
      />
    )
  } else {
    const singleAsset = content[0]
    if (singleAsset.fields.file.contentType === 'video/mp4') {
      return <Video {...singleAsset.fields} />
    } else {
      return (
        <ProgressiveImage
          renderMainMediaAsMockUp={renderMainMediaAsMockUp}
          content={singleAsset.fields}
        />
      )
    }
  }
}

export default MediaBlock
