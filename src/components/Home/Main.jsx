import React from 'react'
import './styles/main.css'
import imgMain from '../../assets/main/img-main.png'
import { Link } from 'react-scroll'

const Main = () => {

    return (
        <div className='main sec' id='main'>
            <div className="content-main grilla hiddenRight">
                <div className="img-container ">
                    <img src={imgMain} alt="" />
                </div>
                <div className="text-main">
                    <h2>Hola, mi nombre es Alex</h2>
                    <h4>Soy desarrollador web Front-End</h4>
                    <Link to="works" spy={true} smooth={true} offset={50} duration={500}><button>Mira mi trabajo</button></Link>
                </div>
                <div className="div-right"></div>
            </div>
        </div>
    )
}

export default Main