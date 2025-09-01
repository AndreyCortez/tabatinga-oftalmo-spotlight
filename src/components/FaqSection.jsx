import React, { useState, useEffect, useRef } from 'react'; // 1. Importa os hooks
import { faqData } from '@/data/faqData.js';

// --- Componentes Auxiliares (sem alterações) ---

const ChevronIcon = ({ isOpen }) => (
  <svg 
    className={`w-6 h-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-text-base">{item.question}</h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-text-muted pr-8">{item.answer}</p>
      </div>
    </div>
  );
};


// --- Componente Principal da Seção FAQ ---

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // 2. Lógica para detectar quando a seção está visível
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // 3. Adiciona a ref para o observador e overflow-hidden
    <section ref={sectionRef} id="faq" className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="container-main">
        {/* Bloco de título animado */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="title-main">Perguntas Frequentes</h2>
          <p className="subtitle mt-4 max-w-3xl mx-auto">
            Tire suas dúvidas mais comuns sobre nossos serviços e procedimentos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            // 4. Wrapper para animar cada item do FAQ individualmente
            <div 
              key={index}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 100}ms` }} // Efeito cascata
            >
              <FaqItem 
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;