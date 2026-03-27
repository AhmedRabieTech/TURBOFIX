import React from 'react';
import PremiumButton from '../Components/PremiumButton';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
// Removed DesignSystem.css import - now linked in index.html

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
        <img src="/assets/images/about-hero.jpg" alt="Hero" className="position-absolute w-100 h-100 object-fit-cover opacity-50"/>
        <div className="container position-relative z-3">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                <span className="text-brand fw-bold tracking-widest text-uppercase d-block small mb-3">{t.est}</span>
                <h1 className="hero-main-title fw-black mb-4">{t.heroTitle}</h1>
                <p className="hero-subtext text-white-70 max-width-700 mx-auto fs-4 fw-light">{t.heroSub}</p>
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
                <div className="row g-5 align-items-center text-center justify-content-center">
                   {/* Mercedes-Benz */}
                   <div className="col-4 col-md-3">
                     <motion.div 
                        className="brand-logo-standalone"
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        animate={{ 
                          y: [0, -6, 0],
                          rotateZ: [-1, 1, -1],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          default: { duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                          rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotateY: 10,
                          rotateX: -5,
                          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15)) brightness(1.1)",
                        }}
                     >
                       <img src="/assets/images/brands/mercedes.svg" alt="Mercedes-Benz" className="brand-partner-icon-clean img-fluid" />
                       <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase" style={{ fontSize: '0.65rem' }}>Mercedes-Benz</div>
                     </motion.div>
                   </div>

                   {/* BMW */}
                   <div className="col-4 col-md-3">
                     <motion.div 
                        className="brand-logo-standalone"
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        animate={{ 
                          y: [0, -6, 0],
                          rotateZ: [1, -1, 1],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          default: { duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                          rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotateY: 10,
                          rotateX: -5,
                          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15)) brightness(1.1)",
                        }}
                     >
                       <img src="/assets/images/brands/bmw.svg" alt="BMW" className="brand-partner-icon-clean img-fluid" />
                       <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase" style={{ fontSize: '0.65rem' }}>BMW Group</div>
                     </motion.div>
                   </div>

                   {/* Audi */}
                   <div className="col-4 col-md-3">
                     <motion.div 
                        className="brand-logo-standalone"
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        animate={{ 
                          y: [0, -6, 0],
                          rotateZ: [-0.8, 0.8, -0.8],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          default: { duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
                          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                          rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotateY: 10,
                          rotateX: -5,
                          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15)) brightness(1.1)",
                        }}
                     >
                       <img src="/assets/images/brands/audi.svg" alt="Audi" className="brand-partner-icon-clean img-fluid" />
                       <div className="small fw-bold opacity-60 mt-3 tracking-widest text-uppercase" style={{ fontSize: '0.65rem' }}>Audi Sport</div>
                     </motion.div>
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
            <Pillar icon="fa-crosshairs" title={t.mission.title} desc={t.mission.desc} delay={0.1} />
            <Pillar icon="fa-award" title={t.message.title} desc={t.message.desc} delay={0.2} highlight />
            <Pillar icon="fa-gem" title={t.vision.title} desc={t.vision.desc} delay={0.3} />
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
        .pillar-premium { background: #111416; border: 1px solid rgba(255,255,255,0.05); padding: 45px; border-radius: 35px; text-align: center; }
        .pillar-premium:hover { border-color: #ff6b1a; transform: translateY(-10px); }
        .pillar-top-icon { font-size: 3rem; margin-bottom: 20px; }
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
      `}</style>
    </div>
  );
};

const Pillar = ({ icon, title, desc, delay, highlight }) => (
  <motion.div className="col-lg-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }}>
    <div className={`pillar-premium h-100 ${highlight ? 'border-brand' : ''}`}>
      <motion.div whileHover={{ rotateY: 180 }} className="pillar-top-icon text-brand"><i className={`fa-solid ${icon}`}></i></motion.div>
      <h3 className="fw-bold mb-3">{title}</h3>
      <p className="text-white-50">{desc}</p>
    </div>
  </motion.div>
);

export default About;
