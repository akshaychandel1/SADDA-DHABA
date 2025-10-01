import { Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import ScrollToTop from "./ScrollToTop";
import ComingSoon from './components/ComingSoon';
import HomePage from './components/HomePage';
import OurStory from './components/OurStory';
import WeddingEvent from "./components/WeddingEvent";
import FAQPage from './components/FAQPage';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import { Menu } from './components/Menu';
import CorporateEvent from './components/CorporateEvent';
import GrabAndGo from './components/GrabAndGo';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <ScrollToTop />
      
      {/* Navbar with onContactClick prop */}
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* Routes for normal pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/wedding-event" element={<WeddingEvent />} />
        <Route path="/corporate-event" element={<CorporateEvent />} />
        <Route path="//grab-go" element={<GrabAndGo />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Removed /contact route because popup opens instead */}
      </Routes>

      {/* Contact Form Popup */}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </>
  )
}

export default App;

