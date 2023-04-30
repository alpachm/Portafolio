import React, { useEffect } from 'react';
import './styles/homePage.css';
import AboutMe from '../components/Home/AboutMe';
import Conocimiento from '../components/Home/Conocimiento';
import Main from '../components/Home/Main';
import Skills from '../components/Home/Skills';
import Works from '../components/Home/Works';
import Contact from '../components/shared/Contact';
import Header from '../components/shared/Header';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import TopArrow from '../components/shared/TopArrow';

const HomePage = ({ fullLoading }) => {
  useEffect(() => {
    const elementsRight = document.querySelectorAll('.hiddenRight');
    const elementLeft = document.querySelectorAll('.hiddenLeft');
    const skills = document.querySelectorAll('.skill-hijo');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!fullLoading) {
              if (entry.target.classList.value.includes('hiddenRight')) {
                entry.target.classList.add('show-hiddenRight');
              }
              if (entry.target.classList.value.includes('hiddenLeft')) {
                entry.target.classList.add('show-hiddenLeft');
              }
              if (entry.target.classList.value.includes('skill-hijo')) {
                entry.target.classList.add('show-skill-hijo');
              }
            }
          } else {
            if (entry.target.classList.value.includes('skill-hijo')) {
              entry.target.classList.remove('show-skill-hijo');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRight.forEach((element) => observer.observe(element));
    elementLeft.forEach((element) => observer.observe(element));
    skills.forEach((skill) => observer.observe(skill));
  }, [fullLoading]);

  return (
    <div className="home-page">
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
  );
};

export default HomePage;
