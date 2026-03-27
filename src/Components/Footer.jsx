import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();

  const t = {
    EN: {
        desc: "Elite Car Maintenance Since 2008. Precision engineering meets master mechanics for all vehicle types.",
        info: "Contact Info",
        address: "123 Cairo Center, Egypt",
        nav: "Navigation",
        follow: "Follow Us",
        home: "Home",
        services: "Services",
        about: "About Us",
        book: "Book Now",
        rights: "© 2024 TURBOFIX CENTER. ALL RIGHTS RESERVED. EGYPT HQ."
    },
    AR: {
        desc: "صيانة سيارات متميزة منذ عام 2008. الهندسة الدقيقة تلتقي مع خبراء الميكانيكا لجميع أنواع المركبات.",
        info: "بيانات التواصل",
        address: "123 وسط القاهرة، مصر",
        nav: "التنقل",
        follow: "تابعنا",
        home: "الرئيسية",
        services: "الخدمات",
        about: "عن المركز",
        book: "احجز الآن",
        rights: "© 2024 مركز توربو فيكس. جميع الحقوق محفوظة. المقر الرئيسي في مصر."
    }
  }[lang];

  return (
    <footer className={`footer bg-dark text-white pt-5 pb-4 border-top border-secondary border-opacity-10 shadow-2xl overflow-hidden ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      <div className="container px-lg-4">
        <div className={`row gy-5 gx-md-4 justify-content-between text-center ${lang === 'AR' ? 'text-md-end' : 'text-md-start'}`}>
          
          <div className="col-12 col-md-6 col-lg-3 footer-brand-section">
            <Link className={`navbar-brand fw-bold fs-3 text-uppercase d-inline-flex align-items-center mb-4 text-decoration-none gap-3`} to="/">
              <div className={`bg-primary-gradient p-2 rounded-3 d-inline-flex flex-shrink-0`} style={{ width: '42px', height: '42px' }}>
                 <i className="fa-solid fa-screwdriver-wrench text-white"></i>
              </div>
              <span className="text-white tracking-tighter brand-text-shimmer">Turbo<span className="text-primary-orange">Fix</span></span>
            </Link>
            <p className="text-secondary small mb-0 opacity-75 footer-desc-text lh-base">{t.desc}</p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-4 text-uppercase tracking-widest text-white border-bottom border-primary d-inline-block pb-2 footer-heading">{t.nav}</h6>
            <div className="d-flex flex-column gap-2 small">
              <FooterLink to="/" text={t.home} />
              <FooterLink to="/services" text={t.services} />
              <FooterLink to="/about" text={t.about} />
              <FooterLink to="/booking" text={t.book} />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-4 text-uppercase tracking-widest text-white border-bottom border-primary d-inline-block pb-2 footer-heading">{t.info}</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 small text-secondary p-0 m-0">
               <ContactItem icon="fa-location-dot" text={t.address} />
               <ContactItem icon="fa-phone" text="01110895582" link="tel:01110895582" />
               <ContactItem 
                 icon="fa-envelope" 
                 text="TURBOFIX@gmail.com" 
                 link="mailto:rby296938@gmail.com"
                 wrap 
               />
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-4 text-uppercase tracking-widest text-white border-bottom border-primary d-inline-block pb-2 footer-heading">{t.follow}</h6>
            <div className={`d-flex flex-wrap gap-3 justify-content-center ${lang === 'AR' ? 'justify-content-md-end' : 'justify-content-md-start'}`}>
              <SocialIcon icon="fa-facebook-f" platform="facebook" url="https://www.facebook.com/share/19iVJJnViw/" />
              <SocialIcon icon="fa-x-twitter" platform="x-twitter" url="#" />
              <SocialIcon icon="fa-instagram" platform="instagram" url="#" />
              <SocialIcon icon="fa-linkedin-in" platform="linkedin" url="#" />
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary border-opacity-10" />

        <div className="text-center text-muted small opacity-50 px-2 footer-copyright">
          <p className="mb-0 fw-bold translate-safe-line">{t.rights}</p>
        </div>
      </div>

      <style>{`
        .bg-primary-gradient { background: linear-gradient(135deg, #ff6b1a 0%, #ff8c42 100%); }
        .text-primary-orange { color: #ff6b1a; border-color: #ff6b1a; }
        .dir-rtl { direction: rtl; text-align: right; }
        .footer-desc-text { word-wrap: break-word; overflow-wrap: break-word; }
        .footer-heading { white-space: normal; line-height: 1.4; max-width: 100%; }
        .social-btn-elite { width: 44px; height: 44px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: rgba(255, 255, 255, 0.7); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-decoration: none; font-size: 1.1rem; }
        .social-btn-elite.facebook:hover { background: #1877F2; border-color: #1877F2; color: #fff; transform: translateY(-5px) rotate(5deg); }
        .social-btn-elite.x-twitter:hover { background: #111; border-color: #fff; color: #fff; transform: translateY(-5px) rotate(-5deg); }
        .social-btn-elite.instagram:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border-color: transparent; color: #fff; transform: translateY(-5px) scale(1.1); }
        .social-btn-elite.linkedin:hover { background: #0A66C2; border-color: #0A66C2; color: #fff; transform: translateY(-5px) rotate(5deg); }
        .brand-text-shimmer { background: linear-gradient(to right, #fff 20%, #ff6b1a 40%, #ff6b1a 60%, #fff 80%); background-size: 200% auto; color: #fff; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shine 5s linear infinite; }
        @keyframes shine { to { background-position: 200% center; } }
        .contact-item-link { transition: all 0.3s ease; }
        .contact-item-link:hover { color: #ff6b1a !important; }
      `}</style>
    </footer>
  );
};

const SocialIcon = ({ icon, platform, url }) => (
  <a href={url} className={`social-btn-elite ${platform}`} target="_blank" rel="noopener noreferrer">
    <i className={`fa-brands ${icon}`}></i>
  </a>
);

const ContactItem = ({ icon, text, link, wrap }) => {
    const content = (
        <li className="d-flex align-items-start gap-3 justify-content-center justify-content-md-start mb-1">
            <i className={`fa-solid ${icon} text-primary-orange mt-1 flex-shrink-0 fs-6`}></i>
            <span className={`footer-desc-text ${wrap ? 'word-break-all' : ''}`}>{text}</span>
        </li>
    );
    if (link) return <a href={link} className="text-decoration-none text-secondary contact-item-link">{content}</a>;
    return content;
};

const FooterLink = ({ to, text }) => (
  <Link className="text-secondary text-decoration-none hover-orange transition-all d-block py-1 h-hover-brand" to={to}>
    {text}
  </Link>
);

export default Footer;
