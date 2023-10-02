import React from "react";
import ItemProductosPedidos from "./ItemProductosPedidos";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearPedidoAPI } from "../../helpers/queries";

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
  const navegacion = useNavigate();

  const handlePageClick = ({ selected }) => {
    if (
      selected >= 0 &&
      selected <= Math.ceil(productosPedidos.length / productosPorPagina) - 1
    ) {
      setCurrentPage(selected);
    }
  };

  const confirmarCompra = () => {
    const usuarioLogeado = JSON.parse(localStorage.getItem("usuarioCreadoKey"));
    if (!usuarioLogeado) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que no has iniciado sesión",
        footer: '<a href="/iniciarSesion">Iniciar sesión</a>',
      });
    } else {
      Swal.fire({
        title: "Confirmar Compra",
        html: `
          <form id="formularioCompra">
            <div class="mb-3">
              <label for="direccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="direccion" required>
            </div>
            <div class="mb-3">
              <label for="metodoPago" class="form-label">Método de Pago</label>
              <select class="form-select" id="metodoPago" required>
                <option value="">Seleccionar opción...</option>
                <option value="tarjeta">Tarjeta de Crédito</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia Bancaria</option>
              </select>
            </div>
          </form>
        `,
        confirmButtonText: "Comprar",
        preConfirm: () => {
          const formulario = document.getElementById("formularioCompra");
          const direccion = formulario.querySelector("#direccion").value;
          const metodoPago = formulario.querySelector("#metodoPago").value;

          if (!direccion || !metodoPago) {
            Swal.showValidationMessage("Por favor, completa todos los campos.");
            return false;
          }

          const fechaActual = new Date();
          const dia = String(fechaActual.getDate()).padStart(2, "0");
          const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
          const año = fechaActual.getFullYear();
          const horas = String(fechaActual.getHours()).padStart(2, "0");
          const minutos = String(fechaActual.getMinutes()).padStart(2, "0");

          const fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}`;

          // Crear el objeto pedido
          const pedido = {
            nombrePedido: usuarioLogeado.nombreUsuario,
            fechaPedido: fechaFormateada,
            productoPedido: productosPedidos,
          };

          // Realizar la petición a json-server
          crearPedidoAPI(pedido)
            .then((respuesta) => {
              if (respuesta.ok) {
                setProductosPedidos([]);
                setPrecioTotal(0);
                setContarProductos(0);
                Swal.fire({
                  icon: "success",
                  title: "Pedido confirmado",
                  text: "¡Gracias por tu compra!",
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Hubo un problema al confirmar el pedido. Por favor, intenta nuevamente.",
                });
              }
            })
            .catch((error) => {
              console.error(error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al confirmar el pedido. Por favor, intenta nuevamente.",
              });
            });
        },
      });
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
          {productosPedidos.length > 0 ? (
            <>
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
                <button className="btnClearAll" onClick={confirmarCompra}>
                  Aceptar compra
                </button>
              </div>
              <div className="pagination mt-3">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                  className={`pagination__link ${
                    currentPage === 0 && "disabled"
                  }`}
                />
                <span className="mx-2"></span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                  className={`pagination__link ${
                    currentPage ===
                      Math.ceil(productosPedidos.length / productosPorPagina) -
                        1 && "disabled"
                  }`}
                />
              </div>
            </>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </div>
      )}
    </>
  );
};

export default ListaProductos;
