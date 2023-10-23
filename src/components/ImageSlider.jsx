import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assest/img1.jpg'
import img2 from '../Assest/img2.jpg'
import img3 from '../Assest/img3.jpg'
import img4 from '../Assest/img4.jpg'

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
