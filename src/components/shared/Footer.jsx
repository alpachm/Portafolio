import React from 'react'
import { Link } from 'react-router-dom'
import './styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="content-footer">
                <header>
                    <a href="https://www.linkedin.com/in/alexjpachecom/" target={'_blank'} ><i className='bx bxl-linkedin-square'></i></a>
                    <a href="https://github.com/alpachm?tab=repositories" target={'_blank'} > <i className='bx bxl-github' ></i></a>
                </header>
                <h1> {`<Alex />`} </h1>
                <span>Copyright © 2023 Alex Pacheco.</span>
            </div>
        </footer>
    )
}

export default Footer