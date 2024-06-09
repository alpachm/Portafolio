import React, { useState } from "react";
import "./styles/conocimiento.css";

const Conocimiento = () => {
  const [isBox, setIsBox] = useState(true);

  return (
    <div className="conocimiento">
      <div className="content-conocimiento grilla hiddenRight">
        <h3 className="sub-title">Conocimiento</h3>
        <div className="box-conocimiento">
          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-html5"></i>
            <h4>HTML</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-css3"></i>
            <h4>CSS</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-javascript"></i>
            <h4>JavaScript</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-typescript"></i>
            <h4>TypeScript</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-react"></i>
            <h4>React js</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bx-mobile-alt"></i>
            <h4>React Native</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-github"></i>
            <h4>GitHub</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-redux"></i>
            <h4>Redux</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-nodejs"></i>
            <h4>Node js</h4>
          </div>

          <div className={`box ${isBox && "show-box"}`}>
            <i className="bx bxl-postgresql"></i>
            <h4>PostgreSQL</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocimiento;
