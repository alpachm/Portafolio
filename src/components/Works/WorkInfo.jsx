import React, { useEffect, useState } from 'react'
import Header from '../shared/Header'
import works from '../../utils/works'
import './styles/workInfo.css'
import Footer from '../shared/Footer'
import TopArrow from '../shared/TopArrow'
import NavBar from '../shared/NavBar'
import OtherHeader from '../shared/OtherHeader'

const WorkInfo = ({ setFullLoading }) => {

  const [info, setInfo] = useState()

  useEffect(() => {
    setInfo(works.filter(work => work.id === +localStorage.getItem('id')))
    setFullLoading(true)
  }, [])

  window.addEventListener('load', function () {
    setFullLoading(false)
  })

  return (
    <div className='work-info'>
      <OtherHeader />

      <header>
        {
          info?.map(vid => (
            <video key={vid.id} src={vid.videos.desktop} autoPlay muted preload loop></video>
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

      <TopArrow />
      <Footer />

    </div>
  )
}

export default WorkInfo