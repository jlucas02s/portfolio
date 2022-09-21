import React from 'react';
//import { JSONProyectos } from './JSONProyectos';
export default function ListaProyectos({arrayProyectos}){
    return(
        <article className=' overflow-auto'>
            <section className='
            place-items-center
            grid
            grid-cols-[repeat(auto-fill,minmax(55%,1fr))]

            md:grid-cols-[repeat(auto-fill,minmax(34%,1fr))]
            lg:w-[90%]
            lg:m-auto
            xl:grid-cols-[repeat(auto-fill,minmax(30%,1fr))]
            
            '>
                {
                arrayProyectos.length === 0 ? <p className='text-center text-[1.5em] font-bold text-white'>No se encontraron resultados...</p>:
                arrayProyectos.map((proyecto, i)=>(
                    <figure key={i} className="
                    w-80
                    h-60
                    
                    mb-8
                    relative
                    overflow-hidden
                    contenedorProyectos
                    hover:shadow-[10px_10px_3px_0_#0000]
                    cursor-pointer
                    odd:hover:shadow-black
                    odd:hover:rotate-1
                    odd:hover:transition-transform
                    odd:hover:duration-500
                    even:hover:shadow-black
                    even:hover:rotate-[-1deg]
                    even:hover:transition-transform
                    even:hover:duration-500
                    rounded-md
                    lg:w-[90%]
                    lg:h-80
                    ">
                        <div className='w-full absolute  bottom-[2%] flex justify-center items-center'>
                            <button className='text-center bg-[#ea580c] rounded-full p-1 animate-bounce'>&darr;</button>
                        </div>
                        <img loading='lazy'  className="w-full h-full object-cover rounded-md" src={proyecto.imagenProyecto} alt={proyecto.nombreProyecto} />
                        <figcaption className="proyectosImagenes
                         rounded-md
                         
                         bg-[#ea580c] 
                         absolute top-0 left-0 
                         w-full h-full 
                         flex flex-col justify-around items-center 
                         z-10 
                         translate-y-[-100%] transition-transform duration-1000
                
                         ">
                            <h4 className='text-[#ffff] text-[1.5em] font-bold'>{proyecto.nombreProyecto}</h4>
                            <p className='w-[95%]  '>{proyecto.descripcionProyecto}</p>
                            <a className={`p-2 bg-[#121212] text-white rounded-md justify-self-end mb-1 2xl:hover:scale-110
                        2xl:hover:transition-transform 2xl:hover:shadow-white 2xl:hover:shadow-md ${proyecto.webProyecto === null ? '2xl:cursor-not-allowed' : '2xl:cursor-pointer'}`} href={proyecto.webProyecto} target="_blank" rel='noreferrer'>{proyecto.webProyecto === null ? "No sitio web" : "WebSite"}</a>
                        </figcaption>
                    </figure>
                ))}
            </section>
        </article>
    );
}