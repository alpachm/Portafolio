import React from 'react'
import { Link } from 'react-router-dom'

const OtherHeader = (isMove, setIsMove) => {

    const handleClick = () => {
        if (isMove) {
            setIsMove(false)
        } else {
            setIsMove(true)
        }
    }

    return (
        <header className='header'>
            <div className="content-header">
                <Link onClick={handleClick} to='/' > {'<Alex />'} </Link>
            </div>
        </header>
    )
}

export default OtherHeader