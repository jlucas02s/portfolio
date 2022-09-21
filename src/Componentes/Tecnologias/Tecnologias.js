import React from 'react';
import { JSONTecnologias } from './JSONTecnologias';
export default function Tecnologias(){
    return(
        <article id='tecnologias' className='bg-[#121212] mt-8
        mb-8'>
            <section className='flex justify-center overflow-auto w-full place-items-center p-1 md:justify-around'>
                {JSONTecnologias.map((tecnologia,i)=>(
                    <figure key={i} className="w-8 h-8 md:w-20 md:h-20 m-1">
                        <img loading='lazy' className='w-full h-full object-cover' src={tecnologia.imagen} alt={tecnologia.nombre} title={tecnologia.nombre} />
                    </figure>
                ))}
            </section>
        </article>
    );
}