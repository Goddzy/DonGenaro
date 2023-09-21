import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { borrarPedidoAPI, obtenerPedidosAPI } from "../../helpers/queries";

const ItemPedidos = ({ pedidos, setPedidos }) => {
  const finalizarPedido = () => {
    Swal.fire({
      title: "Finalizar pedido",
      text: "Si el pedido fue entregado exitosamente, presione aceptar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        borrarPedidoAPI(pedidos.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire("Listo!", "Pedido finalizado", "success");
            //actualizar la tabla
            obtenerPedidosAPI().then((respuesta) => {
              setPedidos(respuesta);
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
      <td>{pedidos.id}</td>
      <td>{pedidos.nombrePedido}</td>
      <td>{pedidos.fechaPedido}</td>
      <td>{pedidos.productoPedido}</td>
      <td className="text-center">
        <Button onClick={finalizarPedido} variant="success text-light">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedidos;
