import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from "../images/coro1.webp"
import img2 from "../images/coro2.webp"
import img3 from "../images/coro3.webp"
import img4 from "../images/coro4.webp"
import img5 from "../images/coro5.webp"
import img6 from "../images/coro6.webp"



const CoroHead = () => {
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="" />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img6} alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CoroHead