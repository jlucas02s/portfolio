import React from "react";
import TarjetaServicio from "./TarjetaServicio";

export default function Servicios() {
  return (
    <article  id="servicios"  className="mt-12 bg-[#121212] lg:mt-24">
      <section
        className="
            flex
            flex-col
            justify-center
            xl:w-[90%]
            xl:m-auto
            "
      >
        <article className="m-8 lg:m-16">
          <h5
            className='text-center font-bold 
                    text-[#ffff]
                    text-[1.5em]
                    relative
                    before:content-["TÉCNOLOGIAS"]
                    before:absolute
                    before:top-[-80%]
                    before:left-0
                    before:flex
                    before:justify-center
                    before:items-center
                    before:w-full
                    before:text-[2em]
                    titulos
                    before:opacity-[.3]
                    before:tracking-wide
                    
                    md:text-[2em]
                    lg:text-[2.5em]
                    2xl:text-[3.5em]
                    '
          > 
            SOBRE MIN
          </h5>
          <p className="text-center text-[#ffff] mt-4 text-[.9] md:text-[1.1em] w-[70%] m-auto lg:text-[1.2em] 2xl:w-[40%]">
          Alguns pontos sobre minha formação, conhecimentos basicos e experiência
          </p>
        </article>

        <article
          className="
                grid
                grid-cols-[repeat(1,fr)]
                place-items-center

                md:grid-cols-[repeat(auto-fill,minmax(34%,1fr))]
                lg:w-[90%]
                lg:m-auto
                xl:w-[100%]
                xl:grid-cols-[repeat(auto-fill,minmax(33%,1fr))]
                2xl:w-[80%]
                "
        >
          <TarjetaServicio
            imagen="./imagenes/servicios/desarrolloweb.png"
            titulo="Conhecimento"
            descripcion=" Sou DEV JR ainda aprendendo as linguagens de JavaScript, HTML, CSS, Java e consultas SQL mas com um grande entusiasmo para sempr evoluir e sugar o maximo de conteudo"
          />
      
          <TarjetaServicio
            imagen="./imagenes/servicios/matenimientoweb.png"
            titulo="Formação"
            descripcion="Eu sou estudante de Analise e desenvolvimento de sistemas, tecnólogo em Tecnologia da Informação(Integrado ao ensino médio), certificado pela empresa “CertiProf” em “scrum Foundation”, também sou certificado pela empresa “Grupo ALFA” em “Gestão empresarial”."
          />
          <TarjetaServicio
            imagen="./imagenes/servicios/seo.png"
            titulo="Experiencia"
            descripcion="No mercado de trabalho pessou experiencia como analista de suporte com sistemas de gestão e vendas, como DEV sómente experiencia com projetos de facudade"
          />

          
          
        </article>
      </section>
    </article>
  );
}
