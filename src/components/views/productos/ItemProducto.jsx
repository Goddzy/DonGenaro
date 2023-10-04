import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const ItemProducto = ({
  producto,
  setProductosPedidos,
  productosPedidos,
  contarProductos,
  setContarProductos,
  precioTotal,
  setPrecioTotal,
}) => {

  const agregarProducto = () => {
    if (productosPedidos.find((item) => item._id === producto._id)) {
      const productos = productosPedidos.map((item) =>
        item._id === producto._id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );

      setContarProductos(contarProductos + producto.cantidad);
      setPrecioTotal(precioTotal + producto.precio * producto.cantidad);
      return setProductosPedidos([...productos]);
    }
    setPrecioTotal(precioTotal + producto.precio * producto.cantidad);
    setContarProductos(contarProductos + producto.cantidad);
    setProductosPedidos([...productosPedidos, producto]);
  };

  return (
    <Col md="4" className="my-5">
      <Card className="item">
        <figure>
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombreProducto}
            height={350}
          />
        </figure>
        <Card.Body className="text-center">
          <Card.Title className="display-6">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text>
            {producto.descripcion}
            <span className="badge bg-danger ms-2">${producto.precio}</span>
          </Card.Text>
          <Button variant="danger" onClick={agregarProducto}>
            Añadir al menú
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProducto;
