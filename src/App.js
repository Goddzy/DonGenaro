import Menu from "./components/common/Menu";
import Inicio from "./components/views/Inicio";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import AboutUs from "./components/views/AboutUs";
import Error404 from "./components/views/Error404";
import Administrador from "./components/views/Administrador";
import PedirProductos from "./components/views/PedirProductos";
import Registrar from "./components/views/cuentas/Registrar";
import IniciarSesion from "./components/views/cuentas/IniciarSesion";
import CrearProducto from "./components/views/productos/CrearProducto";
import EditarProducto from "./components/views/productos/EditarProducto"
import { useState } from "react";

function App() {
  const usuario = JSON.parse(localStorage.getItem('usuarioCreadoKey')) || {};
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
        <Route exact path="/administrar" element={<Administrador/>}></Route>
        <Route exact path="/pedirProductos" element={<PedirProductos/>}></Route>
        <Route exact path="/registrar" element={<Registrar setUsuarioLogeado={setUsuarioLogeado}/>}></Route>
        <Route exact path="/iniciarSesion" element={<IniciarSesion setUsuarioLogeado={setUsuarioLogeado} usuarioLogeado={usuarioLogeado}/>}></Route>
        <Route exact path="/administrar/crearProducto" element={<CrearProducto/>}></Route>
        <Route exact path="/administrar/editarProducto/:id" element={<EditarProducto/>}></Route>
        <Route exact path="/*" element={<Error404/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
