import React from 'react';
import PremiumButton from '../Components/PremiumButton';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
const About = () => {
  const { lang } = useLanguage();

  const content = {
    EN: {
      est: "Est. 2008",
      heroTitle: <>A LEGACY OF <span className="text-gradient-orange">PERFECTION</span></>,
      heroSub: "We are not just a service center; we are the guardians of your vehicle's mechanical excellence.",
      heritage: <>Our <span className="text-brand">Heritage</span> & Origin</>,
      historyDesc1: "Our journey began in 2008 with a clear goal: to redefine luxury automotive care. What started as a small, specialized tuning studio has evolved into an engineering sanctuary that blends deep mechanical heritage with cutting-edge technology.",
      historyDesc2: "Over the years, we have built bridges of trust with our clients, not just by fixing faults, but by providing integrated technical consultations that ensure engine longevity.",
      certTitle: <>Certified <span className="text-brand">Excellence</span></>,
      certDesc: "We are proud to be ISO 9001:2015 Certified, maintaining the highest international standards in automotive service management and safety.",
      partnerTitle: "Authorized Service Partner for",
      mission: { title: "Our Mission", desc: "To provide elite automotive maintenance solutions that exceed client expectations, focusing on global safety standards." },
      message: { title: "Our Message", desc: "Transparency is our language; we communicate with absolute honesty and treat every car as if it were our own masterpiece." },
      vision: { title: "Our Vision", desc: "To be the foremost global destination for luxury vehicle owners, setting the gold standard for maintenance technology." },
      cta: <>Ready for an <span className="text-brand">Exquisite</span> Service?</>,
      btn: "Book Your Appointment"
    },
    AR: {
      est: "تأسس عام 2008",
      heroTitle: <>إرث من <span className="text-gradient-orange">الإتقان</span></>,
      heroSub: "نحن لسنا مجرد مركز صيانة؛ نحن حراس التميز الميكانيكي لسيارتك.",
      heritage: <>أصالتنا <span className="text-brand">وتاريخنا</span></>,
      historyDesc1: "بدأت رحلتنا في عام 2008 بهدف واضح: إعادة تعريف مفهوم العناية بالسيارات الفارهة. ما بدأ كاستوديو متخصص صغير تطور ليصبح صرحاً هندسياً يمزج بين التراث الميكانيكي وأحدث التقنيات.",
      historyDesc2: "على مر السنين، بنينا جسوراً من الثقة مع عملائنا، ليس فقط من خلال إصلاح الأعطال ولكن بتقديم استشارات فنية تضمن إطالة عمر المحرك.",
      certTitle: <>تميز <span className="text-brand">معتمد</span></>,
      certDesc: "نحن فخورون بكوننا حاصلين على شهادة ISO 9001:2015، ملتزمين بأعلى المعايير الدولية في إدارة خدمات السيارات والسلامة.",
      partnerTitle: "شريك خدمة معتمد لـ",
      mission: { title: "مهمتنا", desc: "تقديم حلول صيانة استثنائية تتجاوز توقعات العملاء، مع التركيز على معايير السلامة العالمية والجودة الفائقة." },
      message: { title: "رسالتنا", desc: "الشفافية هي لغتنا؛ نتعامل بصدق مطلق ونعامل كل سيارة كما لو كانت تحفتنا الميكانيكية الخاصة." },
      vision: { title: "رؤيتنا", desc: "أن نكون الوجهة العالمية الأولى لمالكي السيارات الفارهة، واضعين المعيار الذهبي لتكنولوجيا الصيانة." },
      cta: <>هل أنت مستعد لتجربة <span className="text-brand">استثنائية؟</span></>,
      btn: "احجز موعدك الآن"
    }
  };

  const t = content[lang];

  return (
    <div className={`about-page-wrapper bg-dark text-white overflow-hidden ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero-clean position-relative vh-100 d-flex align-items-center justify-content-center">
        <div className="hero-vignette-bottom"></div>
        <img src={process.env.PUBLIC_URL + "/assets/images/about-hero.jpg"} alt="Hero" className="position-absolute w-100 h-100 object-fit-cover opacity-50"/>
        <div className="container position-relative z-3">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="position-relative">
                <div className="position-relative z-1" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                  <span className="text-brand fw-bold d-block mb-3" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>{t.est}</span>
                  <h1 className="hero-main-title fw-black mb-4 mx-auto" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.2, maxWidth: '900px' }}>{t.heroTitle}</h1>
                  <p className="hero-subtext text-white-70 max-width-700 mx-auto fw-normal" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.8 }}>{t.heroSub}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-5 my-5">
        <div className="container py-lg-5 text-center">
          <h2 className="display-4 fw-black mb-5">{t.heritage}</h2>
          <div className="accent-line mx-auto mb-5"></div>
          <div className="col-lg-10 mx-auto">
            <motion.div className="history-content-box p-5 rounded-5 border border-white border-opacity-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <p className="fs-3 text-white-50 lh-lg mb-4">{t.historyDesc1}</p>
              <p className="fs-5 text-secondary">{t.historyDesc2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-5 bg-black bg-opacity-40">
        <div className="container">
          <div className="row align-items-center g-5 justify-content-center text-center text-lg-start">
            <div className="col-lg-5">
              <h2 className="display-5 fw-black mb-4">{t.certTitle}</h2>
              <p className="text-white-50 fs-5 mb-4">{t.certDesc}</p>
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
                <motion.div className="cert-badge pulse-glow" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <i className="fa-solid fa-certificate text-brand fs-1 mb-2"></i>
                  <span className="d-block small fw-bold">ISO 9001:2015</span>
                </motion.div>
                <motion.div className="cert-badge pulse-glow" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>
                  <i className="fa-solid fa-stamp text-brand fs-1 mb-2"></i>
                  <span className="d-block small fw-bold">ASE CERTIFIED</span>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="brand-partners-grid p-5 rounded-5">
                <h5 className="text-center text-white-50 mb-5 tracking-widest text-uppercase small">{t.partnerTitle}</h5>
                <div className="brand-marquee-container overflow-hidden position-relative w-100">
                  <div className="brand-marquee-track d-flex align-items-center">
                    {[1, 2, 3, 4].map((set) => (
                      <React.Fragment key={set}>
                        <div className="brand-logo-standalone mx-4 mx-md-5">
                          <img src={process.env.PUBLIC_URL + "/assets/images/brands/mercedes.svg"} alt="Mercedes-Benz" className="brand-partner-icon-clean img-fluid" />
                          <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase text-center" style={{ fontSize: '0.65rem' }}>Mercedes-Benz</div>
                        </div>
                        <div className="brand-logo-standalone mx-4 mx-md-5">
                          <img src={process.env.PUBLIC_URL + "/assets/images/brands/bmw.svg"} alt="BMW" className="brand-partner-icon-clean img-fluid" />
                          <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase text-center" style={{ fontSize: '0.65rem' }}>BMW Group</div>
                        </div>
                        <div className="brand-logo-standalone mx-4 mx-md-5">
                          <img src={process.env.PUBLIC_URL + "/assets/images/brands/audi.svg"} alt="Audi" className="brand-partner-icon-clean img-fluid" />
                          <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase text-center" style={{ fontSize: '0.65rem' }}>Audi Sport</div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-5 bg-card-dark bg-opacity-30 border-top border-white border-opacity-5">
        <div className="container py-lg-5">
          <div className="row g-4">
            <Pillar icon="fa-rocket" title={t.mission.title} desc={t.mission.desc} delay={0.1} />
            <Pillar icon="fa-envelope-open-text" title={t.message.title} desc={t.message.desc} delay={0.2} highlight />
            <Pillar icon="fa-eye" title={t.vision.title} desc={t.vision.desc} delay={0.3} />
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container py-5">
          <h2 className="mb-4 fw-bold">{t.cta}</h2>
          <PremiumButton to="/booking" size="lg">{t.btn}</PremiumButton>
        </div>
      </section>

      <style>{`
        .hero-main-title { font-size: calc(2rem + 3vw); letter-spacing: -2px; }
        .hero-vignette-bottom { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 0%, #0d0f10 100%); z-index: 2; }
        .fw-black { font-weight: 900; }
        .accent-line { width: 80px; height: 4px; background: #ff6b1a; border-radius: 2px; }
        .history-content-box { background: rgba(255,255,255,0.01); backdrop-filter: blur(5px); }
        .pillar-premium { 
           background: linear-gradient(145deg, #121417 0%, #0a0c0e 100%); 
           border: 1px solid rgba(255,255,255,0.03); 
           padding: 50px 40px; 
           border-radius: 20px; 
           text-align: center; 
           box-shadow: 0 10px 30px rgba(0,0,0,0.5);
           transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
           position: relative;
           overflow: hidden;
           z-index: 1;
        }
        .pillar-premium:hover { 
           border-color: rgba(255,107,26,0.3); 
           box-shadow: 0 20px 40px rgba(255,107,26,0.15); 
           transform: translateY(-12px);
        }
        .highlighted-pillar {
           border-color: rgba(255,107,26,0.15);
           background: linear-gradient(145deg, #181310 0%, #0a0c0e 100%);
        }
        .pillar-glow {
           position: absolute;
           top: -50px; left: 50%;
           transform: translateX(-50%);
           width: 200px; height: 200px;
           background: radial-gradient(circle, rgba(255,107,26,0.15) 0%, transparent 70%);
           opacity: 0;
           transition: opacity 0.6s ease;
           z-index: -1;
           pointer-events: none;
        }
        .pillar-premium:hover .pillar-glow {
           opacity: 1;
        }
        .pillar-top-icon { 
           font-size: 3.5rem; 
           margin-bottom: 25px; 
           color: #ff6b1a; 
           background: -webkit-linear-gradient(45deg, #ff6b1a, #ff9b5a);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           filter: drop-shadow(0 10px 15px rgba(255,107,26,0.3));
           transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .pillar-premium:hover .pillar-top-icon {
           transform: scale(1.15);
        }
        .cert-badge { padding: 20px; background: rgba(255,255,255,0.03); border-radius: 20px; min-width: 120px; }
        .brand-logo-standalone { display: flex; flex-direction: column; align-items: center; justify-content: center; isolation: isolate; }
        .brand-partner-icon-clean { height: 85px; width: auto; max-width: 100%; object-fit: contain; filter: drop-shadow(0 8px 20px rgba(0,0,0,0.5)); transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
        
        @media (max-width: 991px) {
            .brand-partner-icon-clean { height: 60px; }
            .brand-partners-grid { padding: 40px 20px !important; }
        }
        @media (max-width: 576px) {
            .brand-partner-icon-clean { height: 40px; }
            .brand-partners-grid { padding: 30px 10px !important; }
            .brand-logo-standalone div { font-size: 0.55rem !important; margin-top: 10px !important; }
        }

        .dir-rtl { direction: rtl; text-align: right; }
        .pulse-glow { animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(255,107,26,0.4); } 70% { box-shadow: 0 0 0 10px rgba(255,107,26,0); } 100% { box-shadow: 0 0 0 0 rgba(255,107,26,0); } }
        
        .brand-marquee-container {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          padding: 20px 0;
        }
        .brand-marquee-track {
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
        .brand-logo-standalone:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.15)) brightness(1.1);
        }
        .dir-rtl .brand-marquee-track {
          animation: marqueeScrollRTL 25s linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marqueeScrollRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(25%); }
        }
      `}</style>
    </div>
  );
};

const Pillar = ({ icon, title, desc, delay, highlight }) => (
  <motion.div className="col-lg-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }}>
    <div className={`pillar-premium h-100 ${highlight ? 'highlighted-pillar' : ''}`}>
      <div className="pillar-glow"></div>
      <div className="pillar-top-icon"><i className={`fa-solid ${icon}`}></i></div>
      <h3 className="fw-black mb-4 text-brand">{title}</h3>
      <p className="text-white-50 lh-lg">{desc}</p>
    </div>
  </motion.div>
);

export default About;
