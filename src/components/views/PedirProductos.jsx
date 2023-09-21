import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";
import { obtenerProductosAPI } from "../helpers/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ListaProductos from "./productos/ListaProductos";

const PedirProductos = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [productosPedidos, setProductosPedidos] = useState([]); 

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
      <div
        onClick={()=> setMostrarLista(!mostrarLista)}
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
      <ListaProductos mostrarLista={mostrarLista} setMostrarLista={setMostrarLista}></ListaProductos>
      <Container>
        <Row>
          {productos.map((producto) => (
            <ItemProducto productosPedidos={productosPedidos} setProductosPedidos={setProductosPedidos} producto={producto} key={producto.id}></ItemProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PedirProductos;
