import React, { useState } from 'react'
import './styles/topArrow.css'

const TopArrow = () => {

    const [isArrow, setIsArrow] = useState(false)

    window.addEventListener('scroll', () => {

        window.scrollY > 400 ? setIsArrow(true) : setIsArrow(false)

    })

    return (
        <a className={`top-arrow ${isArrow && 'show-div'}`} href="#"><i className={`bx bxs-up-arrow ${isArrow && 'show-arrow'}`}></i></a>
    )
}

export default TopArrow