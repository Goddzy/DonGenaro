import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { borrarProductoAPI, obtenerProductosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProductosAdmin = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Borrar producto?",
      text: "No podrá revertir esta tarea",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //borrar el producto
        borrarProductoAPI(producto.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire("Listo!", "su producto ha sido borrado", "success");
            //actualizar la tabla
            obtenerProductosAPI().then((respuesta) => {
              setProductos(respuesta);
            });
          } else {
            Swal.fire("Oh!", "Ocurrió un error, inténtenlo más tarde", "error");
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.estado}</td>
      <td>${producto.precio}</td>
      <td>{producto.descripcion}</td>
      <td>{producto.categoria}</td>
      <td>{producto.imagen}</td>
      <td>
        <Button variant="danger text-light" onClick={borrarProducto}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>
        <Link className="btn btn-warning my-1">
          <FontAwesomeIcon icon={faEdit}/>
        </Link>
      </td>
    </tr>
  );
};

export default ItemProductosAdmin;
