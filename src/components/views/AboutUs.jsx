import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMe from "../images/aboutMe.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md="6">
          <img
            src={aboutMe}
            alt="Renato Trevisiol Montiel"
            className="rounded-5 w-100"
          />
        </Col>
        <Col md="6">
          <h1 className="display-1">Acerca de mí</h1>
          <hr />
          <h2>
            <span className="badge bg-danger">Desarrollador y diseñador</span>
          </h2>
          <p>
            Me llamo Renato Trevisiol Montiel, tengo 18 años, y soy un
            programador Full-Stack. Mi Stack se basa en MERN (MongoDB, Express,
            React y Node), y esta página fue diseñada con React. Actualmente
            estoy disponible para cualquier puesto de trabajo relacionado con el
            desarrollo web. Soy una persona muy responsable y que está en
            constante aprendizaje.
          </p>
          <Row className="my-5">
            <h2>Comunicate conmigo</h2>
            <hr />
            <Col xs="4" as={Link} to="https://github.com/Goddzy" target="_blank" className="fs-1 text-dark"><FontAwesomeIcon icon={faGithub} /></Col>
            <Col xs="4" as={Link} to="/aboutUs" target="_blank"  className="fs-1 text-dark"><FontAwesomeIcon icon={faInstagram} /></Col>
            <Col xs="4" as={Link} to="/aboutUs" target="_blank"  className="fs-1 text-dark"><FontAwesomeIcon icon={faGoogle} /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
