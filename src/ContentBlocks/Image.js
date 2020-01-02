import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ file, caption }) => {
  return (
    <div className={`media-block`}>
      <img
        alt={file.title}
        srcSet={`${file.url}?w=500 500w, ${file.url}?w=728 728w, ${file.url}?w=900 900w, ${file.url}?w=1280 1280w, ${file.url}?w=1920 1920w`}
        sizes="(max-width: 580px) 500px, 
              (max-width: 768px) 728px, 
              (max-width: 1024px) 904px, 
              (max-width: 1440px) 1280px, 
              1920px"
        src={`${file.url}?w=400`}
      />
      <div className="media__info">
        {caption && <div className="caption">{caption}</div>}
      </div>
    </div>
  )
}

Image.propTypes = {
  file: PropTypes.object,
  caption: PropTypes.string
}

export default Image
