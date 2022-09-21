import React from "react";
import { Link } from "react-scroll";

export default function Historia() {
  return (
    <article id="historia" className="
    flex
    flex-col
    items-center
    
    md:flex-row
    md:w-[90%]
    md:m-auto
    lg:justify-center
    ">

      <section className="mt-8 mb-8 md:mr-2">
        <figure className="
        w-80
        h-52
        m-4

       
        md:h-64
       lg:w-[400px]
       lg:h-[450px]
       2xl:w-[500px]
       2xl:h-[450px]
        ">
          <img className="
          w-full
          h-full
          object-cover
          rounded
          " src="./imagenes/historia/fondohistoria.jpeg" alt="Imagen de computadora ilustrativa" loading="lazy" />
        </figure>
      </section>

      <section className="
      md:w-[50%]
      md:flex
      md:items-center
      md:justify-center
      ">
        <article className="
        flex
        flex-col
        w-full
        justify-center
        items-center
        md:items-start
        
        ">
          <h2 className="text-[1.6em] text-[#ffff]
          font-bold inline-block 
          relative
          mb-2
          before:content-['HISTÓRIA']
          before:text-[2em]
          before:absolute
          before:flex
          before:justify-center
          before:items-center
          before:top-[-85%]
          before:opacity-[.3]
          before:left-0
          before:text-center
          before:w-full
          titulos

          md:before:w-auto
          md:text-[2em]
          
          lg:text-[2.5em]
          2xl:text-[3.5em]

          2xl:before:top-[-95%]
          ">João Lucas</h2>
          <p className="
          text-[#ea580c] 
          text-[.9em]
          md:text-[1.1em]
          ">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ..</p>
          <p className="text-[1em] text-[#ffff] w-4/5 text-center md:w-full md:text-left lg:text-[1.2em]">
          Olá! me chamo João lucas, sou um intusiasta das tecnologias e amante da programação.
          Tenho 20 anos,atualmente morando em Várzea Grande e meu  hob preferido  é curtira naturaza da fazenda e tocar algumas musicas.   </p>
          <Link className="mt-8 bg-[#ea580c] 2xl:w-80 p-2 rounded text-center
          cursor-pointer
          transition-transform
          duration-600
          hover:shadow-[0_.5em_.5em_-.4em_#ffff]
          hover:translate-y-[-.25em]
          hover:transition-transform
          hover:duration-600
          text-[#ffff] 2xl:p-1.5
          block
          "smooth={true} to="CONTATO">
            contato
          </Link>
        </article>
      </section>
      
    </article>
  );
}
