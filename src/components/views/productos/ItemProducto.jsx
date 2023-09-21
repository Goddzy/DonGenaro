import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

const ItemProducto = ({ producto, productosPedidos, setProductosPedidos }) => {
  const [pedidoRealizado, setPedidoRealizado] = useState(false);
  const agregarProducto = () => {
    setProductosPedidos([...productosPedidos, producto]);
    setPedidoRealizado(true);
    setTimeout(() => {
      setPedidoRealizado(false);
    }, 400);
  };

  return (
    <Col md="4" className="my-5">
      <Card className="item">
        <figure>
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombreProducto}
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
            Añadir al menú {pedidoRealizado && <span className="badge ms-2">✓</span>}
          </Button>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProducto;
