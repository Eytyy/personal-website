import React from 'react'

import Video from './Video'
import Image from './Image'
import Gallery from './Gallery'

const MediaBlock = ({ content }) => {
  if (content.length > 1) {
    return <Gallery slides={content} />
  } else {
    const singleAsset = content[0]
    if (singleAsset.fields.file.contentType === 'video/mp4') {
      return <Video {...singleAsset.fields} />
    } else {
      return <Image {...singleAsset.fields} />
    }
  }
}

export default MediaBlock
