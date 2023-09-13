import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <>
      <div className="text-center colorRojo">
        <h2 className="text-light mt-3">
          Don <img src={logo} alt="logo" height={60}/>enaro
        </h2>
      </div>
      <Row className="colorRojo text-light text-center pt-1 pb-3 mx-0 px-0">
        <Col md="4 my-2">
          <h2>Redes</h2>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="px-1 fs-4 text-light"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="px-1 fs-4 text-light"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            className="px-1 fs-4 text-light"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="px-1 fs-4 text-light"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Col>
        <Col md="4 my-2" className="fs-5">
          <h3>Horarios de atención</h3>
          <li className="me-3">Lun - Vie: 08:00 - 22:00</li>
          <li>Sab - Dom: 09:00 - 00:00</li>
        </Col>
        <Col md="4 my-2" className="fs-5">
          <Link className="fs-5 text-decoration-none text-light" to="/">
            <h3>Acerca de nosotros</h3>
          </Link>
        </Col>
      </Row>
      <div className="text-center colorRojo">
          <h6 className="text-light mt-2">&copy; todos los derechos reservados</h6>
      </div>
    </>
  );
};

export default Footer;
