import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/work.css'

const Work = ({ work }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/proyecto')
        localStorage.setItem('id', work.id)
    }

    const [video, setVideo] = useState(work.videos.desktop)

    return (
        <div className='work'>
            <button onClick={handleClick}>más info...</button>
            <video src={video} autoPlay muted preload loop></video>
        </div>
    )
}

export default Work