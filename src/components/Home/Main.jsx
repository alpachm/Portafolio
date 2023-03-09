import React from 'react'
import './styles/main.css'
import imgMain from '../../assets/main/img-main.png'

const Main = () => {
    return (
        <div className='main'>
            <div className="content-main grilla">
                <div className="img-container ">
                    <img src={imgMain} alt="" />
                </div>
                <div className="text-main">
                    <h2>Hola, mi nombre es Alex</h2>
                    <h4>Soy desarrollador web Front-End</h4>
                    <button>Mira mi trabajo</button>
                </div>
                <div className="div-right"></div>
            </div>
        </div>
    )
}

export default Main