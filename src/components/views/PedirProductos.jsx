import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  const [precioTotal, setPrecioTotal] = useState(0);
  const [contarProductos, setContarProductos] = useState(0);

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
        onClick={() => setMostrarLista(!mostrarLista)}
        style={{
          position: "fixed",
          top: "50px",
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
        <div
          className="text-light"
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "80px",
            right: "40px",
            zIndex: "1000",
          }}
        >
          {contarProductos}
        </div>
      </div>
      <div>
        <ListaProductos
          productosPedidos={productosPedidos}
          setProductosPedidos={setProductosPedidos}
          mostrarLista={mostrarLista}
          setMostrarLista={setMostrarLista}
          precioTotal={precioTotal}
          setPrecioTotal={setPrecioTotal}
          contarProductos={contarProductos}
          setContarProductos={setContarProductos}
        ></ListaProductos>
      </div>
      <Container>
        <Row>
          <h2 className="pt-5 display-3">Pizzas</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Pizzas")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Pastas</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Pastas")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Empanadas</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Empanadas")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Gaseosas</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Gaseosas")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Alcohol</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Alcohol")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Postres salados</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Postres salados")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
        <Row>
          <h2 className="pt-5 display-3">Postres dulces</h2>
          <hr />
          {productos
            .filter((producto) => producto.categoria === "Postres dulces")
            .map((producto) => (
              <ItemProducto
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
                producto={producto}
                key={producto.id}
              />
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PedirProductos;
