import React from 'react'
import './styles/contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="content-contact ">
                <span>¿Te interesa mi trabajos?</span>
                <h3 className='sub-title'>Contáctame</h3>

                <form>
                    <input type="text" placeholder='Ingresa tu nombre' required />
                    <input type="text" placeholder='Motivo' required />
                    <textarea name="comentario" cols="30" rows="5" placeholder='Escríbe algo...' ></textarea>
                    <button>Envíar</button>
                </form>
            </div>

        </div>
    )
}

export default Contact