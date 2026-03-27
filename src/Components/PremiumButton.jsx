import React from 'react';
import { Link } from 'react-router-dom';

const PremiumButton = ({ to, children, className = '', onClick, type = "link", size = "md", loading = false }) => {
  // Determine precise padding based on requested size (tightened per user request)
  let paddingClass = "btn-md px-3 py-2 fs-6"; // Standard medium
  if (size === "sm") paddingClass = "btn-sm px-2 py-1 fs-7";
  if (size === "lg") paddingClass = "btn-lg px-4 py-2 fs-5";

  // Ultra-premium reusable button styling with shimmer sweep animation and hover float (consistent with Services page)
  const baseClasses = `btn btn-luxury rounded-pill ${paddingClass} fw-bold shadow-lg d-inline-flex align-items-center justify-content-center gap-2 overflow-hidden position-relative ${className} ${loading ? 'disabled' : ''}`;
  
  const content = (
    <>
      <span className="btn-text position-relative z-2">
        {loading ? (
          <span className="d-flex align-items-center gap-2">
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Processing...
          </span>
        ) : children}
      </span>
      {!loading && <i className="fa-solid fa-arrow-right fs-6 ms-1 btn-icon position-relative z-2"></i>}
      <div className="btn-shimmer"></div>
    </>
  );

  // Return standard interactive button or form submit
  if (type !== 'link' || onClick) {
    return (
      <button type={type !== 'link' ? type : 'button'} onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  // Otherwise return React Router Link
  return (
    <Link to={to} className={baseClasses}>
      {content}
    </Link>
  );
};

export default PremiumButton;
