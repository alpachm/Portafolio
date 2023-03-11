import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './styles/navBar.css'

const NavBar = () => {

    const [isNavBar, setIsNavBar] = useState(false)
    const [isNavBarDesktop, setIsNavBarDesktop] = useState(false)
    const [isHover, setIsHover] = useState(false)

    window.addEventListener('scroll', () => {

        if (window.scrollY > 400) {
            setIsNavBar(true)
            setIsNavBarDesktop(true)
        } else {
            setIsNavBar(false)
            setIsNavBarDesktop(false)
        }
    })

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`navbar-float ${isNavBar && 'show-navbar'} ${isNavBarDesktop && 'show-nav-desktop'} ${isHover && 'hov-float'}`}>
            <div className={`content-navBar ${isHover && 'hov-nav'}`}>

                <a href='#'>
                    <div className="box">
                        <i className='bx bx-home-alt-2'></i>
                        <span className={`${isHover && 'hov-span'}`}>Inicio</span>
                    </div>
                </a>

                <Link to="aboutMe" spy={true} smooth={true} offset={50} duration={500}>
                    <div className="box">
                        <i className='bx bx-user'></i>
                        <span className={`${isHover && 'hov-span'}`}>Sobre mí</span>
                    </div>
                </Link>

                <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
                    <div className="box">
                        <i className='bx bx-code-alt'></i>
                        <span className={`${isHover && 'hov-span'}`}>Proyectos</span>
                    </div>
                </Link>

                <Link to="cv" spy={true} smooth={true} offset={-300} duration={500}>
                    <div className="box">
                        <i className='bx bx-file'></i>
                        <span className={`${isHover && 'hov-span'}`}>CV</span>
                    </div>
                </Link>

                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <div className="box">
                        <i className='bx bx-chat' ></i>
                        <span className={`${isHover && 'hov-span'}`}>Contacto</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default NavBar