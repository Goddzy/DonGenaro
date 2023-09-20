import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { borrarUsuarioAPI, obtenerUsuariosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemCuentas = ({ usuarios, setUsuarios }) => {
  const borrarUsuario = () => {
    Swal.fire({
      title: "Borrar cuenta",
      text: "Desea borrar la cuenta de " + usuarios.nombreUsuario + "?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuarioAPI().then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire("Listo!", "cuenta eliminada", "success");
            obtenerUsuariosAPI().then((respuesta) => {
              setUsuarios(respuesta);
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
      <td>{usuarios.id}</td>
      <td>{usuarios.nombreUsuario}</td>
      <td>{usuarios.emailUsuario}</td>
      <td>{usuarios.perfil}</td>
      <td className="text-center">
        <Button onClick={borrarUsuario} variant="danger text-light">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default ItemCuentas;
