const ItemProductosPedidos = ({ producto }) => {
  return (
    <li style={{ padding: "5px 10px" }}>
      <span>{producto.nombreProducto} ${producto.precio}</span>
    </li>
  );
};

export default ItemProductosPedidos;
