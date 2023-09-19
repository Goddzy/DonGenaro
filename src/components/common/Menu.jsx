import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoG from "../images/logoG.png";
import logoD from "../images/logoD.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="colorRojo">
        <Container>
          <Navbar.Brand href="/" as={Link} to="/">
            <h1 className="text-light mt-3">
              <img src={logoD} alt="logoD" height={60} />
              on <img src={logoG} alt="logoG" height={60} />
              enaro
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-light fs-6">
                <FontAwesomeIcon icon={faHome} /> Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/pedirProductos"
                className="text-light fs-6"
              >
                <FontAwesomeIcon icon={faShoppingBag} /> Hacer pedido
              </Nav.Link>
              <Nav.Link as={Link} to="/registrar" className="text-light fs-6">
                <FontAwesomeIcon icon={faUserPlus} /> Registrar
              </Nav.Link>
              <Nav.Link as={Link} to="/iniciarSesion" className="text-light fs-6">
                <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
