import React from 'react';

export default function TarjetaServicio({imagen, titulo, descripcion}){
    return(
        <section className='
        w-[350px]
        h-[400px]
        overflow-auto
        mb-8
        rounded-2xl
        bg-[#273746]
        '>
            <figure className='
            w-full
            h-[50%]

            '>
                <img loading='lazy' src={imagen} alt={titulo} className="w-full h-full object-cover rounded" />
            </figure>
            <article className='
            h-[50%]
            p-2
            
            '>
                <h6 className='
                font-bold
                text-[1.3em]
                text-white

                md:text-[1.2em]
                lg:text-[1.5em]
                '>{titulo}</h6>
                <p className='text-[#99A3A4] text-[1.1em] lg:text-[1.2em]'>{descripcion}</p>
            </article>
        </section>
    );
}