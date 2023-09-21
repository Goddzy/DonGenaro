const ItemProductosPedidos = ({ producto }) => {
  return (
    <li>
      <span>{producto.nombre}</span>
      <span>{producto.precio}</span>
    </li>
  );
};

export default ItemProductosPedidos;
