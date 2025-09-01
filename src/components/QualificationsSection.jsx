import React, { useEffect, useState, useRef } from 'react';
import { doctorData } from '@/data/doctorData';
import { TechnologyIcon, HumanizedCareIcon, ExcellenceIcon } from '@/components/QualificationsIcons';

const iconMap = {
  TechnologyIcon,
  HumanizedCareIcon,
  ExcellenceIcon,
};

// Componente para animar a contagem dos números
const AnimatedStat = ({ stat }) => {
  const [count, setCount] = useState(0);
  const target = stat.value;

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 segundos de animação
    const increment = target / (duration / 16); // ~60fps

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
        {/* Seção de Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {isVisible && doctorData.qualifications.stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>

        {/* Seção de Argumentos */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {doctorData.qualifications.arguments.map((arg, index) => {
            const IconComponent = iconMap[arg.icon];
            return (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-base">{arg.title}</h3>
                <p className="text-text-muted mt-2">{arg.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;