import React from 'react'
import './styles/homePage.css'
import AboutMe from '../components/Home/AboutMe'
import Conocimiento from '../components/Home/Conocimiento'
import Main from '../components/Home/Main'
import Skills from '../components/Home/Skills'
import Works from '../components/Home/Works'
import Contact from '../components/shared/Contact'
import Header from '../components/shared/Header'
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
import TopArrow from '../components/shared/TopArrow'

const HomePage = ({ setFullLoading }) => {
    return (
        <div className='home-page'>
            <Header />
            <Main />
            <AboutMe />
            <Conocimiento />
            <Skills />
            <Works />
            <Contact />
            <Footer />
            <NavBar />
            <TopArrow />

        </div>
    )
}

export default HomePage