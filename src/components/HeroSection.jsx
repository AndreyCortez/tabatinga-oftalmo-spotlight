import React, { useEffect, useRef, useState } from 'react';
import MainPhoto from '@/assets/main_photo.png';
import { doctorData } from '@/data/doctorData';


// A função foi renomeada para HeroSection
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
    <main id="home" className="flex-grow flex items-center min-h-screen relative bg-main-pattern bg-primary/90 bg-blend-multiply">
      <section ref={sectionRef} className="container-main w-full py-16 md:py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div 
            className={`flex justify-center items-center h-full order-1 md:order-1 
                        transition-all duration-1000 ease-out 
                        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}
          >
            <div className="relative w-full max-w-md">
              <img 
                src={doctorData.imageUrl} 
                alt={`Foto do ${doctorData.name}`}
                className="w-full h-auto max-h-[550px] drop-shadow-xl"
              />
            </div>
          </div>
          
          <div 
            className={`text-center md:text-left order-2 md:order-2 
                        transition-all duration-1000 ease-out delay-300 
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <h1 className="title-main text-4xl md:text-5xl font-extrabold text-surface mt-2">
              {doctorData.name}
            </h1>
            
            <p className="text-lg font-semibold text-surface/80 mt-6">
              {doctorData.specialty}
            </p>

            <p className="text-lg text-surface/80">
              {doctorData.location}
            </p>

            <p className="text-lg text-surface mt-6">
              {doctorData.tagline}
            </p>
            
            <p className="text-lg text-surface/80 mt-2">
              {doctorData.description}
            </p>
            
            <a href="#agendamento" className="btn-primary mt-8 shadow-lg">
              Agende sua Consulta
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}

// A exportação também foi atualizada
export default HeroSection;