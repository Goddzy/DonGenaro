const PRODUCTOS = process.env.REACT_APP_API_PRODUCTOS;

//petición GET
const obtenerProductosAPI = async () => {
  try {
    const productos = await fetch(PRODUCTOS);
    const listaProductos = await productos.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

//petición GET pero de un solo producto
const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(PRODUCTOS + "/" + id);
    const producto = {
      datos: await respuesta.json(),
      status: respuesta.status,
    };
    return producto;
  } catch (error) {
    console.log(error);
  }
};

//petición DELETE
const borrarProductoAPI = async (id) => {
  try {
    const producto = await fetch(PRODUCTOS + "/" + id, { method: "DELETE" });
    return producto;
  } catch (error) {
    console.log(error);
  }
};

//petición POST
const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(PRODUCTOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//petición PUT

const editarProductoAPI = async (id, producto) => {
  const respuesta = await fetch(PRODUCTOS + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return respuesta;
};
