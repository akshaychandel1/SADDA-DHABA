import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from "react"
import './App.css'
import ComingSoon from './components/ComingSoon'
import HomePage from './components/HomePage'
import OurStory from './components/OurStory';
import WeddingEvent from "./components/WeddingEvent";
import FAQPage from './components/FAQPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/our-story" element={<OurStory />} />
         <Route path="/wedding-event" element={<WeddingEvent />} />
         <Route path="/faqs" element={<FAQPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
     </>
  )
}

export default App
