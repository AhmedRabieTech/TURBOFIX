import React from 'react';
// Removed DesignSystem.css import - now linked in index.html

const SectionTitle = ({ text, highlight, subtitle, description, alignment = 'center' }) => {
  // Split the text to safely find and wrap the exact word we want to highlight with our premium orange gradient
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <div className={`text-${alignment} mb-5 fade-in-up`}>
      {subtitle && (
        <span className="badge badge-brand bg-opacity-10 px-3 py-2 rounded-pill mb-3 fw-bold tracking-widest text-uppercase shadow-sm">
           {subtitle}
        </span>
      )}
      <h2 className="display-4 fw-bold mb-3 text-white title-glow tracking-tighter">
        {parts.map((part, index) => 
          part.toLowerCase() === highlight.toLowerCase() ? 
            <span key={index} className="text-gradient-orange">{part}</span> : 
            <span key={index}>{part}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted lead mb-0 fw-medium">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
