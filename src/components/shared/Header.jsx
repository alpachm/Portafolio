import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './styles/header.css'

const Header = () => {

    const [isMenuMobile, setIsMenuMobile] = useState(false)

    const showMenuMobile = () => {
        setIsMenuMobile(true)
    }

    const hideMeneMobile = () => {
        setIsMenuMobile(false)
    }

    return (
        <header className='header'>
            <div className="content-header">
                <Link to='/' > {'<Alex />'} </Link>

                <nav className={`${isMenuMobile && 'show-nav'}`}>
                    <ul>
                        <a href="#"><li>Inicio</li></a>
                        <Link to="aboutMe" spy={true} smooth={true} offset={50} duration={500} onClick={() => setIsMenuMobile(false)} ><li>Acerca de mí</li></Link>
                        <Link to="works" spy={true} smooth={true} offset={50} duration={500} onClick={() => setIsMenuMobile(false)} ><li>Proyectos</li></Link>
                        <Link to="cv" spy={true} smooth={true} offset={50} duration={500} onClick={() => setIsMenuMobile(false)} ><li>CV</li></Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={() => setIsMenuMobile(false)} ><li>Contacto</li></Link>

                        <i onClick={hideMeneMobile} className='bx bxs-x-square'></i>
                    </ul>

                </nav>
                <i onClick={showMenuMobile} className='bx bx-menu'></i>

            </div>


        </header>
    )
}

export default Header