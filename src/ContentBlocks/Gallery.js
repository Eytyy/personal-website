import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  GalleryWrapper,
  Images,
  Image,
  ImageWrapper,
  GalleryPrevBtn,
  GalleryNextBtn
} from './Gallery.styles'

const Gallery = ({ slides }) => {
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
        {visibleSlides.map(({ fields, sys }, index) => (
          <ImageWrapper
            key={sys.id}
            className={index === activeIndex ? 'active' : 'inactive'}
          >
            <Image
              srcSet={`${fields.file.url}?w=500 500w, ${fields.file.url}?w=728 728w, ${fields.file.url}?w=900 900w, ${fields.file.url}?w=1280 1280w, ${fields.file.url}?w=1920 1920w`}
              sizes="(max-width: 580px) 500px, 
              (max-width: 768px) 728px, 
              (max-width: 1024px) 904px, 
              (max-width: 1440px) 1280px, 
              1920px"
              src={`${fields.file.url}?w=400`}
              alt="Slider Image"
            />
          </ImageWrapper>
        ))}
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
  slides: PropTypes.array
}
export default Gallery
