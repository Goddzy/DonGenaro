import Menu from "./components/common/Menu";
import Inicio from "./components/views/Inicio";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import AboutUs from "./components/views/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
