import React, { useEffect, useState, useRef } from 'react';
import { doctorData } from '@/data/doctorData';
import { TechnologyIcon, HumanizedCareIcon, ExcellenceIcon } from '@/components/QualificationsIcons';

// 1. Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// 2. Estilos CSS do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const iconMap = {
  TechnologyIcon,
  HumanizedCareIcon,
  ExcellenceIcon,
};

// O componente AnimatedStat continua o mesmo...
const AnimatedStat = ({ stat }) => {
  const [count, setCount] = useState(0);
  const target = stat.value;
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const updateCount = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(updateCount);
  }, [target]);
  return (
    <div className="text-center">
      <h2 className="font-display text-5xl md:text-6xl font-extrabold text-primary">
        +{count.toLocaleString('pt-BR')}
      </h2>
      <p className="text-text-muted mt-2">{stat.label}</p>
    </div>
  );
};

function QualificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // O useEffect para o IntersectionObserver continua o mesmo...
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-primary-tint">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {isVisible && doctorData.qualifications.stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>

        {/* 3. Seção de Argumentos AGORA COM CARROSSEL E ANIMAÇÃO */}
        <div 
          className={`mt-20 transition-all duration-1000 ease-out delay-500
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {doctorData.qualifications.arguments.map((arg, index) => {
              const IconComponent = iconMap[arg.icon];
              return (
                <SwiperSlide key={index} className="h-auto">
                  {/* O card agora está dentro de um slide */}
                  <div className="text-center p-6 flex flex-col items-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-base">{arg.title}</h3>
                    <p className="text-text-muted mt-2">{arg.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;