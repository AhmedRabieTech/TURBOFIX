import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
// Removed HeroSlider.css import - now linked in index.html
import PremiumButton from './PremiumButton';

const HeroSlider = () => {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = {
    EN: [
      {
        id: 1,
        image: '/assets/images/slide1.png',
        headline: 'Elite Performance Expert Care',
        description: 'Precision maintenance and high-end automotive solutions for those who demand excellence from their vehicles.',
        cta: 'Book Appointment',
        link: '/booking'
      },
      {
        id: 2,
        image: '/assets/images/slide2.png',
        headline: 'Premium Car Maintenance',
        description: 'Comprehensive routine checks and luxury care services tailored to your vehicle.',
        cta: 'View Menu',
        link: '/services'
      },
      {
        id: 3,
        image: '/assets/images/slide3.jpg',
        headline: 'Advanced Diagnostics',
        description: 'State-of-the-art diagnostic technology for pinpoint accuracy and swift repairs.',
        cta: 'Get Diagnosed',
        link: '/services'
      }
    ],
    AR: [
      {
        id: 1,
        image: '/assets/images/slide1.png',
        headline: 'أداء متميز وعناية فائقة',
        description: 'صيانة دقيقة وحلول سيارات متطورة لمن يطلبون التميز في كل تفاصيل قيادتهم.',
        cta: 'احجز موعداً',
        link: '/booking'
      },
      {
        id: 2,
        image: '/assets/images/slide2.png',
        headline: 'صيانة سيارات فاخرة',
        description: 'فحوصات دورية شاملة وخدمات عناية متميزة مصممة خصيصاً لسيارتك بكل تفاصيلها.',
        cta: 'عرض القائمة',
        link: '/services'
      },
      {
        id: 3,
        image: '/assets/images/slide3.jpg',
        headline: 'تشخيص أعطال متقدم',
        description: 'استخدام أحدث تقنيات التشخيص لضمان الدقة المطلقة وسرعة الإصلاح والكفاءة.',
        cta: 'ابدأ الفحص',
        link: '/services'
      }
    ]
  }[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className={`hero-slider ${lang === 'AR' ? 'dir-rtl' : ''}`}>
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <div className="slide-image-wrapper">
             <img 
               src={slide.image} 
               alt={slide.headline} 
               className={`slide-image ${index === currentSlide ? 'zoom-in' : ''}`}
               onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1920&q=80' }}
             />
             <div className="slide-overlay"></div>
          </div>
          
          <div className="slide-content container">
            <h1 className="slide-headline">{slide.headline}</h1>
            <p className="slide-description">{slide.description}</p>
            <PremiumButton to={slide.link} className="hero-cta-btn align-self-start mt-4">
              {slide.cta}
            </PremiumButton>
          </div>
        </div>
      ))}

      <button className="nav-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="nav-button next" onClick={nextSlide}>&#10095;</button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
