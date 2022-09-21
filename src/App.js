import Header from "./Componentes/Header/Header";
import Historia from "./Componentes/Historia/Historia";
import PiePagina from "./Componentes/PiePagina/PiePagina";
import Presentacion from "./Componentes/Presentacion/Presentacion";
import Proyectos from "./Componentes/Proyectos/Proyectos";
import Servicios from "./Componentes/Servicios/Servicios";
import Tecnologias from "./Componentes/Tecnologias/Tecnologias";

function App() {
  return (
    <>
      <Header></Header>
      <Presentacion></Presentacion>
      <Historia></Historia>
      <Tecnologias></Tecnologias>
      <Proyectos></Proyectos>
      <Servicios></Servicios>
      <PiePagina></PiePagina>
    </>
  );
}

export default App;
