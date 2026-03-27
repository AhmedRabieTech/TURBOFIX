import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import LanguageSwitcher from './ui/LanguageSwitcher';
// Removed DesignSystem.css import - now linked in index.html

const Navbar = () => {
  const { lang } = useLanguage();

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg py-2 px-md-5 border-bottom border-secondary border-opacity-10 ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      <div className="container-fluid px-lg-4">
        {/* Brand Logo - TurboFix with Wrench Icon */}
        <Link className="navbar-brand fw-bold fs-3 text-uppercase d-flex align-items-center gap-3" to="/">
          <div className="bg-primary-gradient p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm brand-icon-box flex-shrink-0">
             <i className="fa-solid fa-screwdriver-wrench text-white fs-4"></i>
          </div>
          <span className="text-white tracking-tighter d-none d-sm-inline site-brand-name">Turbo<span className="text-primary-orange">Fix</span></span>
        </Link>

        {/* Toggler for Mobile */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Centered Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center gap-1 fw-bold small text-uppercase tracking-widest nav-links-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/">{lang === 'EN' ? 'Home' : 'الرئيسية'}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/services">{lang === 'EN' ? 'Services' : 'الخدمات'}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/about">{lang === 'EN' ? 'About' : 'عن المركز'}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/contact">{lang === 'EN' ? 'Contact' : 'اتصل بنا'}</NavLink>
            </li>
          </ul>

          {/* Right-side Actions */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 navbar-actions">
            
            {/* Professional Language Switcher Component */}
            <LanguageSwitcher />

            {/* Login Link */}
            <Link to="/login" className="nav-link text-white-50 small fw-bold text-uppercase tracking-wider px-2 d-none d-xl-block hover-brand flex-shrink-0">
               {lang === 'EN' ? 'Login' : 'دخول'}
            </Link>

            {/* Register/Account */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="d-none d-md-block">
               <Link to="/register" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold small text-uppercase flex-shrink-0 border-opacity-25 hover-brand">
                  {lang === 'EN' ? 'Join Elite' : 'انضم إلينا'}
               </Link>
            </motion.div>

            {/* Book Now ICON Button */}
            <motion.div 
               whileHover={{ scale: 1.1, rotate: 15 }} 
               whileTap={{ scale: 0.9 }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
            >
               <Link to="/booking" className="btn-icon-premium d-flex align-items-center justify-content-center shadow-lg" title={lang === 'EN' ? 'Book Now' : 'احجز الآن'}>
                  <i className="fa-solid fa-calendar-plus fs-5"></i>
               </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-primary-gradient { background: linear-gradient(135deg, #ff6b1a 0%, #ff8c42 100%); }
        .text-primary-orange { color: #ff6b1a; }
        .brand-icon-box { width: 44px; height: 44px; transition: all 0.5s ease; }
        .navbar-brand:hover .brand-icon-box { transform: rotate(15deg) scale(1.1); box-shadow: 0 0 20px rgba(255,107,26,0.35); }
        .site-brand-name { font-family: 'Outfit', sans-serif; letter-spacing: -1px; }

        .nav-link { color: rgba(255,255,255,0.6) !important; position: relative; transition: all 0.3s ease; }
        .nav-link:hover { color: #fff !important; }
        .nav-link.active { color: #ff6b1a !important; }
        .nav-link.active::after {
            content: ''; position: absolute; bottom: 0; left: 15%; width: 70%; height: 2px; background: #ff6b1a; border-radius: 2px;
        }

        .btn-icon-premium {
            width: 45px; height: 45px;
            background: linear-gradient(135deg, #ff6b1a 0%, #ff8c42 100%);
            border-radius: 50%;
            color: white !important;
            border: 2px solid rgba(255,255,255,0.1);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .btn-icon-premium:hover { box-shadow: 0 0 20px rgba(255,107,26,0.6); transform: translateY(-2px); }

        .hover-brand:hover { color: #ff6b1a !important; }

        @media (max-width: 991px) {
            .nav-links-center { padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.05); }
            .navbar-actions { justify-content: center; padding-bottom: 20px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
