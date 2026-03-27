import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import Footer from './Components/Footer';
import FloatingActions from './Components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-main-wrapper min-vh-100 d-flex flex-column bg-white">
          <Navbar />
          <SubNavbar />
          
          <main className="main-viewport flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          <Footer />
          <FloatingActions />
          
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
            body {
              font-family: 'Outfit', 'Inter', -apple-system, sans-serif;
              background-color: #ffffff;
              color: #1a1a1a;
            }
            .text-gradient {
              background: linear-gradient(135deg, #0061ff 0%, #ff8c42 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .transition-all {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
