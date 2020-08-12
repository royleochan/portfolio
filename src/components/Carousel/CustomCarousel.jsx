import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import "./index.scss"

const CustomCarousel = props => {
  const { images, cover } = props

  const slides = images.map(image => (
    <img src={image} className="image" alt="cover" />
  ))

  slides.unshift(
    <img src={cover} className="image-cover" alt="project pictures" />
  )

  return (
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showIndicators
        transitionTime={500}
        showThumbs={false}
        showStatus={false}
      >
        {slides.map(slide => (
          <div>{slide}</div>
        ))}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
