import React from 'react'
import './styles/contact.css'

const Contact = () => {
    return (
        <div className='contact sec' id='contact'>
            <div className="content-contact hiddenLeft">
                <span>¿Te interesa mi trabajos?</span>
                <h3 className='sub-title'>Contáctame</h3>

                <form action="https://formsubmit.co/72a5635b58f235b648a40908c65ec750" method="POST">
                    <input type="text" name='Nombre' placeholder='Ingresa tu nombre' required />
                    <input type="email" name='Correo' placeholder='Correo electrónico' required />
                    <input type="text" name='Motivo' placeholder='Motivo' required />
                    <textarea name="comentario" cols="30" rows="5" placeholder='Escríbe algo...' ></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="https://alex-pacheco-portafolio.netlify.app/#/"></input>

                    <button>Envíar</button>
                </form>
            </div>

        </div>
    )
}

export default Contact