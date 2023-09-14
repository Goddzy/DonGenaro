import React from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <section className="mainSection">
      <Carousel>
        <Carousel.Item className="carrucel">
          <img
            className="d-block w-100"
            height={450}
            src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="primer slide pizza"
          />
          <Carousel.Caption>
            <h3 className="carrucelTexto">Sabores a Domicilio</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrucel">
          <img
            className="d-block w-100"
            height={450}
            src="https://images.pexels.com/photos/5903315/pexels-photo-5903315.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="segundo slide pizza"
          />
          <Carousel.Caption>
            <h3 className="carrucelTexto">Clic, pizza, disfruta</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carrucel">
          <img
            className="d-block w-100"
            height={450}
            src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="tercer slide pizza"
          />
          <Carousel.Caption>
            <h3 className="carrucelTexto">Bocados de calidad</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="my-5 text-center">
        <h1 className="colorRojoTexto">
          <img
            className="img-fluid"
            src="https://kentucky.com.ar/imgs/franquicias.svg"
            alt="Franquicias"
          />
          <Link
            as={Link}
            to="/aboutUs"
            className="colorRojoTexto text-decoration-none"
          >
            <img
              className="img-fluid"
              src="https://kentucky.com.ar/imgs/btn_sumate.svg"
              alt="Sumate"
            />
          </Link>
        </h1>
      </Container>
      <Container fluid className="mt-5 text-center">
        <Row className="colorRojo">
          <Col md="6" className="m-0 p-0">
            <img
              src="https://images.pexels.com/photos/38712/pexels-photo-38712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hogar"
              className="w-100 max-width-100 rounded-3 img-fluid"
            />
          </Col>
          <Col md="6">
            <h2>
              <img
                src="https://kentucky.com.ar/imgs/fuego_desde_1942_d.svg"
                alt="Fuego desde 1942"
                className="w-100 max-width-100 rounded-4 img-fluid mt-2"
              />{" "}
            </h2>
            <h5 className="text-light mt-3 mx-1">
              Picsa, pixa o pitsa, según quien lo pronuncie. Amamos que la coman
              de parados en el mostrador, o en la mesa con amigos. Con la mano o
              con cubiertos. Amamos que entren por el olorcito o porque vinieron
              después del cine. Que coman la fainá (o fáina, como prefieran)
              fría o caliente; arriba o abajo de la muzza. Que se la lleven para
              desayunar al día siguiente. Amamos que la pizza sea parte de
              nuestras vidas. Tanto la amamos, que desde 1942 estamos abiertos
              desde la mañana hasta la madrugada, porque no hay hora para comer
              una buena pizza. Una pizza hecha con amor, nuestra pizza.
            </h5>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0 position-relative">
        <img
          src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pizza"
          className="w-100"
          style={{ maxHeight: "700px" }}
        />
        <Link as={Link} to="/" className="imagen-tentate">
          <img
            src="https://kentucky.com.ar/imgs/grafico-tentate.svg"
            alt="Tentáte con nuestras pizzas"
            className="img-fluid position-absolute top-50 start-50 translate-middle"
            style={{ transform: "translate(-50%, -50%)", zIndex: "1" }}
          />
        </Link>
      </Container>
    </section>
  );
};

export default Inicio;
