import React from "react";
import "./styles/aboutUs.css";
import imgAbouteMe from "../../assets/aboutMe/img-aboutMe.png";
import CV from "../../assets/file/alexpachecocv.pdf";

const AboutMe = () => {
    return (
        <div className="about-me sec" id="aboutMe">
            <div className="content-aboutMe hiddenLeft">
                <div className="text-aboutMe grilla">
                    <h3 className="sub-title">Esta es mi historia...</h3>

                    <span>
                        Mi objetivo es poder dar vida a cualquier proyecto que tengas en mente en el
                        ámbito digital
                    </span>

                    <p>
                        Soy un desarrollardor web Front-End apasionado con lo que hace día a día.
                        Dedicado, disciplinado y comprometido con todo lo que hago.
                    </p>

                    <p>
                        Me esfuerzo para dar lo mejor de mí en cada proyecto que participo y de esta
                        manera cumplir con todo lo que se exige.
                    </p>

                    <p>Estoy dispuesto a aprender nuevos lenguajes de programación.</p>
                </div>

                <div className="container-img-aboutMe">
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/alexjpachecom/" target={"_blank"}>
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a href="https://github.com/alpachm?tab=repositories" target={"_blank"}>
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>
                    <a className="cv" download href={CV}>
                        CV <i className="bx bx-download"></i>
                    </a>
                    <img id="cv" className="img-aboutMe-mobile" src={imgAbouteMe} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
