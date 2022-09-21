import React from "react";

export default function Presentacion() {
  return (
    <article id="presentacion"
      className="
        bg-[#040404]
        h-[65vh]
        relative
        w-full
        my-8
        lg:h-[90vh]
        xl:h-[80vh]
        "
    >
      <article className="
      flex 
      h-full 
      items-center
      
      
      md:p-2
      lg:justify-around
      2xl:justify-center">
        <section className="
          w-full
          relative
          flex
          items-center
          flex-col
          
          lg:w-[50%]
          2xl:w-[60%]
        ">
          <p className="text-[#ea580c] text-[.9em] lg:text-[1.2em] w-4/5">Olá! Sou o João.</p>
          <h1 className="text-[#ffff] text-[1.5em] font-bold text-center w-4/5
          md:text-[2em]
          md:text-left
          
          lg:text-[2.5em]

          2xl:text-[5em]
          ">SEJA BEM VINDO AO MEU PORTIFOLIO WEB!</h1>
          <p className="text-[#ffff] w-4/5 m-5 text-[.9em] lg:text-[1.2em] 2xl:text-[1.3em]">
Seja bem vindo ao meu portiforio, deixei aqui algumas informações sobre min e algumas dicas, projetos e artigos sobre o mundo da técnologia, espero que goste e fique a vontade para olhar e entrar em contato.
          </p>
          <p className="text-[#12d1eb] text-[.9em] lg:text-[1.2em] w-4/5">"A tecnologia nos ajuda mas a melhor <em className="decoration-orange-500 underline">'FERRAMENTA'</em>, continua sendo nossa mente"</p>
          <div className="w-60 bg-[#ea580c] rounded p-2 m-3
          pulse
          transition-colors
          duration-500
          hover:bg-[#12d1eb]
          hover:transition-colors
          hover:duration-500
          
          ">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/" target={"_blank"} rel="noreferrer nofollow" className="text-[#ffff] text-center w-full 2xl:p-1.5
              transition-colors
              font-bold
              duration-500
              hover:text-black
              hover:transition-colors
              hover:duration-500 
              block
              ">MAIS INFO</a>
          </div>
        </section>
        <section className="">
          <figure className="hidden 
          md:block 
          md:h-[400px] 
          md:w-[400px]
          2xl:w-[550px]
          2xk:h-[550px]
          ">
            <img className="h-full w-full object-cover md:rounded-[50%]" src="./imagenes/perfil/cartoon.gif" alt="Animacion de saludo en el portfolio" />
          </figure>
        </section>
        </article>
      
    </article>
  );
}
