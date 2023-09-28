import React from "react";
import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuarioLogeado =
    JSON.parse(localStorage.getItem("usuarioCreadoKey")) || null;
  //el usuarioLogeado tiene algo?

  if (!usuarioLogeado || usuarioLogeado.perfil === "cliente") {
    return <Navigate to={"/"}></Navigate>;

  } else {
    return children;
  }
};

export default RutasProtegidas;
