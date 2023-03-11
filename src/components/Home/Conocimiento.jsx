import React, { useState } from 'react'
import './styles/conocimiento.css'

const Conocimiento = () => {

  const [isBox, setIsBox] = useState(true)

  // window.addEventListener("scroll", () => {

  //   if (window.scrollY > 850 && window.scrollY < 1200) {
  //     setIsBox(true)
  //   } else {
  //     setIsBox(false)
  //   }
  // })

  return (
    <div className='conocimiento'>
      <div className="content-conocimiento grilla hiddenRight">
        <h3 className='sub-title'>Conocimiento</h3>
        <div className="box-conocimiento">

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-html5' ></i>
            <h4>HTML</h4>
          </div>

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-css3'></i>
            <h4>CSS</h4>
          </div>

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-javascript' ></i>
            <h4>JavasCript</h4>
          </div>

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-react' ></i>
            <h4>REACT JS</h4>
          </div>

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-github' ></i>
            <h4>GitHub</h4>
          </div>

          <div className={`box ${isBox && 'show-box'}`}>
            <i className='bx bxl-redux' ></i>
            <h4>Redux</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Conocimiento