import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);
      
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <span ref={elementRef} className="counter-number display-4 fw-bold">
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default Counter;
