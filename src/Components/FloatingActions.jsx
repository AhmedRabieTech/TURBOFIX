import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FloatingActions = () => {
    const { lang } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const tooltips = {
        EN: { top: "Back to Top", wa: "Chat with us" },
        AR: { top: "العودة للأعلى", wa: "تحدث معنا" }
    }[lang];

    return (
        <div className={`floating-actions-container ${lang === 'AR' ? 'dir-rtl' : ''}`}>
            
            {/* Back to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileHover={{ scale: 1.1, backgroundColor: '#ff6b1a' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fab-button back-to-top"
                        aria-label={tooltips.top}
                    >
                        <i className="fa-solid fa-arrow-up"></i>
                        <span className="fab-tooltip">{tooltips.top}</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp Contact Button - Updated with requested number */}
            <motion.a
                href="https://wa.me/201110895582"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 1 }}
                animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 10px 25px rgba(37, 211, 102, 0.3)",
                        "0 10px 35px rgba(37, 211, 102, 0.5)",
                        "0 10px 25px rgba(37, 211, 102, 0.3)"
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15 }}
                className="fab-button whatsapp-fab"
                aria-label={tooltips.wa}
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="fab-tooltip">{tooltips.wa}</span>
            </motion.a>

            <style>{`
                .floating-actions-container { position: fixed; bottom: 30px; right: 30px; z-index: 9999; display: flex; flex-direction: column; gap: 15px; align-items: center; }
                .dir-rtl.floating-actions-container { right: auto; left: 30px; }
                .fab-button { width: 55px; height: 55px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white; cursor: pointer; box-shadow: 0 10px 25px rgba(0,0,0,0.3); position: relative; transition: background-color 0.3s ease; text-decoration: none; }
                .back-to-top { background-color: #1a1d1f; border: 1px solid rgba(255,255,255,0.1); }
                .whatsapp-fab { background-color: #25D366; }
                .fab-tooltip { position: absolute; background: #111; color: white; padding: 6px 14px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; white-space: nowrap; opacity: 0; pointer-events: none; transition: all 0.3s ease; right: 70px; bottom: 50%; transform: translateY(50%); box-shadow: 0 5px 15px rgba(0,0,0,0.5); border: 1px solid rgba(255,107,0,0.3); }
                .dir-rtl .fab-tooltip { right: auto; left: 70px; }
                .fab-button:hover .fab-tooltip { opacity: 1; transform: translateY(50%) translateX(-5px); }
                .dir-rtl .fab-button:hover .fab-tooltip { transform: translateY(50%) translateX(5px); }
                @media (max-width: 768px) {
                    .floating-actions-container { bottom: 20px; right: 20px; }
                    .dir-rtl.floating-actions-container { left: 20px; }
                    .fab-button { width: 48px; height: 48px; font-size: 1.25rem; }
                    .fab-tooltip { display: none; }
                }
            `}</style>
        </div>
    );
};

export default FloatingActions;
