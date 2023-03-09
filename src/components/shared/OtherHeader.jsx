import React from 'react'
import { Link } from 'react-router-dom'

const OtherHeader = () => {
    return (
        <header className='header'>
            <div className="content-header">
                <Link to='/' > {'<Alex />'} </Link>
            </div>
        </header>
    )
}

export default OtherHeader