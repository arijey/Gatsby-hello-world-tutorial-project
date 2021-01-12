import React from "react"
import { Carousel } from "antd"
import "./img_carousel.css"

const img_carousel = () => {
  return (
    <>
      <Carousel autoplay>
        <div className="img-carousel-slide">
          <h3 className="img-carousel-content">slide 1</h3>
        </div>
        <div className="img-carousel-slide">
          <h3 className="img-carousel-content">slide 2</h3>
        </div>
        <div className="img-carousel-slide">
          <h3 className="img-carousel-content">slide 3</h3>
        </div>
        <div className="img-carousel-slide">
          <h3 className="img-carousel-content">slide 4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default img_carousel
