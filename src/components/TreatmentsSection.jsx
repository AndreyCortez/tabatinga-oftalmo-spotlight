import React, { useEffect, useState, useRef } from 'react'; // 1. Importa os hooks necessários

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Estilos CSS do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa nossos dados de tratamentos
import { treatmentsData } from '@/data/treatmentsData';


// O componente TreatmentCard continua o mesmo
const TreatmentCard = ({ treatment }) => (
  <div className="bg-surface h-full rounded-xl shadow-lg overflow-hidden flex flex-col">
    <img src={treatment.imageUrl} alt={treatment.name} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bold text-xl text-text-base mb-2">{treatment.name}</h3>
      <p className="text-text-muted text-left flex-grow">{treatment.description}</p>
    </div>
  </div>
);


function TreatmentsSection() {
  // 2. Lógica para detectar quando a seção está visível na tela
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
      { threshold: 0.2 } // Dispara quando 20% da seção estiver visível
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const swiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: true,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    className: "pb-12 px-8 -mx-8"
  };

  return (
    // 3. Adiciona a ref para o observador
    <section ref={sectionRef} id="tratamentos" className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="container-main">
        
        {/* Bloco de título animado */}
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="title-main">Tratamentos Oferecidos</h2>
            <p className="subtitle mt-4 max-w-3xl mx-auto">
              Conheça alguns dos principais procedimentos realizados com segurança e tecnologia de ponta.
            </p>
            <h3 className="text-2xl font-bold text-primary mt-12">Cirurgia Plástica Ocular: Blefaroplastia</h3>
          </div>
        </div>

        {/* Primeiro Carrossel animado */}
        <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper {...swiperOptions}>
            {treatmentsData.blepharoplasty.map(treatment => (
              <SwiperSlide key={treatment.name} className="h-auto">
                <TreatmentCard treatment={treatment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bloco de subtítulo animado */}
        <div className={`transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mt-20 mb-12">
            <h3 className="text-2xl font-bold text-primary">Outras Cirurgias Oftalmológicas</h3>
          </div>
        </div>

        {/* Segundo Carrossel animado */}
        <div className={`transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper {...swiperOptions}>
            {treatmentsData.generalSurgeries.map(treatment => (
              <SwiperSlide key={treatment.name} className="h-auto">
                <TreatmentCard treatment={treatment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default TreatmentsSection;