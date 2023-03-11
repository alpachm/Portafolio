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

                <a className='link' href='#'>
                    <div className="box">
                        <i className='bx bx-home-alt-2  icon-nav' id='main'></i>
                        <span className={` ${isHover && 'hov-span'}`}>Inicio</span>
                    </div>
                </a>

                <Link className='link' to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="box">
                        <i className='bx bx-user icon-nav' id='aboutMe'></i>
                        <span className={`${isHover && 'hov-span'}`}>Sobre mí</span>
                    </div>
                </Link>

                <Link className='link' to="works" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="box">
                        <i className='bx bx-code-alt icon-nav' id='works'></i>
                        <span className={`${isHover && 'hov-span'}`}>Proyectos</span>
                    </div>
                </Link>

                <Link className='link' to="aboutMe" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="box">
                        <i className='bx bx-file icon-nav' id='aboutMe'></i>
                        <span className={`${isHover && 'hov-span'}`}>CV</span>
                    </div>
                </Link>

                <Link className='link' to="contact" spy={true} smooth={true} offset={0} duration={500}>
                    <div className="box">
                        <i className='bx bx-chat icon-nav' id='contact'></i>
                        <span className={`${isHover && 'hov-span'}`}>Contacto</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default NavBar