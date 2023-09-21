import React from "react";
import ItemProductosPedidos from "./ItemProductosPedidos";

const ListaProductos = ({ mostrarLista, productosPedidos }) => {
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
            {
              productosPedidos.map((producto)=><ItemProductosPedidos producto={producto} key={producto.id}></ItemProductosPedidos>)
            }
          </ul>
        </div>
      )}
    </>
  );
};

export default ListaProductos;
