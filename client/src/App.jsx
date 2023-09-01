import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
     <Header/>
     <Main/>
     <Aboutme/>
     <Skills/>
     <Projects/>
     <Project/>
     <Education/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
