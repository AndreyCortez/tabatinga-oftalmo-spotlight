import React from 'react';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Estilos CSS do Swiper (incluindo o de navegação para as setas)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa nossos dados de tratamentos
import { treatmentsData } from '@/data/treatmentsData';


// Componente para o Card de Tratamento
const TreatmentCard = ({ treatment }) => (
  <div className="bg-surface h-full rounded-xl shadow-lg overflow-hidden flex flex-col">
    <img src={treatment.imageUrl} alt={treatment.name} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bold text-xl text-text-base mb-2">{treatment.name}</h3>
      <p className="text-text-muted text-left flex-grow">{treatment.description}</p>
    </div>
  </div>
);

// Componente Principal da Seção de Tratamentos
function TreatmentsSection() {
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
    className: "pb-12 px-8 -mx-8" // Padding para setas e paginação
  };

  return (
    <section id="tratamentos" className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        {/* --- Primeiro Carrossel: Blefaroplastia --- */}
        <div className="text-center mb-16">
          <h2 className="title-main">Tratamentos Oferecidos</h2>
          <p className="subtitle mt-4 max-w-3xl mx-auto">
            Conheça alguns dos principais procedimentos realizados com segurança e tecnologia de ponta.
          </p>
          <h3 className="text-2xl font-bold text-primary mt-12">Cirurgia Plástica Ocular: Blefaroplastia</h3>
        </div>
        <Swiper {...swiperOptions}>
          {treatmentsData.blepharoplasty.map(treatment => (
            <SwiperSlide key={treatment.name} className="h-auto">
              <TreatmentCard treatment={treatment} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Segundo Carrossel: Cirurgias Gerais --- */}
        <div className="text-center mt-20 mb-12">
          <h3 className="text-2xl font-bold text-primary">Outras Cirurgias Oftalmológicas</h3>
        </div>
        <Swiper {...swiperOptions}>
          {treatmentsData.generalSurgeries.map(treatment => (
            <SwiperSlide key={treatment.name} className="h-auto">
              <TreatmentCard treatment={treatment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TreatmentsSection;