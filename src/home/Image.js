import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';
export default function Image() {
  return (
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            style={{ width: 800, height: 300, padding: 10 }}
            src="/image/o.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ width: 800, height: 300, padding: 10 }}
            src="/image/order.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ width: 800, height: 300, padding: 10 }}
            src="/image/imgorder.jpg"
            alt="Image Three"
          />
        </Carousel.Item>
      </Carousel>
  );
}
