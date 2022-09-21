import React, { useState } from "react";
import { JSONProyectos } from "./JSONProyectos";
import ListaProyectos from "./ListaProyectos";


export default function Proyectos() {
  const [proyectos, setProyectos] = useState(JSONProyectos);

  const handleChange = (e)=>{
    if(e.target.value !== ""){
      
    filtrar(e.target.value.trim().toLowerCase().toString());
    }else {setProyectos(JSONProyectos)}
    
  }

  const filtrar = (busqueda)=>{
    let resultado = proyectos.filter(proyecto => proyecto.tecnologias.includes(busqueda) ?  proyecto : null)
    setProyectos(resultado);
  }
  return (
    <article id="proyectos" className="mt-12 lg:mt-24">
      <section className="w-full">
        <h3 className="text-center 
        font-bold 
        text-[1.8em] 
        mb-5 
        text-[#ffff]
        relative
        before:content-['PORTFOLIO']
        before:absolute
        before:flex
        before:justify-center
        before:items-center
        before:w-full
        before:text-center
        before:top-[-80%]
        before:left-0
        before:opacity-[.3]
        titulos
        before:text-[2em]
       
        md:text-[2.5em]
        lg:text-[3em]
        2xl:text-[3.5em]
        ">MEUS PROJETOS</h3>
        <p className="text-[#ffff] 
        text-[.9em] 
        w-4/5 
        text-center 
        m-auto

        lg:w-[60%]
        md:text-[1.1em]
        lg:text-[1.2em]
        2xl:w-[40%]
        2xl:text-[1.3em]
        ">
         Alguns dos meus projetos academicos e pesquisas proprias
        </p>
      </section>
      <article className="mt-8 mb-8 w-full flex flex-col justify-center items-center">
          <p className="text-[#ea580c] 
          text-[1.2em] 
          mb-2 
          font-bold 

          md:text-[1.3em]
          lg:text-[2em]
          "
          
          >Oque procura?: {} </p>
          <input type="text" placeholder="..."
          className="
            outline-transparent
            text-[1.2em]
            p-2
            rounded
            min-w-[75%]
            lg:h-14
            m-1
            lg:min-w-[65%]
          "
          
          onChange={handleChange}
          />
      </article>

      <ListaProyectos arrayProyectos={proyectos}></ListaProyectos>
    </article>
  );
}
