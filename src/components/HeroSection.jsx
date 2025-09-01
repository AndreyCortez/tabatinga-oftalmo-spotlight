import React, { useEffect, useRef, useState } from 'react';
import { doctorData } from '@/data/doctorData';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
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
    <main 
      id="home"
      style={{ backgroundImage: `url(${doctorData.hero.backgroundImageUrl})` }}
      className="flex-grow flex items-end lg:min-h-[900px] md:min-h-[550px] min-h-screen sm:h-auto md:aspect-[16/7] relative bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div 
        className="absolute inset-0 bg-bg-primary-tint/80" 
        aria-hidden="true"
      ></div>

      {/* AQUI ESTÁ A ALTERAÇÃO: 'overflow-hidden' foi adicionado para cortar qualquer conteúdo que exceda os limites da seção */}
      <section ref={sectionRef} className="container-main md:max-h-[900px] w-full py-10 md:py-0 relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-end">
          
          <div 
            className={`flex justify-center items-end h-full order-1 md:order-1 relative z-10
                        transition-all duration-1000 ease-out 
                        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}
          >
            <div className="relative w-full max-w-md md:max-w-none md:mr-[-50px]">
              <img 
                src={doctorData.doctorImageUrl} 
                alt={`Foto do ${doctorData.name}`}
                className="w-full h-full max-h-[100vh] drop-shadow-xl"
              />
            </div>
          </div>
          
          <div 
            className={`order-2 md:order-2 md:self-center
                        transition-all duration-1000 ease-out delay-300 
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} md:py-8`}
          >
            <div className="bg-surface/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg text-center md:text-left">
              <p className="text-lg font-semibold text-primary">
                {doctorData.specialty}
              </p>
              <h1 className="title-main text-text-base mt-2">
                {doctorData.name}
              </h1>
              <p className="subtitle mt-1">
                {doctorData.location}
              </p>
              <p className="text-lg text-text-base mt-6">
                {doctorData.tagline}
              </p>
              {/* <p className="subtitle mt-2">
                {doctorData.description}
              </p> */}
              <a href="#agendamento" className="btn-primary mt-8 shadow-lg">
                Agende sua Consulta
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default HeroSection;

