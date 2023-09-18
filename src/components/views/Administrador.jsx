import React from "react";
import { Container } from "react-bootstrap";
import {Table, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <Container className="my-5 mainSection">
      <h1 className="text-center display-3">Administración</h1>
      <hr />
      <h2 className="mt-5 display-4">Pedidos solicitados</h2>
      <Table striped bordered hover responsive size="sm" className="colorRojo mb-5">
        <thead>
          <tr>
            <th>Código</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Productos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as87d6qw8uyte128637</td>
            <td>Renato Trevisiol Montiel</td>
            <td>14/09/2023 16:37</td>
            <td>Pizza Napolitana</td>
            <td><Button>Borrar</Button></td>
          </tr>
        </tbody>
      </Table>
      <h2 className="mt-5 display-4">Productos del menu</h2>
      <Table striped bordered hover responsive size="sm" className="mb-5">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Detalle</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as87d6qw8uyte128637</td>
            <td>Pizza rica</td>
            <td>ND/D</td>
            <td>$1500</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
            <td>REFRESCOS</td>
            <td>https://asikhdasjkldhsjkahdasjkhdsajkd.com</td>
            <td><Button>Borrar</Button><Link>editar</Link></td>
          </tr>
        </tbody>
      </Table>
      <h2 className="mt-5 display-4">Usuarios</h2>
      <Table striped bordered hover responsive size="sm" className="mb-5">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Perfil</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as87d6qw8uyte128637</td>
            <td>Renato Trevisiol Montiel</td>
            <th>renatotrevisiolmontiel@gmail.com</th>
            <th>administrador/usuario</th>
            <th><Button>Borrar</Button></th>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;