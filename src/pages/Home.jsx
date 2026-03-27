import React from 'react';
import services from '../Data/AllData';
import { useLanguage } from '../LanguageContext';
import StatsSection from '../Components/StatsSection';
import HeroSlider from '../Components/HeroSlider';
import SectionTitle from '../Components/SectionTitle';
import PremiumButton from '../Components/PremiumButton';

const Home = () => {
  const { lang } = useLanguage();

  const t = {
    EN: {
      servicesTitle: "Our Core Services",
      servicesHighlight: "Core",
      servicesSub: "Discover our specialized maintenance packages",
      allServices: "All Services",
      startingFrom: "Starting from",
      bookNow: "Book Now",
      testTitle: "What Our Clients Think",
      testHighlight: "Clients",
      testSub: "Testimonials",
      testDesc: "We take pride in our service. Hear from the people who trust us with their machines.",
      reviews: "1k+ Reviews",
      testimonials: [
        { name: "Ahmed Salem", comment: "The best experience I've had with my car. Professional staff and quick service.", date: "2 days ago" },
        { name: "Mona Khalid", comment: "My brake pads were replaced on short notice. Excellent work and reasonable price.", date: "1 week ago" },
        { name: "John Doe", comment: "Highly recommend for all maintenance needs. They really know their stuff.", date: "1 month ago" }
      ]
    },
    AR: {
      servicesTitle: "خدماتنا الأساسية",
      servicesHighlight: "الأساسية",
      servicesSub: "اكتشف باقات الصيانة المتخصصة لدينا",
      allServices: "كل الخدمات",
      startingFrom: "يبدأ من",
      bookNow: "احجز الآن",
      testTitle: "ماذا يقول عملاؤنا",
      testHighlight: "عملاؤنا",
      testSub: "آراء العملاء",
      testDesc: "نفخر بخدمتنا. استمع إلى الأشخاص الذين يثقون بنا وبسياراتهم.",
      reviews: "+1000 تقييم",
      testimonials: [
        { name: "أحمد سالم", comment: "أفضل تجربة صيانة لسيارتي. طاقم عمل محترف وسريع.", date: "منذ يومين" },
        { name: "منى خالد", comment: "تم تبديل المكابح بسرعة وسعر معقول جداً. عمل ممتاز.", date: "منذ أسبوع" },
        { name: "جون دو", comment: "أنصح بهم بشدة لكل احتياجات الصيانة. خبراء جداً.", date: "منذ شهر" }
      ]
    }
  }[lang];

  return (
    <div className={`home-page overflow-hidden bg-dark text-light ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      <HeroSlider />
      <StatsSection />

      <section className="services-section py-5 mb-5 mt-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-4">
            <SectionTitle 
              text={t.servicesTitle}
              highlight={t.servicesHighlight}
              description={t.servicesSub}
              alignment={lang === 'AR' ? 'end' : 'start'}
            />
            <PremiumButton to="/services" size="md">
              {t.allServices}
            </PremiumButton>
          </div>
          
          <div className="row g-4 justify-content-center">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="col-lg-3 col-md-6">
                <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden position-relative scale-hover transition-all bg-card-dark text-start">
                  <div className="position-relative">
                    <img src={service.image} className="card-img-top" alt={service.name} style={{ height: "220px", objectFit: "cover" }} />
                    <div className="card-img-overlay d-flex align-items-start p-3">
                       <span className="badge bg-brand rounded-pill px-3 shadow-sm">{lang === 'EN' ? service.category : service.categoryAr}</span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3">{lang === 'EN' ? service.name : service.nameAr}</h5>
                    <p className="card-text text-muted small mb-4">
                        {(lang === 'EN' ? service.description : service.descriptionAr).substring(0, 90)}...
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-10">
                      <div>
                        <span className="text-muted small d-block">{t.startingFrom}</span>
                        <span className="h4 mb-0 fw-bold text-brand">${service.price}</span>
                      </div>
                      <PremiumButton to="/booking" size="sm" className="shadow-none border-secondary border-opacity-25 rounded-3">{t.bookNow}</PremiumButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5 mb-5 bg-black bg-opacity-20">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className={`col-lg-4 ${lang === 'AR' ? 'text-end' : 'text-start'}`}>
              <SectionTitle 
                text={t.testTitle}
                highlight={t.testHighlight}
                subtitle={t.testSub}
                description={t.testDesc}
                alignment={lang === 'AR' ? 'end' : 'start'}
              />
              <div className={`d-flex align-items-center gap-2 ${lang === 'AR' ? 'justify-content-end' : ''}`}>
                 <div className="avatar-group d-flex">
                    {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/50?img=${i+10}`} className="rounded-circle border border-dark" style={{ width: '40px', marginLeft: '-15px' }} />)}
                 </div>
                 <span className="text-white ms-2 small fw-bold">{t.reviews}</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {t.testimonials.map((test, index) => (
                  <div key={index} className={index === 0 ? 'col-md-12' : 'col-md-6'}>
                    <div className={`card h-100 border-0 shadow-sm rounded-4 p-4 ${lang === 'AR' ? 'text-end' : 'text-start'} bg-card-dark transition-all scale-hover`}>
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <div className="stars text-brand small">
                          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <span className="text-muted smallest">{test.date}</span>
                      </div>
                      <p className="text-light-50 italic mb-4">"{test.comment}"</p>
                      <h6 className="fw-bold mb-0 text-white"><i className={`fa-solid fa-circle-user text-brand ${lang === 'AR' ? 'ms-2' : 'me-2'}`}></i>{test.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bg-card-dark { background-color: #121416; }
        .text-brand { color: #ff6b1a !important; }
        .bg-brand { background-color: #ff6b1a !important; }
        .dir-rtl { direction: rtl; text-align: right; }
        .scale-hover:hover { transform: translateY(-8px); border-color: rgba(255,107,26,0.3) !important; }
        .smallest { font-size: 0.75rem; }
      `}</style>
    </div>
  );
};

export default Home;
