import React from "react"
import { Carousel } from "antd"

const img_carousel = ({ children }) => {
  const contentStyle = {
    height: "30vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  }

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>slide 1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>slide 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>slide 3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>slide 4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default img_carousel
