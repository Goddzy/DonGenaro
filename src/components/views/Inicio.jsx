import React from "react";
import { Carousel } from "react-bootstrap";


const Inicio = () => {
  return (
    <Carousel className="mainSection">
      <Carousel.Item className="carrucel">
        <img
          className="d-block w-100" height={550}
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="primer slide pizza"
        />
      </Carousel.Item>
      <Carousel.Item className="carrucel">
        <img
          className="d-block w-100" height={550}
          src="https://images.pexels.com/photos/5903315/pexels-photo-5903315.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="segundo slide pizza"
        />
      </Carousel.Item>
      <Carousel.Item className="carrucel">
        <img
          className="d-block w-100" height={550}
          src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="tercer slide pizza"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Inicio;
