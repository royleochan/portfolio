import React, { useState } from "react"
import Carousel, {
  arrowsPlugin,
  Dots,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import Right from "@ant-design/icons/RightOutlined"
import DoubleRight from "@ant-design/icons/DoubleRightOutlined"
import Left from "@ant-design/icons/LeftOutlined"
import DoubleLeft from "@ant-design/icons/DoubleLeftOutlined"

import "./index.scss"

const CustomCarousel = props => {
  const { images, cover } = props
  const [value, setValue] = useState(0)

  const slides = images.map(image => <img src={image} className="image" />)
  slides.unshift(<img src={cover} className="image-cover" />)

  const onChange = value => {
    setValue(value)
  }

  return (
    <div className="carousel-container">
      <Carousel
        value={value}
        onChange={onChange}
        slides={slides}
        breakpoints={{
          600: {
            plugins: [
              "clickToChange",
              "centered",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
        plugins={[
          "centered",
          "infinite",
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <DoubleLeft className="icon" />,
              arrowLeftDisabled: <Left className="icon" />,
              arrowRight: <DoubleRight className="icon" />,
              arrowRightDisabled: <Right className="icon" />,
              addArrowClickHandler: true,
            },
          },
        ]}
      />
      <Dots value={value} onChange={onChange} number={images.length + 1} />
    </div>
  )
}

export default CustomCarousel
