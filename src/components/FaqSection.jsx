import React, { useState } from 'react';
import { faqData } from '@/data/faqData.js';

// --- Componentes Auxiliares ---

// Ícone de "seta" para indicar se o item está aberto ou fechado
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

// Componente para um único item do FAQ (pergunta e resposta)
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
        <p className="text-text-muted">{item.answer}</p>
      </div>
    </div>
  );
};


// --- Componente Principal da Seção FAQ ---

function FaqSection() {
  // Estado para controlar qual item do FAQ está aberto. 'null' significa que todos estão fechados.
  const [openIndex, setOpenIndex] = useState(null);

  // Função para lidar com o clique em uma pergunta
  const handleItemClick = (index) => {
    // Se o item clicado já estiver aberto, feche-o. Senão, abra-o.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="title-main">Perguntas Frequentes</h2>
          <p className="subtitle mt-4 max-w-3xl mx-auto">
            Tire suas dúvidas mais comuns sobre nossos serviços e procedimentos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;