import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';

const LanguageSwitcher = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`lang-switcher-btn d-flex align-items-center justify-content-center overflow-hidden transition-all ${lang === 'AR' ? 'flex-row-reverse' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={lang === 'EN' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <div className="btn-inner d-flex align-items-center justify-content-center gap-2 px-2 h-100">
        <motion.i 
          className="fa-solid fa-globe text-brand fs-5"
          animate={{ rotate: lang === 'EN' ? 0 : 360 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <span className="lang-text d-none d-md-inline fw-bold text-uppercase tracking-wider">
          {lang === 'EN' ? 'AR' : 'EN'}
        </span>
      </div>

      <style>{`
        .lang-switcher-btn {
          height: 38px;
          min-width: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          cursor: pointer;
          color: white;
          white-space: nowrap;
          position: relative;
          z-index: 10;
        }

        .lang-switcher-btn:hover {
          background: rgba(255, 107, 26, 0.08);
          border-color: rgba(255, 107, 26, 0.4);
          color: #ff6b1a;
        }

        .lang-text {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .lang-switcher-btn:hover .lang-text {
          color: #ff6b1a;
        }

        .text-brand {
          color: #ff6b1a;
        }

        /* Prevent Layout Shifting */
        .btn-inner {
          min-width: 36px;
        }
        
        @media (min-width: 768px) {
          .lang-switcher-btn {
            min-width: 80px;
          }
        }
      `}</style>
    </motion.button>
  );
};

export default LanguageSwitcher;
