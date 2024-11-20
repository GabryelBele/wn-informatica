import React, { useEffect, useState, useRef } from 'react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const carrossel = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<unknown[]>([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);

  if (!testimonials || !testimonials.length) return <p>Carregando depoimentos...</p>;

  const handleScroll = (direction: 'left' | 'right') => {
    if (carrossel.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 20; // Inclui gap entre cards
      carrossel.current.scrollLeft += direction === 'right' ? cardWidth : -cardWidth;
    }
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>Depoimentos</h2>
        <p>Avaliações de alguns dos nossos usuários</p>
      </div>
      <div className="testimonials-carrossel" ref={carrossel}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index} ref={index === 0 ? cardRef : null}>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <p className="testimonial-author">
              - {testimonial.name}, <span>{testimonial.role}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="testimonials-buttons">
        <button onClick={() => handleScroll('left')}>
          <img src="/216151_right_chevron_icon.png" alt="Scroll left" />
        </button>
        <button onClick={() => handleScroll('right')}>
          <img src="/216151_right_chevron_icon.png" alt="Scroll right" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
