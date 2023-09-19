import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";
import { obtenerProductosAPI } from "../helpers/queries";
import CarritoProductos from "./productos/CarritoProductos";

const PedirProductos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductosAPI().then((productos) => {
      setProductos(productos);
    });
  }, []);

  return (
    <section className="mainSection">
      <Carousel className="miCarrusel">
        <Carousel.Item className="carrucel">
          <img
            className="d-block w-100"
            height={450}
            src="https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="primer slide pizza"
          />
          <Carousel.Caption>
            <h1 className="carrucelTexto">Pizzas de la mejor calidad</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CarritoProductos></CarritoProductos>
      <Container>
        <Row>
          {productos.map((producto) => (
            <ItemProducto producto={producto} key={producto.id}></ItemProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PedirProductos;
