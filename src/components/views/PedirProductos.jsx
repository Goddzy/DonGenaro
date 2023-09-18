import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const PedirProductos = () => {
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
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "5px",
          zIndex: "1000",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: "1.5em", color: "#fff" }}
          />
        </div>
      </div>
      <Container>
        <Row>
          <Col md="4" className="my-5">
            <Card className="item">
              <figure>
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/166451/pexels-photo-166451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </figure>
              <Card.Body className="text-center">
                <Card.Title>Producto título</Card.Title>
                <Card.Text>Descripción del producto</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PedirProductos;
