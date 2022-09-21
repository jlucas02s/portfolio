import React, { useState } from "react";
import { Link } from "react-scroll";
export default function Menu() {
    const [abrirMenu, setAbrirMenu] = useState(false);

  return (
    <section
      className="
        w-2/4
        flex
        justify-end
        p-2
        xl:w-[70%]
        "
    >
      <div className={`
      menuBoton ${abrirMenu && 'abrirMenu'}
      z-10
      relative
      flex
      justify-center
      items-center
      w-7
      h-6
      overflow-hidden
      cursor-pointer
      lg:hidden
      `} onClick={()=>setAbrirMenu(!abrirMenu)}>
        <div className="
        menuBoton-btn
        flex
        flex-column
        justify-center
        items-center
       w-full
       h-0.5
       bg-[#ea580c]
       after:content-['']
        before:content-['']
       after:absolute 
       before:absolute
       after:w-5
       before:w-5
       after:h-0.5
       before:h-0.5
       after:bg-[#ea580c] 
       before:bg-[#ea580c]
       before:transition-all
       after:transition-all
       after:translate-y-[10px]
       before:translate-y-[-10px]
       
       lg:hidden
        "></div>
      </div>
      <section className={`
      md:w-screen
      md:h-screen
      md:blur-sm
      md:fixed
      md:top-0
      md:left-0
      md:bg-[#0f0f0fa3]
      hidden

      2xl:hidden
      ${abrirMenu && 'md:block'}
      `}>
      </section>
        <nav
          className={
              `fixed
              w-screen
              h-screen
              flex
              items-center
              justify-center
              bg-neutral-900
              top-0
              right-0
              translate-x-[200%]
              transition-all
              duration-500
              
              md:w-[50%]
              lg:w-[100%]
              lg:h-auto
              lg:bg-transparent
              lg:shadow-none
              lg:translate-x-0
              lg:relative
              xl:w-[50%]
              ${abrirMenu === true ? 
                `translate-x-[0%] 
                transition-transform
                shadow-[-20px_0_5px_0_rgba(0,0,0,0.5)]` : ""}
              `}
              
        >
          <ul
            className="
                  flex
                  flex-col

                  lg:flex-row
                  lg:justify-around
                  lg:w-full
                  "
          >
            <li className="m-2.5 text-center lg:mr-8">
              <Link to="presentacion" smooth={true} duration={600} activeClass={'shadow-inner shadow-black transition-transform md:before:scale-x-100 md:after:scale-x-100 lg:before:scale-x-100 2xl:before:scale-x-100'} spy={true} className="cursor-pointer text-neutral-50
              text-[2em]
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-full
              after:bg-[#ea580c]
              after:scale-x-0
              after:z-[-1]
              after:origin-right
              after:transition-transform
              after:duration-1000

              
              after:hover:origin-left

              hover:after:scale-x-100
              
              before:content-['']
              before:absolute
              before:left-0
              before:bottom-0
              before:w-full
              before:h-[3px]
              before:bg-black
              before:scale-x-0
              
              before:origin-left
              before:transition-transform
              before:duration-1000

           
              before:hover:origin-rigth

              hover:before:scale-x-100
              font-bold
              uppercase
              relative
              p-1
              inline-block
              hover:scale-[1.1]
              lg:normal-case
              lg:text-[1em]
              2xl:text-[1.5em]
              
              ">Inicio</Link>
            </li>
            <li className="m-2.5 text-center lg:mr-8">
              <Link to="historia" smooth={true} duration={600} activeClass={"shadow-inner shadow-black transition-transform md:before:scale-x-100 md:after:scale-x-100 lg:before:scale-x-100 2xl:before:scale-x-100"} spy={true} className="cursor-pointer text-neutral-50
              text-[2em]
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-full
              after:bg-[#ea580c]
              after:scale-x-0
              after:z-[-1]
              after:origin-right
              after:transition-transform
              after:duration-1000

              
              after:hover:origin-left

              hover:after:scale-x-100
              
              before:content-['']
              before:absolute
              before:left-0
              before:bottom-0
              before:w-full
              before:h-[3px]
              before:bg-black
              before:scale-x-0
              
              before:origin-left
              before:transition-transform
              before:duration-1000

           
              before:hover:origin-rigth

              hover:before:scale-x-100


              font-bold
              uppercase
              relative
              p-1
              inline-block
              hover:scale-[1.1]
              lg:normal-case
              lg:text-[1em]
              2xl:text-[1.5em]
              
              ">História</Link>
            </li>
            <li className="m-2.5 text-center lg:mr-8">
              <Link to="proyectos" smooth={true} duration={600} activeClass={'shadow-inner shadow-black transition-transform md:before:scale-x-100 md:after:scale-x-100 lg:before:scale-x-100 2xl:before:scale-x-100'} spy={true} className="cursor-pointer text-neutral-50
              text-[2em]
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-full
              after:bg-[#ea580c]
              after:scale-x-0
              after:z-[-1]
              after:origin-right
              after:transition-transform
              after:duration-1000

              
              after:hover:origin-left

              hover:after:scale-x-100
              
              before:content-['']
              before:absolute
              before:left-0
              before:bottom-0
              before:w-full
              before:h-[3px]
              before:bg-black
              before:scale-x-0
              
              before:origin-left
              before:transition-transform
              before:duration-1000

           
              before:hover:origin-rigth

              hover:before:scale-x-100
              font-bold
              uppercase
              relative
              p-1
              inline-block
              hover:scale-[1.1]
              lg:normal-case
              lg:text-[1em]
              2xl:text-[1.5em]
              
              ">Projetos</Link>
            </li>
            <li className="m-2.5 text-center lg:mr-8">
              <Link to="servicios" smooth={true} duration={600} activeClass={'shadow-inner shadow-black transition-transform md:before:scale-x-100 md:after:scale-x-100 lg:before:scale-x-100 2xl:before:scale-x-100'} spy={true} className="cursor-pointer text-neutral-50
              text-[2em]
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-full
              after:bg-[#ea580c]
              after:scale-x-0
              after:z-[-1]
              after:origin-right
              after:transition-transform
              after:duration-1000

              
              after:hover:origin-left

              hover:after:scale-x-100
              
              before:content-['']
              before:absolute
              before:left-0
              before:bottom-0
              before:w-full
              before:h-[3px]
              before:bg-black
              before:scale-x-0
              
              before:origin-left
              before:transition-transform
              before:duration-1000

           
              before:hover:origin-rigth

              hover:before:scale-x-100
              font-bold
              uppercase
              relative
              p-1
              inline-block
              hover:scale-[1.1]
              lg:normal-case
              lg:text-[1em]
              2xl:text-[1.5em]
              
              ">Sobre</Link>
            </li>
            <li className="m-2.5 text-center lg:mr-8">
              <Link to="CONTATO" smooth={true}  duration={1000} activeClass={'shadow-inner shadow-black transition-transform md:before:scale-x-100 md:after:scale-x-100 lg:before:scale-x-100 2xl:before:scale-x-100'} spy={true} className="cursor-pointer text-neutral-50
              text-[2em]
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:w-full
              after:h-full
              after:bg-[#ea580c]
              after:scale-x-0
              after:z-[-1]
              after:origin-right
              after:transition-transform
              after:duration-1000

              
              after:hover:origin-left

              hover:after:scale-x-100
              
              before:content-['']
              before:absolute
              before:left-0
              before:bottom-0
              before:w-full
              before:h-[3px]
              before:bg-black
              before:scale-x-0
              
              before:origin-left
              before:transition-transform
              before:duration-1000

           
              before:hover:origin-rigth

              hover:before:scale-x-100
              font-bold
              uppercase
              relative
              p-1
              inline-block
              hover:scale-[1.1]
              lg:normal-case
              lg:text-[1em]
              2xl:text-[1.5em]
              
              ">CONTATO</Link>
            </li>
          </ul>
        </nav>
     
    </section>
  );
}
