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
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Inter:wght@400;700&display=swap');
          
          :root {
            --brand-orange: #ff6b1a;
            --brand-gradient: linear-gradient(135deg, #ff6b1a 0%, #ff8c42 100%);
          }

          body {
            font-family: 'Outfit', 'Inter', -apple-system, sans-serif;
            background-color: #0d0f10;
            color: #ffffff;
            overflow-x: hidden;
            width: 100%;
          }

          .app-main-wrapper {
            background-color: #0d0f10 !important;
          }

          .text-gradient-orange {
            background: var(--brand-gradient);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Global Responsive Scaling */
          @media (max-width: 991.98px) {
            .display-4 { font-size: 2.8rem !important; }
            .py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
            .my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
          }

          @media (max-width: 767.98px) {
            .display-4 { font-size: 2.2rem !important; }
            .lead { font-size: 1.1rem !important; }
            .section-title { margin-bottom: 2rem !important; }
            .navbar-brand { font-size: 1.5rem !important; }
          }

          @media (max-width: 575.98px) {
            .display-4 { font-size: 1.8rem !important; }
            .container { padding-left: 20px; padding-right: 20px; }
            .btn-lg { padding: 12px 25px; font-size: 1rem; }
          }

          .transition-all {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Scrollbar Styling */
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #0d0f10; }
          ::-webkit-scrollbar-thumb { background: #2a2d30; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #ff6b1a; }
        `}</style>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
