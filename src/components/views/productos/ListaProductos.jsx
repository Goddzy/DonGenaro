import React from "react";

const ListaProductos = ({ mostrarLista, setMostrarLista }) => {
  return (
    <>
      {mostrarLista && (
        <div
          className="bg-light rounded shadow"
          style={{
            position: "fixed",
            top: "135px",
            right: "5px",
            zIndex: "1000",
          }}
        >
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li style={{ padding: "5px 10px" }}>Producto genérico</li>
            <li style={{ padding: "5px 10px" }}>Producto genérico</li>
            <li style={{ padding: "5px 10px" }}>Producto genérico</li>
            <li style={{ padding: "5px 10px" }}>Producto genérico</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ListaProductos;
