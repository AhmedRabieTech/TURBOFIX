import React, { useState, useEffect, useRef } from 'react';
import services from '../Data/AllData';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import Typed from 'typed.js';

const Services = () => {
  const { lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(services.map(s => s.category))];
  const categoriesAr = ['الكل', ...new Set(services.map(s => s.categoryAr))];

  const filteredServices = services.filter(s => {
    const currentCat = lang === 'EN' ? category : (category === 'الكل' ? 'All' : category);
    const catMatch = (currentCat === 'All' || s.category === currentCat || s.categoryAr === category);
    const nameMatch = (lang === 'EN' ? s.name : s.nameAr).toLowerCase().includes(search.toLowerCase());
    return catMatch && nameMatch;
  });

  const typedTargetRef = useRef(null);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const strings = lang === 'EN' 
      ? ['Our <span class="text-gradient-orange">Elite</span> Services'] 
      : ['خدماتنا <span class="text-gradient-orange">المتميزة</span>'];

    const typed = new Typed(typedTargetRef.current, {
      strings: strings,
      typeSpeed: 55,
      showCursor: false,
      contentType: 'html',
      startDelay: 400,
      onComplete: () => {
        setTimeout(() => setShowSubtitle(true), 150);
      }
    });

    return () => {
      typed.destroy();
    };
  }, [lang]);

  const t = {
    EN: {
      badge: "Premium Solutions",
      sub: "We deliver unparalleled maintenance and absolute precision. Select the specialized package your vehicle deserves.",
      searchPl: "Search for a service...",
      bookBtn: "Book This Service",
      all: "All"
    },
    AR: {
      badge: "حلول متميزة",
      sub: "نحن نقدم صيانة لا تضاهى ودقة مطلقة. اختر الباقة المتخصصة التي تستحقها سيارتك.",
      searchPl: "ابحث عن خدمة...",
      bookBtn: "حجز هذه الخدمة",
      all: "الكل"
    }
  }[lang];

  return (
    <div className={`services-page-container overflow-hidden py-5 bg-dark text-light min-vh-100 position-relative ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      <div className="ambient-glow position-absolute top-0 start-50 translate-middle-x"></div>

      <div className="container py-lg-5 px-lg-4 position-relative z-1">
        <div className="row mb-5 text-center pb-4">
          <div className="col-lg-12 fade-in-up">
            <span className="badge badge-brand bg-opacity-10 px-3 py-2 rounded-pill mb-3 fw-bold tracking-widest text-uppercase">
               {t.badge}
            </span>
            <h1 className="display-4 fw-black mb-3 text-white title-glow">
                 <span ref={typedTargetRef}></span>
            </h1>
            <p className={`lead text-white-50 mb-5 mx-auto fw-medium premium-subtitle ${showSubtitle ? 'subtitle-visible' : 'subtitle-hidden'}`} style={{ maxWidth: '700px' }}>
              {t.sub}
            </p>
            
            <div className="row justify-content-center g-3 mb-5 px-lg-5">
              <div className="col-lg-5">
                <div className="premium-input-wrapper rounded-pill p-1">
                   <div className="input-group align-items-center">
                    <span className={`ps-4 text-orange-brand ${lang === 'AR' ? 'pe-4 ps-0' : ''}`}><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input 
                        type="text" 
                        className="form-control bg-transparent border-0 text-white shadow-none py-3 px-3 fs-6 input-focus-none" 
                        placeholder={t.searchPl}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                   </div>
                </div>
              </div>
              <div className="col-lg-3">
                 <div className="premium-input-wrapper rounded-pill p-1">
                    <select 
                        className="form-select bg-transparent border-0 text-white shadow-none py-3 px-4 fw-bold pointer input-focus-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {(lang === 'EN' ? categories : categoriesAr).map((cat, i) => (
                           <option key={i} value={cat} className="bg-dark">{cat}</option>
                        ))}
                    </select>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 animate-card" style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}>
              <div className="card h-100 border-0 premium-card rounded-4 overflow-hidden position-relative d-flex flex-column text-start">
                <div className="position-relative overflow-hidden card-img-wrapper" style={{ height: "260px" }}>
                  <img src={service.image} className="card-img-top h-100 w-100 object-fit-cover premium-img" alt={service.name} />
                  <div className={`position-absolute top-0 p-3 z-3 w-100 d-flex justify-content-between ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                     <span className="glass-badge rounded-pill px-3 py-1 fw-bold tracking-wider">{lang === 'EN' ? service.category : service.categoryAr}</span>
                     <span className="price-badge bg-orange-brand text-white rounded-pill px-3 py-1 fw-bold border border-light border-opacity-10 shadow-orange">
                        ${service.price}
                     </span>
                  </div>
                  <div className="blend-gradient position-absolute bottom-0 start-0 w-100 z-2" style={{ height: '100px' }}></div>
                </div>

                <div className="card-body p-4 pt-0 z-3 d-flex flex-column flex-grow-1 card-inner-bg">
                  <h4 className="card-title fw-bold text-white mb-3 transform-title service-name-glow">
                    {lang === 'EN' ? service.name : service.nameAr}
                  </h4>
                  <p className="card-text text-white-50 fs-6 lh-base mb-4 flex-grow-1">
                    {lang === 'EN' ? service.description : service.descriptionAr}
                  </p>
                  <div className="mt-auto pt-3 custom-border-top position-relative">
                    <Link to="/booking" className="btn btn-luxury w-100 rounded-pill py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2 overflow-hidden position-relative">
                       <span className="btn-text position-relative z-2">{t.bookBtn}</span>
                       <i className={`fa-solid ${lang === 'AR' ? 'fa-arrow-left' : 'fa-arrow-right'} fs-6 position-relative z-2`}></i>
                       <div className="btn-shimmer"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-card-dark { background-color: #121416; }
        .text-orange-brand { color: #ff6b1a; }
        .bg-orange-brand { background-color: #ff6b1a; }
        .text-gradient-orange { background: linear-gradient(135deg, #ff6b1a 0%, #ffc042 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .badge-brand { color: #ff6b1a; border: 1px solid rgba(255, 107, 26, 0.3); background-color: rgba(255, 107, 26, 0.1); }
        .shadow-orange { box-shadow: 0 4px 15px rgba(255, 107, 26, 0.4); }
        .dir-rtl { direction: rtl; text-align: right; }
        .premium-subtitle { transition: opacity 1.2s ease, transform 1.2s ease; }
        .subtitle-hidden { opacity: 0; transform: translateY(15px); }
        .subtitle-visible { opacity: 1; transform: translateY(0); }
        .ambient-glow { width: 600px; height: 400px; background: radial-gradient(circle, rgba(255, 107, 26, 0.08) 0%, transparent 70%); filter: blur(60px); position: absolute; top: -100px; left: 50%; transform: translateX(-50%); }
        .premium-input-wrapper { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); }
        .premium-card { background: #111315; border: 1px solid rgba(255, 255, 255, 0.03) !important; transition: all 0.5s ease; }
        .premium-card:hover { transform: translateY(-10px) scale(1.02); border-color: #ff6b1a !important; box-shadow: 0 15px 40px rgba(255, 107, 26, 0.3) !important; }
        .premium-card:hover .service-name-glow {
          color: #ff6b1a !important;
          text-shadow: 0 0 10px #ff6b1a, 0 0 20px #ff6b1a, 0 0 30px #ff6b1a;
        }
        .service-name-glow {
          transition: all 0.3s ease-in-out;
        }
        .service-name-glow:hover {
          color: #ff6b1a !important;
          text-shadow: 0 0 15px #ff6b1a, 0 0 25px #ff6b1a;
          cursor: pointer;
        }
        .card-inner-bg { background: linear-gradient(to bottom, transparent 0%, #111315 20%); }
        .premium-img { transition: transform 0.8s ease; filter: brightness(0.85); }
        .premium-card:hover .premium-img { transform: scale(1.1); filter: brightness(1); }
        .glass-badge { background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(12px); color: #fff; border: 1px solid rgba(255,255,255,0.05); }
        .btn-luxury { background: #1a1d1f; border: 1px solid #ff6b1a; color: #ff6b1a; transition: all 0.3s ease; }
        .btn-luxury:hover { background: #ff6b1a; color: #fff; box-shadow: 0 10px 20px rgba(255,107,26,0.4); }
        .fw-black { font-weight: 900; }
      `}</style>
    </div>
  );
};

export default Services;
