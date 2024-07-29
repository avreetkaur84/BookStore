import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.page"
import CoursePage from "./Pages/Course.page"
import ContactPage from "./Pages/Contact.page"
import AboutPage from "./Pages/About.page"

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<CoursePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  )
}

export default App