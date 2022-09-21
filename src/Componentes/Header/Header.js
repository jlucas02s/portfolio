import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

export default function Header(){
    return(
        <header className='fixed top-0 left-0 w-full z-40 bg-[#1C2833]'>
            <article className='
            flex
            justify-around
            items-center

            lg:w-full
            '>
                <Logo></Logo>
                <Menu></Menu>
            </article>
        </header>
    );
}