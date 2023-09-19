import React from "react";
import { Col, Card, Button } from "react-bootstrap";


const ItemProducto = ({ producto }) => {
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
          <Card.Title className="display-6">{producto.nombreProducto}</Card.Title>
          <Card.Text>{producto.descripcion}<span className="badge bg-danger ms-2">${producto.precio}</span></Card.Text>
          <Button variant="danger">Añadir al menú</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemProducto;
