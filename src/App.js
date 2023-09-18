import Menu from "./components/common/Menu";
import Inicio from "./components/views/Inicio";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import AboutUs from "./components/views/AboutUs";
import Error404 from "./components/views/Error404";
import Administrador from "./components/views/Administrador";
import PedirProductos from "./components/views/PedirProductos";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
        <Route exact path="/administrar" element={<Administrador/>}></Route>
        <Route exact path="/pedirProductos" element={<PedirProductos/>}></Route>
        <Route exact path="/*" element={<Error404/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
