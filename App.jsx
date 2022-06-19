import React from "react"
import Intro from "./components/intro/intro/intro"
import About from "./components/about/about"
import ProjectList from "./components/projectsList/projectsList"
import Contact from "./components/contact/contact"
import Navbar from "./components/navbar/navbar"


function App() {


  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
    
  )
}

export default App
