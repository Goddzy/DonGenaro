import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ItemProductosPedidos = ({producto,setProductosPedidos,productosPedidos,contarProductos,setContarProductos,precioTotal,setPrecioTotal,}) => {
  const reducirProducto = (producto) => {
    const productosActualizados = productosPedidos.map((item) =>
      item.id === producto.id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    );

    setContarProductos(contarProductos - 1);
    setPrecioTotal(precioTotal - producto.precio);

    if (producto.cantidad === 1) {
      setProductosPedidos(
        productosActualizados.filter((item) => item.id !== producto.id)
      );
    } else {
      setProductosPedidos(productosActualizados);
    }
  };

  return (
    <li
      style={{
        padding: "5px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="fs-6 mx-3">{producto.cantidad}</span>
      <span className="fs-6 mx-3">{producto.nombreProducto}</span>
      <span className="fs-6 mx-3">${producto.precio} c/u</span>
      <span
        className="fs-6 mx-3"
        onClick={() => {
          reducirProducto(producto);
        }}
      >
        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTimes} />
      </span>
    </li>
  );
};

export default ItemProductosPedidos;

