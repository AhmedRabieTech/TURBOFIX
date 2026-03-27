import React from 'react';
import { useLanguage } from '../LanguageContext';

const SubNavbar = () => {
  const { lang } = useLanguage();

  const offers = {
    EN: [
      "50% Off on Full Synthetic Oil Change with Premium Checkups",
      "Free Battery Health Test with Any Brake Service Package",
      "Seasonal Special: Complete Tire Rotation and Wheel Balancing for $45",
      "Quality Maintenance Guaranteed - Professional Mechanics at Your Service",
      "Book Now and Save More! Offers Valid for a Limited Time Only"
    ],
    AR: [
      "خصم 50% على تغيير الزيت التخليقي الكامل مع فحوصات متميزة",
      "فحص مجاني لصحة البطارية مع أي باقة خدمة فرامل",
      "عرض الموسم: تدوير كامل للإطارات وموازنة العجلات بـ 45 دولار فقط",
      "جودة صيانة مضمونة - ميكانيكيون محترفون في خدمتكم",
      "احجز الآن ووفّر أكثر! العروض سارية لفترة محدودة فقط"
    ]
  }[lang];

  return (
    <div className={`bg-primary py-1 overflow-hidden sticky-top ${lang === 'AR' ? 'dir-rtl' : ''}`} style={{ top: "72px", zIndex: 1020 }}>
      <div className="container-fluid">
        <div className="position-relative text-white fw-bold d-flex flex-nowrap" style={{ height: "25px" }}>
          <div className="marquee d-flex align-items-center flex-nowrap gap-5">
            {offers.map((offer, index) => (
              <span key={index} className="flex-shrink-0 d-flex align-items-center small">
                <i className={`fa-solid fa-award ${lang === 'AR' ? 'ms-2' : 'me-2'} text-warning`}></i>{offer}
              </span>
            ))}
            {offers.map((offer, index) => (
              <span key={`dup-${index}`} className="flex-shrink-0 d-flex align-items-center small">
                <i className={`fa-solid fa-award ${lang === 'AR' ? 'ms-2' : 'me-2'} text-warning`}></i>{offer}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-rtl { 0% { transform: translateX(0); } 100% { transform: translateX(50%); } }
        .marquee { animation: ${lang === 'AR' ? 'marquee-rtl' : 'marquee'} 30s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
        .dir-rtl { direction: rtl; }
      `}</style>
    </div>
  );
};

export default SubNavbar;
