const PRODUCTOS = process.env.REACT_APP_API_PRODUCTOS;
const USUARIOS = process.env.REACT_APP_API_USUARIOS;
const PEDIDOS = process.env.REACT_APP_API_PEDIDOS;

//===============================PETICIONES PARA LOS PRODUCTOS===============================
//petición GET
export const obtenerProductosAPI = async () => {
  try {
    const productos = await fetch(PRODUCTOS);
    const listaProductos = await productos.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
//petición GET pero de un solo producto
export const obtenerProductoAPI = async (id) => {
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
export const borrarProductoAPI = async (id) => {
  try {
    const producto = await fetch(PRODUCTOS + "/" + id, { method: "DELETE" });
    return producto;
  } catch (error) {
    console.log(error);
  }
};
//petición POST
export const crearProductoAPI = async (producto) => {
  try {
    producto.cantidad = 1;
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
export const editarProductoAPI = async (id, producto) => {
  const respuesta = await fetch(PRODUCTOS + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  return respuesta;
};

//===============================PETICIONES PARA LOS USUARIOS===============================

//petición get de los usuarios
export const obtenerUsuariosAPI = async () => {
  try {
    const usuarios = await fetch(USUARIOS);
    const listaUsuarios = await usuarios.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

//petición get un solo usuario
export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(USUARIOS + "/" + id);
    const respuestaDefinitiva = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return respuestaDefinitiva;
  } catch (error) {
    console.log(error);
  }
};

//petición post para crear un usuario
export const crearUsuarioAPI = async (usuario) => {
  try {
    //añado la propiedad perfil al usuario
    usuario.perfil = "cliente";
    const respuesta = await fetch(USUARIOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//petición delete para borrar un usuario
export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(USUARIOS + "/" + id, { method: "DELETE" });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//logeo de una cuenta
export const login = async (usuario) => {
  try {
    const respuesta = await fetch(USUARIOS);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find((itemUsuario)=>{return itemUsuario.emailUsuario === usuario.emailUsuario
    })
    if (usuarioBuscado){
      if(usuarioBuscado.password===usuario.password){
        return usuarioBuscado
      }else{return}

    }else{
      return
    }
  } catch (error) {
    return
  }
};


//===============================PETICIONES PARA LOS PEDIDOS===============================

//petición get de los pedidos
export const obtenerPedidosAPI = async () => {
  try {
    const pedidos = await fetch(PEDIDOS);
    const listaPedidos = await pedidos.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

//petición get de un solo pedido
export const obtenerPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(PEDIDOS + "/" + id);
    const respuestaDefinitiva = await respuesta.json();
    return respuestaDefinitiva;
  } catch (error) {
    console.log(error);
  }
};

//petición post para crear un pedido
export const crearPedidoAPI = async (pedido) => {
  try {
    const respuesta = await fetch(PEDIDOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//petición delete para borrar un pedido
export const borrarPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(PEDIDOS + "/" + id, { method: "DELETE" });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
