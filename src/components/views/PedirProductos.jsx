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
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleSeleccionCategoria = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

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
            src="https://images.hola.com/imagenes/cocina/recetas/20191008151057/masa-de-pizza-casera/1-163-450/masa-pizza-t.jpg"
            alt="pizza"
          />
          <Carousel.Caption>
            <h1 className="carrucelTexto">La mejor calidad</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div
        onClick={() => setMostrarLista(!mostrarLista)}
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
            top: "110px",
            right: "40px",
            zIndex: "1000",
          }}
        >
          {contarProductos}
        </div>
      </div>
      <div className="text-center mt-5">
        <select
          value={categoriaSeleccionada}
          onChange={handleSeleccionCategoria}
          className="select"
        >
          <option value="">Buscar por categoría</option>
          <option value="Pizzas">Pizzas</option>
          <option value="Pastas">Pastas</option>
          <option value="Empanadas">Empanadas</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Postres">Postres</option>
        </select>

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
        {categoriaSeleccionada === "" ? (
          <>
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
                    key={producto._id}
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
                    key={producto._id}
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
                    key={producto._id}
                  />
                ))}
            </Row>
            <Row>
              <h2 className="pt-5 display-3">Bebidas</h2>
              <hr />
              {productos
                .filter((producto) => producto.categoria === "Bebidas")
                .map((producto) => (
                  <ItemProducto
                    productosPedidos={productosPedidos}
                    setProductosPedidos={setProductosPedidos}
                    contarProductos={contarProductos}
                    setContarProductos={setContarProductos}
                    precioTotal={precioTotal}
                    setPrecioTotal={setPrecioTotal}
                    producto={producto}
                    key={producto._id}
                  />
                ))}
            </Row>
            <Row>
              <h2 className="pt-5 display-3">Postres</h2>
              <hr />
              {productos
                .filter((producto) => producto.categoria === "Postres")
                .map((producto) => (
                  <ItemProducto
                    productosPedidos={productosPedidos}
                    setProductosPedidos={setProductosPedidos}
                    contarProductos={contarProductos}
                    setContarProductos={setContarProductos}
                    precioTotal={precioTotal}
                    setPrecioTotal={setPrecioTotal}
                    producto={producto}
                    key={producto._id}
                  />
                ))}
            </Row>
          </>
        ) : (
          <Row>
            <h2 className="pt-5 display-3">{categoriaSeleccionada}</h2>
            <hr />
            {productos
              .filter(
                (producto) => producto.categoria === categoriaSeleccionada
              )
              .map((producto) => (
                <ItemProducto
                  productosPedidos={productosPedidos}
                  setProductosPedidos={setProductosPedidos}
                  contarProductos={contarProductos}
                  setContarProductos={setContarProductos}
                  precioTotal={precioTotal}
                  setPrecioTotal={setPrecioTotal}
                  producto={producto}
                  key={producto._id}
                />
              ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default PedirProductos;
