import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/work.css'

const Work = ({ work }) => {

    const navigate = useNavigate()
    const [video, setVideo] = useState(work.videos.desktop)
    const [isInfoHover, setIsInfoHover] = useState(false)
    const [hideTap, setHideTap] = useState(false)

    useEffect(() => {
        if (isInfoHover) setHideTap(true)
    }, [isInfoHover])

    const handleClick = () => {
        navigate('/proyecto')
        localStorage.setItem('id', work.id)
    }

    const handleHover = () => {
        setIsInfoHover(true)
    }

    const handleNoHover = () => {
        setIsInfoHover(false)
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 2600) {
            setTimeout(() => {
                setHideTap(true)
            }, 6000);
        }
    })

    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleNoHover}
            className='work'>
            <button onClick={handleClick}>más info...</button>

            <div className={`info-vid ${isInfoHover && 'show-info-vid'}`}>
                <div className="content-info-vid">
                    <p>{work.resumen}</p>
                    <div className="icons">
                        {
                            work.icons.map(ico => (
                                <i key={ico} className={ico}></i>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`tap-div ${hideTap && 'hide-tap'}`}>
                <i className='tap bx bx-radio-circle-marked'></i>
                <span>click</span>
            </div>

            <video src={video} autoPlay muted loop></video>
        </div>
    )
}

export default Work