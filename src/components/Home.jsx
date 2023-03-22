import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product'

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (

    <div >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/home/img1.jpg"
            alt="iPhone" height="610px"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/home/img3.webp"
            alt="iPhonee" height="610px"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/home/img4.webp"
            alt="iPhone" height="610px"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/home/img2.jpg"
            alt="iPhone" height="610px"
          />

        </Carousel.Item>
      </Carousel>

      <Product />


    </div>



  )
}

export default Home