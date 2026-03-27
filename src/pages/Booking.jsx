import React, { useState, useEffect } from 'react';
import services from '../Data/AllData';
import SectionTitle from '../Components/SectionTitle';
import PremiumButton from '../Components/PremiumButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
// Removed DesignSystem.css import - now linked in index.html

const Booking = () => {
    const { lang } = useLanguage();
    const [bookingData, setBookingData] = useState({
        serviceId: '',
        date: '',
        time: '',
        customerName: '',
        customerEmail: '',
        notes: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);

    const t = {
        EN: {
            title: "Book an Appointment",
            highlight: "Appointment",
            subtitle: "Secure Your Spot",
            desc: "Fast, reliable, and professional car maintenance.",
            details: "Appointment Details",
            serviceLabel: "Service Type *",
            selectPl: "Select a Service",
            dateLabel: "Preferred Date *",
            timeLabel: "Preferred Time *",
            nameLabel: "Full Name *",
            emailLabel: "Email Address *",
            notesLabel: "Special Notes (Optional)",
            notesPl: "Additional info for our mechanics...",
            btn: "Confirm Booking",
            history: "Booking History",
            clear: "Clear History",
            noBookings: "No Bookings Found",
            historySub: "Your refined history will appear here.",
            success: "Booking confirmed successfully!",
            error: "Please fill in all required fields.",
            successTitle: "Success!",
            errorTitle: "Error"
        },
        AR: {
            title: "حجز موعد صيانة",
            highlight: "صيانة",
            subtitle: "احجز مكانك الآن",
            desc: "صيانة احترافية، سريعة وموثوقة لسيارتك.",
            details: "تفاصيل الموعد",
            serviceLabel: "نوع الخدمة *",
            selectPl: "اختر الخدمة",
            dateLabel: "التاريخ المفضل *",
            timeLabel: "الوقت المفضل *",
            nameLabel: "الاسم الكامل *",
            emailLabel: "البريد الإلكتروني *",
            notesLabel: "ملاحظات إضافية (اختياري)",
            notesPl: "معلومات إضافية للميكانيكيين...",
            btn: "تأكيد الحجز",
            history: "سجل الحجوزات",
            clear: "مسح السجل",
            noBookings: "لا توجد حجوزات",
            historySub: "سيظهر سجل حجوزاتك هنا.",
            success: "تم تأكيد الحجز بنجاح!",
            error: "يرجى ملء جميع الحقول المطلوبة.",
            successTitle: "تم بنجاح!",
            errorTitle: "خطأ"
        }
    }[lang];

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
        setHistory(savedHistory);
    }, []);

    const handleChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookingData.serviceId || !bookingData.date || !bookingData.time || !bookingData.customerName || !bookingData.customerEmail) {
            setMessage({ type: 'error', text: t.error });
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            const newBooking = { ...bookingData, id: Date.now(), timestamp: new Date().toLocaleString() };
            const updatedHistory = [newBooking, ...history];
            setHistory(updatedHistory);
            localStorage.setItem('bookingHistory', JSON.stringify(updatedHistory));
            setIsLoading(false);
            setMessage({ type: 'success', text: t.success });
            setBookingData({ serviceId: '', date: '', time: '', customerName: '', customerEmail: '', notes: '' });
            setTimeout(() => setMessage(''), 4000);
        }, 1500);
    };

    const clearHistory = () => {
        localStorage.removeItem('bookingHistory');
        setHistory([]);
    };

    return (
        <div className={`booking-page-container overflow-hidden py-5 pt-lg-5 bg-dark text-light min-vh-100 ${lang === 'AR' ? 'dir-rtl' : ''}`}>
            <div className="container py-lg-5 px-lg-4">
                <div className="row justify-content-center text-center mb-5 pb-5">
                    <div className="col-lg-8 position-relative">
                        <SectionTitle text={t.title} highlight={t.highlight} subtitle={t.subtitle} description={t.desc} />
                        <AnimatePresence mode="wait">
                            {message && (
                                <motion.div 
                                    key="booking-toast"
                                    initial={{ y: -100, x: '-50%', opacity: 0 }}
                                    animate={{ y: 0, x: '-50%', opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    className="toast-portal"
                                    style={{ left: '50%' }}
                                >
                                    <div className={`premium-toast ${message.type === 'success' ? 'toast-success' : 'toast-error'}`}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className={`toast-icon-circle ${message.type === 'success' ? 'bg-orange-brand' : 'bg-danger'}`}>
                                                <i className={`fa-solid ${message.type === 'success' ? 'fa-check' : 'fa-xmark'} text-white`}></i>
                                            </div>
                                            <div className="text-start">
                                                <p className="fw-bold mb-0 text-white">{message.type === 'success' ? t.successTitle : t.errorTitle}</p>
                                                <p className="small mb-0 text-white-50">{message.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="row g-5 mb-5 align-items-start">
                    <div className="col-lg-7">
                        <div className="card shadow-lg p-5 border-0 rounded-4 bg-card-dark transition-all scale-hover">
                            <h2 className="fw-bold mb-4 pb-2 border-bottom border-secondary border-opacity-10 text-white">{t.details}</h2>
                            <form onSubmit={handleSubmit} className="row g-4 text-start">
                                <div className="col-md-12">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.serviceLabel}</label>
                                    <select name="serviceId" className="form-select premium-input fs-6 py-3 px-4 rounded-4" value={bookingData.serviceId} onChange={handleChange} required>
                                        <option value="" className="bg-dark text-muted">{t.selectPl}</option>
                                        {services.map(s => <option key={s.id} value={s.id} className="bg-dark text-white">{lang === 'EN' ? s.name : s.nameAr} - ${s.price}</option>)}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.dateLabel}</label>
                                    <input type="date" name="date" className="form-control premium-input fs-6 py-3 px-4 rounded-4" value={bookingData.date} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.timeLabel}</label>
                                    <input type="time" name="time" className="form-control premium-input fs-6 py-3 px-4 rounded-4" value={bookingData.time} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.nameLabel}</label>
                                    <input type="text" name="customerName" className="form-control premium-input fs-6 py-3 px-4 rounded-4" value={bookingData.customerName} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.emailLabel}</label>
                                    <input type="email" name="customerEmail" className="form-control premium-input fs-6 py-3 px-4 rounded-4" value={bookingData.customerEmail} onChange={handleChange} required />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label fw-bold small text-uppercase mb-2 text-brand">{t.notesLabel}</label>
                                    <textarea name="notes" className="form-control premium-input fs-6 py-4 px-4 rounded-4" value={bookingData.notes} onChange={handleChange} placeholder={t.notesPl} style={{ height: "120px" }}></textarea>
                                </div>
                                <div className="col-md-12 mt-4"><PremiumButton type="submit" size="lg" className="w-100 py-3" loading={isLoading}>{t.btn}</PremiumButton></div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="card shadow-lg p-4 border-0 rounded-4 bg-card-dark text-white min-vh-500 transition-all scale-hover">
                            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                                <h2 className="fw-bold mb-0 text-white fs-4">{t.history}</h2>
                                {history.length > 0 && <button onClick={clearHistory} className="btn btn-clear-history"><i className="fa-solid fa-trash-can me-2 ms-2"></i>{t.clear}</button>}
                            </div>
                            {history.length > 0 ? (
                                <div className="booking-list d-flex flex-column gap-3 overflow-auto pe-2 custom-scrollbar text-start" style={{ maxHeight: "650px" }}>
                                    {history.map((item, index) => {
                                        const service = services.find(s => s.id === parseInt(item.serviceId));
                                        return (
                                          <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="history-card p-4 rounded-4 mb-2">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                              <h5 className="fw-bold text-brand mb-0">{lang === 'EN' ? service?.name : service?.nameAr}</h5>
                                              <span className="badge-pill-orange small">{item.date} | {item.time}</span>
                                            </div>
                                            <p className="small text-white-50 mb-1"><i className="fa-solid fa-user me-2 ms-2 opacity-50"></i>{item.customerName}</p>
                                            <p className="small text-white-50 mb-0"><i className="fa-solid fa-envelope me-2 ms-2 opacity-50"></i>{item.customerEmail}</p>
                                          </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-5 my-5 opacity-40">
                                    <i className="fa-solid fa-folder-open fs-1 mb-3"></i>
                                    <p className="fw-bold small text-uppercase tracking-widest">{t.noBookings}</p>
                                    <p className="small">{t.historySub}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .bg-card-dark { background-color: #111416; }
                .dir-rtl { direction: rtl; text-align: right; }
                .history-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s ease; }
                .history-card:hover { border-color: #ff6b1a; background: rgba(255,107,26,0.02); }
                .badge-pill-orange { background: rgba(255, 107, 26, 0.1); color: #ff6b1a; padding: 4px 12px; border-radius: 50px; border: 1px solid rgba(255,107,26,0.2); }
                .btn-clear-history { background: transparent; color: #ff6b1a; border: 1px solid rgba(255,107,26,0.3); padding: 5px 15px; border-radius: 50px; font-size: 0.8rem; }
                .btn-clear-history:hover { background: #ff6b1a; color: white; }
                .toast-portal { position: fixed; top: 30px; z-index: 9999; }
                .premium-toast { min-width: 320px; background: #111416; border: 1px solid #ff6b1a; padding: 15px; border-radius: 15px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
                .toast-icon-circle { width: 35px; height: 35px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
            `}</style>
        </div>
    );
};

export default Booking;
