import React, { useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import PremiumButton from '../Components/PremiumButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
// Removed DesignSystem.css import - now linked in index.html

const Contact = () => {
    const { lang } = useLanguage();
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const t = {
        EN: {
            title: "Connect with Excellence",
            highlight: "Excellence",
            subtitle: "Contact Us",
            desc: "Experience the pinnacle of automotive care. Reach out to our master technicians and concierge team today.",
            phone: { title: "Call Us", detail: "01110895582", sub: "24/7 Priority Support", link: "tel:01110895582" },
            email: { title: "Email Us", detail: "TURBOFIX@gmail.com", sub: "Response within 2 hours", link: "mailto:rby296938@gmail.com" },
            visit: { title: "Visit Us", detail: "123 Cairo Center, Egypt", sub: "Premium Service Hub", link: "https://maps.google.com" },
            formTitle: "Send an Inquiry",
            nameLabel: "Full Name",
            emailLabel: "Email Address",
            subjectLabel: "Subject",
            msgLabel: "Your Message",
            btn: "Send Message",
            success: "Message Sent! Our elite team will contact you shortly.",
            hub: "TurboFix Luxury Hub",
            open: "Cairo, Egypt • Open 24/7"
        },
        AR: {
            title: "تواصل مع التميز",
            highlight: "التميز",
            subtitle: "اتصل بنا",
            desc: "جرب قمة العناية بالسيارات. تواصل مع كبار الفنيين وفريق خدمة العملاء لدينا اليوم.",
            phone: { title: "اتصل بنا", detail: "01110895582", sub: "دعم متاح 24/7", link: "tel:01110895582" },
            email: { title: "راسلنا", detail: "TURBOFIX@gmail.com", sub: "الرد خلال ساعتين", link: "mailto:rby296938@gmail.com" },
            visit: { title: "زورنا", detail: "123 وسط القاهرة، مصر", sub: "مركز الخدمة المتميز", link: "https://maps.google.com" },
            formTitle: "أرسل استفسارك",
            nameLabel: "الاسم الكامل",
            emailLabel: "البريد الإلكتروني",
            subjectLabel: "الموضوع",
            msgLabel: "رسالتك",
            btn: "إرسال الرسالة",
            success: "تم الإرسال! سيتواصل معك فريقنا في أقرب وقت.",
            hub: "توربو فيكس - المركز الفاخر",
            open: "القاهرة، مصر • مفتوح 24/7"
        }
    }[lang];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus(t.success);
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
    };

    const contactMethods = [
        { icon: 'fa-phone-volume', ...t.phone },
        { icon: 'fa-envelope-open-text', ...t.email },
        { icon: 'fa-location-dot', ...t.visit }
    ];

    return (
        <div className={`contact-page-wrapper bg-dark text-white overflow-hidden pb-5 ${lang === 'AR' ? 'dir-rtl' : ''}`}>
            <section className="contact-hero py-5 mt-5">
                <div className="container pt-lg-5 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <SectionTitle 
                            text={t.title}
                            highlight={t.highlight}
                            subtitle={t.subtitle}
                            alignment="center"
                        />
                        <p className="lead text-white-50 mt-3 max-width-600 mx-auto">{t.desc}</p>
                    </motion.div>
                </div>
            </section>

            <div className="container py-5">
                <div className="row g-4 mb-5 pb-lg-4">
                    {contactMethods.map((method, i) => (
                        <motion.div key={i} className="col-lg-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                            <a href={method.link} className="text-decoration-none contact-link-card d-block h-100" target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                                <div className="contact-method-card p-4 rounded-5 border border-white border-opacity-5 text-center transition-all h-100">
                                    <i className={`fa-solid ${method.icon} text-brand fs-2 mb-3`}></i>
                                    <h5 className="fw-bold mb-2 text-white">{method.title}</h5>
                                    <p className="mb-1 fw-bold text-white-50">{method.detail}</p>
                                    <p className="small text-secondary mb-0">{method.sub}</p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="row g-5 align-items-stretch">
                    <div className="col-lg-6">
                        <motion.div className="contact-form-container p-5 rounded-5 shadow-2xl h-100" initial={{ opacity: 0, x: lang === 'AR' ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h3 className="fw-bold mb-4">{t.formTitle}</h3>
                            <AnimatePresence>
                                {status && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0 }} className="alert alert-success bg-brand-light border-0 text-brand fw-bold rounded-4 mb-4">
                                    <i className="fa-solid fa-circle-check me-2 ms-2"></i> {status}
                                </motion.div>}
                            </AnimatePresence>
                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="row g-4 text-start">
                                    <div className="col-md-6">
                                        <label className="small text-secondary mb-2 ms-2 me-2">{t.nameLabel}</label>
                                        <input type="text" className="premium-input w-100" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small text-secondary mb-2 ms-2 me-2">{t.emailLabel}</label>
                                        <input type="email" className="premium-input w-100" required />
                                    </div>
                                    <div className="col-12 text-start">
                                        <label className="small text-secondary mb-2 ms-2 me-2">{t.subjectLabel}</label>
                                        <select className="premium-input w-100"><option>Inquiry</option><option>Quote</option></select>
                                    </div>
                                    <div className="col-12 text-start">
                                        <label className="small text-secondary mb-2 ms-2 me-2">{t.msgLabel}</label>
                                        <textarea className="premium-input w-100" rows="5" required></textarea>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <PremiumButton type="submit" loading={isSubmitting} size="lg" className="w-100">{t.btn}</PremiumButton>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <div className="map-container-premium h-100 rounded-5 overflow-hidden shadow-2xl border border-white border-opacity-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6038503!2d31.188448!3d30.0592288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296efaa6095!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700684274944!5m2!1sen!2seg" width="100%" height="100%" style={{ border: 0, minHeight: '500px', filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }} loading="lazy"></iframe>
                            <div className={`map-overlay-info p-4 ${lang === 'AR' ? 'start-20' : 'reset-start'}`} style={{ [lang === 'AR' ? 'left' : 'right']: '20px' }}>
                                <h6 className="fw-bold mb-1">{t.hub}</h6>
                                <p className="small mb-0 opacity-70">{t.open}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-method-card { background: rgba(255,255,255,0.02); }
                .contact-link-card:hover .contact-method-card { transform: translateY(-10px); background: rgba(255,107,26,0.02); border-color: #ff6b1a !important; }
                .contact-form-container { background: #111416; border: 1px solid rgba(255,255,255,0.05); }
                .map-container-premium { position: relative; }
                .map-overlay-info { position: absolute; bottom: 20px; background: rgba(13, 15, 16, 0.9); backdrop-filter: blur(10px); border: 1px solid #ff6b1a; border-radius: 15px; z-index: 5; }
                .bg-brand-light { background: rgba(255,107,26,0.1) !important; }
                .max-width-600 { max-width: 600px; }
                .dir-rtl { direction: rtl; text-align: right; }
            `}</style>
        </div>
    );
};

export default Contact;
