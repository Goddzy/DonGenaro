import React from "react";
import ItemProductosPedidos from "./ItemProductosPedidos";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ListaProductos = ({
  mostrarLista,
  productosPedidos,
  setProductosPedidos,
  precioTotal,
  setPrecioTotal,
  contarProductos,
  setContarProductos,
}) => {
  //paginacion
  const [currentPage, setCurrentPage] = useState(0);
  const productosPorPagina = 10;
  const startIndex = currentPage * productosPorPagina;
  const endIndex = startIndex + productosPorPagina;
  const productosEnPagina = productosPedidos.slice(startIndex, endIndex);

  const handlePageClick = ({ selected }) => {
    if (
      selected >= 0 &&
      selected <= Math.ceil(productosPedidos.length / productosPorPagina) - 1
    ) {
      setCurrentPage(selected);
    }
  };
  return (
    <>
      {mostrarLista && (
        <div
          className="bg-light rounded shadow p-3"
          style={{
            position: "fixed",
            top: "110px",
            right: "5px",
            zIndex: "1000",
          }}
        >
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {productosEnPagina.map((producto) => (
              <ItemProductosPedidos
                producto={producto}
                key={producto.id}
                productosPedidos={productosPedidos}
                setProductosPedidos={setProductosPedidos}
                contarProductos={contarProductos}
                setContarProductos={setContarProductos}
                precioTotal={precioTotal}
                setPrecioTotal={setPrecioTotal}
              />
            ))}
          </ul>
          <hr className="mx-1" />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="m-0">Total: ${precioTotal}</h5>
            <button className="btnClearAll">Aceptar compra</button>
          </div>
          <div className="pagination mt-3">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{cursor: "pointer"}}
              onClick={() => handlePageClick({ selected: currentPage - 1 })}
              className={`pagination__link ${currentPage === 0 && "disabled"}`}
            />
            <span className="mx-2"></span>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{cursor: "pointer"}}
              onClick={() => handlePageClick({ selected: currentPage + 1 })}
              className={`pagination__link ${
                currentPage ===
                  Math.ceil(productosPedidos.length / productosPorPagina) - 1 &&
                "disabled"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ListaProductos;
