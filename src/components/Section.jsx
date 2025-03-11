import React, { useEffect, useRef } from 'react';

const Section = ({ title, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section" ref={sectionRef}>
      <div className="section-content">
        {title && <h2>{title}</h2>}
        {children}
      </div>
      <div className="divider" />
    </section>
  );
};

export default Section;
