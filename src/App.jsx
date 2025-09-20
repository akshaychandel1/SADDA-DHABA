import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import './App.css'
import ComingSoon from './components/ComingSoon'
import HomePage from './components/HomePage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
     </>
  )
}

export default App
