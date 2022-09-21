import React from "react";
import Formulario from "./Formulario";

export default function PiePagina() {
  return (
    <footer id="CONTATO" className="mt-8 md:mt-12">
        
      <section  className="
      flex
      flex-col
      justify-center
      w-full
      max-h-max
      ">

            <article   className="mt-8">
            <p className="text-center 
            font-bold 
            text-[1.5em] 
            text-white
            relative
            before:content-['CONTATO']
            before:absolute
            before:top-[-80%]
            before:left-0
            before:text-[2em]
            before:flex
            before:justify-center
            before:items-center
            before:w-full
            before:opacity-[.3]
            titulos

            md:text-[2em]
            lg:text-[2.5em]
            2xl:text-[3.5em]
            ">CONTATO</p>
            <p className="text-[#ffff] text-center text-[.9em] mt-2 w-[70%] mx-auto md:text-[1.1em] lg:text-[1.3em] 2xl:w-[45%]"> Fico agradecido por dedicar seu tempo para analisar este Portfolio, caso queira tirar alguma duvida, deixarei meu contato e minhas redes sociais.</p>
            </article>

            <section  className="
            p-1
            lg:flex
            lg:w-[90%]
            lg:m-auto
            lg:justify-around
            ">
                <article className="flex flex-col justify-around mb-8 md:w-[90%] md:m-auto md:self-start lg:w-auto lg:m-0">
                    <section className="flex justify-center items-center mt-8 mb-2">
                        <figure className="
                        h-10
                        w-10
                        mr-2
                        ">
                        <img loading="lazy" className="w-10 h-full object-cover" src="./imagenes/contacto/mensajecontacto.webp" alt="Icono de mensaje, contactame." />
                        </figure>
                        <section className="w-full">
                            <p className="text-[1.1em] text-white lg:text-[1.2em]">E-mail</p>
                            <p className="text-[.8em] text-white lg:text-[1.2em]">Para Contato</p>
                            <a href="mailto:jlucas.spc02@gmail.com?subject=Muy buenas!&body=Me gustaria contactarme contigo." className="text-[.9em] text-[#ea580c] lg:text-[.9em]">Correio: jlucas.spc02@gmail.com</a>
                        </section>
                    </section>
                    <section className="flex justify-center items-center mt-8 mb-2">
                        <figure className="
                        w-10
                        h-10
                        mr-2
                        ">
                        <img loading="lazy" className="w-full h-full object-cover" src="./imagenes/contacto/ubicacion.png" alt="Icono de ubicacion de google, encuentrame." />
                        </figure>
                        <section className="w-full">
                            <p className="text-[1.1em] text-white lg:text-[1.2em]"> Meu Local</p>
                            <p className="text-[.8em] text-white lg:text-[1.2em]">Brasil, Mato Grosso.</p>
                            <a href="https://www.google.com/maps/place/Cuiab%C3%A1+-+MT/@-15.614363,-56.1818974,11z/data=!4m5!3m4!1s0x939da56670d84fc5:0x4e504e08900e510e!8m2!3d-15.5954142!4d-56.0925824" target={"_blank"} rel="noreferrer" className="text-[.9em] text-[#ea580c] lg:text-[1.2em]">Google maps</a>
                        </section>
                    </section>
                </article>
                <Formulario></Formulario>
            </section>

      </section>

        <article  className="bg-[#121212] mt-8 h-44 flex flex-col items-center justify-center ">
            <section className="flex  items-center h-[50%]">
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
               
                ">
                    <a href="https://www.instagram.com/joao_spc02/" target={"_blank"} rel="noreferrer">
                        <img loading="lazy" className="
                        hover:shadow-black hover:shadow-md
                        rounded
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/instagram.png" alt="red social, instagram" />
                    </a>
                </figure>
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
                
                
                ">
                    <a href="https://www.facebook.com/profile.php?id=100012622382661" target={"_blank"} rel="noreferrer" >
                        <img loading="lazy" className="  
                        hover:shadow-black hover:shadow-md
                        rounded
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/facebook.png" alt="red social, facebook" />
                    </a>
                    
                </figure>
                <figure className="
                w-8
                h-8
                m-4
                hover:scale-125
                hover:transition-transform
                
                ">
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/" target={"_blank"} rel="noreferrer">
                        <img loading="lazy" className="
                        rounded
                        hover:shadow-black hover:shadow-md
                        w-full
                        h-full
                        object-cover" src="./imagenes/redes/linkedin.png" alt="red social, linkedin" />
                    </a>
                </figure>
            </section>
            <p className="text-[1.5em] text-[white] font-bold h-[50%]">JOÃO LUCAS</p>
            <p className="text-[#12d1eb] text-[.9em] lg:text-[1.2em] w-full md:w-max text-center m-4">Agradeço sua visita ao meu portfolio wed, esperro que algumas informações aqui tenham te ajudado.</p>
            <p className="text-[#ea580c] text-[.8em] justify-self-end">2022 © WebsArg. All rights reserved.</p>
        </article>
    </footer>
  );
}
