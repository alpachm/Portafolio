import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import works from '../../utils/works'
import './styles/workInfo.css'
import Footer from '../shared/Footer'
import TopArrow from '../shared/TopArrow'
import NavBar from '../shared/NavBar'
import OtherHeader from '../shared/OtherHeader'
import { useNavigate } from 'react-router-dom'

const WorkInfo = ({ fullLoading, setFullLoading }) => {

  const [info, setInfo] = useState()
  const [isBtnBack, setIsBtnBack] = useState(false)
  const navigate = useNavigate()

  console.log(info)

  const btn = document.querySelector('.btn-back')

  window.addEventListener('scroll', () => {
    window.scrollY > 900 ? setIsBtnBack(true) : setIsBtnBack(false)
  })

  const handleClick = () => {
    if (btn.classList.contains('show-btn-back')) navigate('/')
  }

  useEffect(() => {
    setInfo(works.filter(work => work.id === +localStorage.getItem('id')))
    setFullLoading(true)
  }, [])

  setTimeout(() => {
    if (fullLoading) setFullLoading(false)
  }, 2000);

  return (
    <div className='work-info'>
      <OtherHeader />

      <header>
        {
          info?.map(vid => (
            <div className="video">
              <video key={vid.id} src={vid.videos.desktop} autoPlay muted preload loop></video>
              <i className='bx bxs-chevrons-down'></i>
            </div>
          ))
        }
      </header>

      <div className="content-info ">

        <div className="text-content">

          {
            info?.map(inf => (
              <div key={inf.id} className="text-info">

                <div className="box ">
                  <div className='grilla'>
                    <h3>Tipo de proyecto: <span>{inf.proyecto}</span></h3>
                    <h3>Nombre: <span>{inf.nombre}</span></h3>
                    <h3>Tecnologias: <span>{inf.tecnologias.join(' / ')}</span></h3>
                    <h3>Librerias: <span>{inf.librerias.join(' / ')}</span></h3>
                    <h3>Consumo de API: <span>{inf.api}</span></h3>
                    <h3><a href={inf.url} target={'_blank'}>Visita el sitio aquí</a></h3>
                    <div className="icons">
                      {
                        inf.icons.map(ico => (
                          <i key={ico} className={ico}></i>
                        ))
                      }
                    </div>
                  </div>
                </div>

                <div className="bottom-box">
                  {
                    info?.map(descrip => (
                      <p key={descrip.id}>{descrip.descripcion}</p>
                    ))
                  }
                </div>

              </div>
            ))
          }

          <div className="version-mobile">
            <header>
              <span className='sub-title'>Versión Mobile</span>
            </header>
            {
              info?.map(vid => (
                <video key={vid.id} src={vid.videos.mobile} autoPlay muted preload loop></video>
              ))
            }
          </div>

        </div>

      </div>

      <div onClick={handleClick} className={`btn-back ${isBtnBack && 'show-btn-back'}`} >
        <i className='bx bxs-left-arrow'></i>
        <span>Volver</span>
      </div>

      <Footer />

    </div>
  )
}

export default WorkInfo