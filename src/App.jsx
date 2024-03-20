import React from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import About from './Components/About/About'
import Hero from  './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import Projects from './Components/Projects/Projects'
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects/>
      
    </>
  )
}

export default App