import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useState } from "react";
import {
  obtenerPedidosAPI,
  obtenerProductosAPI,
  obtenerUsuariosAPI,
} from "../helpers/queries";
import ItemProductosAdmin from "./productos/ItemProductosAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ItemPedidos from "./cuentas/ItemPedidos";
import ItemCuentas from "./cuentas/ItemCuentas";
import { Pagination } from "react-bootstrap";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 5;
  const totalPaginas = Math.ceil(productos.length / elementosPorPagina);

  useEffect(() => {
    obtenerProductosAPI().then((respuesta) => {
      setProductos(respuesta);
    });
    obtenerPedidosAPI().then((respuesta) => {
      setPedidos(respuesta);
    });
    obtenerUsuariosAPI().then((respuesta) => {
      setUsuarios(respuesta);
    });
  }, []);

  return (
    <Container className="my-5 mainSection">
      <h1 className="text-center display-3">Administración</h1>
      <hr />
      <h2 className="mt-5 display-4">Pedidos solicitados</h2>
      <Table striped bordered hover responsive size="sm" className="mb-2">
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
          {pedidos.map((pedidos) => {
            return (
              <ItemPedidos
                pedidos={pedidos}
                key={pedidos.id}
                setPedidos={setPedidos}
              ></ItemPedidos>
            );
          })}
        </tbody>
      </Table>
      <h2 className="mt-5 display-4">
        Productos del menu
        <Link
          to="/administrar/crearProducto"
          className="btn btn-warning text-light ms-4 mt-2"
        >
          <FontAwesomeIcon className="fs-4" icon={faPlus} />
        </Link>
      </h2>
      <Table striped bordered hover responsive size="sm" className="mb-2">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Detalle</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos
            .slice(
              (paginaActual - 1) * elementosPorPagina,
              paginaActual * elementosPorPagina
            )
            .map((producto) => {
              return (
                <ItemProductosAdmin
                  producto={producto}
                  key={producto.id}
                  setProductos={setProductos}
                ></ItemProductosAdmin>
              );
            })}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === paginaActual}
            onClick={() => setPaginaActual(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <h2 className="mt-5 display-4">Usuarios</h2>
      <Table striped bordered hover responsive size="sm" className="mb-2">
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
          {usuarios.map((usuarios) => {
            return (
              <ItemCuentas
                key={usuarios.id}
                usuarios={usuarios}
                setUsuarios={setUsuarios}
              ></ItemCuentas>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
