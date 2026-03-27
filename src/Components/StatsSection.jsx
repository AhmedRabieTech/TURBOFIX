import React from 'react';
import Counter from './Counter';

const StatsSection = () => {
  const statsData = [
    { label: "Years Experience", target: 15, suffix: "+", icon: "fa-calendar-check", duration: 1500 },
    { label: "Happy Clients", target: 10000, suffix: "+", icon: "fa-face-smile", duration: 2500 },
    { label: "Certified Mechanics", target: 25, suffix: "", icon: "fa-user-gear", duration: 1800 },
    { label: "Service Bays", target: 12, suffix: "", icon: "fa-warehouse", duration: 1200 }
  ];

  return (
    <section className="stats-section py-5 my-0 position-relative overflow-hidden" style={{ background: '#090a0b' }}>
      <div className="container py-lg-5 position-relative z-1">
        <div className="row g-4 justify-content-center">
          {statsData.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 border-0 bg-card-dark p-4 rounded-4 shadow-2xl transition-all scale-hover text-center">
                <div className="card-body d-flex flex-column align-items-center justify-content-center gap-3">
                  <div className="icon-badge bg-primary-orange-light p-3 rounded-circle mb-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    <i className={`fa-solid ${stat.icon} fs-2 text-primary-orange`}></i>
                  </div>
                  <div className="stat-content">
                    <Counter 
                      target={stat.target} 
                      duration={stat.duration} 
                      suffix={stat.suffix} 
                    />
                    <p className="text-uppercase text-muted small fw-bold tracking-widest mt-2 mb-0">{stat.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-card-dark { background-color: #16181b; }
        .text-primary-orange { color: #ff6b1a; }
        .bg-primary-orange-light { background-color: rgba(255, 107, 26, 0.05); }
        .scale-hover:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 20px 40px -10px rgba(255, 107, 26, 0.2) !important;
          border: 1px solid rgba(255, 107, 26, 0.1) !important;
        }
        .shadow-2xl { box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.4); }
        .tracking-widest { letter-spacing: 0.15em; }
        @media (max-width: 768px) {
           .stats-section .display-4 { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
