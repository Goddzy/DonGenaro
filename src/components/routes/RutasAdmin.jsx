import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/productos/CrearProducto";
import EditarProducto from "../views/productos/EditarProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador />}></Route>
        <Route
          exact
          path="//crearProducto"
          element={<CrearProducto />}
        ></Route>
        <Route
          exact
          path="//editarProducto/:id"
          element={<EditarProducto />}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
