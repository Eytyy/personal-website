import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  GalleryWrapper,
  Images,
  ImageWrapper,
  GalleryPrevBtn,
  GalleryNextBtn
} from './Gallery.styles'

import ProgressiveImage from './ProgressiveImage'

const Gallery = ({ slides, renderMainMediaAsMockUp }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleSlides, updateVisibleSlides] = React.useState([
    slides[0],
    slides[1]
  ])

  const nextSlide = () => {
    if (slides.length > visibleSlides.length) {
      updateVisibleSlides(prevSlides => {
        return [...prevSlides, slides[visibleSlides.length]]
      })
    }
    setActiveIndex(prevIndex => (prevIndex + 1) % visibleSlides.length)
  }

  const previousSlide = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + visibleSlides.length) % visibleSlides.length
    )
  }

  return (
    <GalleryWrapper>
      <Images>
        {visibleSlides.map(({ fields, sys }, index) => {
          return (
            <ImageWrapper
              key={sys.id}
              className={index === activeIndex ? 'active' : 'inactive'}
            >
              <ProgressiveImage
                content={fields}
                renderMainMediaAsMockUp={renderMainMediaAsMockUp}
              />
            </ImageWrapper>
          )
        })}
      </Images>
      <div className="gallery__controls">
        <GalleryPrevBtn
          className={`${activeIndex > 0 ? 'visible' : 'hidden'}`}
          onClick={previousSlide}
        />
        <GalleryNextBtn
          className={`${
            activeIndex < slides.length - 1 ? 'visible' : 'hidden'
          }`}
          onClick={nextSlide}
        />
      </div>
    </GalleryWrapper>
  )
}

Gallery.propTypes = {
  slides: PropTypes.array,
  renderMainMediaAsMockUp: PropTypes.bool
}
export default Gallery
