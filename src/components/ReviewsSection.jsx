import React, { useEffect, useState, useRef } from 'react'; // 1. Importa os hooks

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { reviewsData } from '@/data/reviewsData';


const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-surface h-full rounded-xl shadow-lg p-8 flex flex-col">
    <div className="flex items-center mb-4">
      <img src={review.avatarUrl} alt={review.author} className="w-14 h-14 rounded-full mr-4 border-2 border-primary/50" />
      <div>
        <p className="font-bold text-text-base">{review.author}</p>
        <StarRating rating={review.rating} />
      </div>
    </div>
    <p className="text-text-muted text-left flex-grow">"{review.text}"</p>
  </div>
);

function ReviewsSection() {
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

  return (
    // 3. Adiciona a ref para o observador e overflow-hidden
    <section ref={sectionRef} id="reviews" className="py-16 md:py-24 bg-bg-neutral overflow-hidden">
      <div className="container-main">
        {/* Bloco de título animado */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="title-main">O Que Nossos Pacientes Dizem</h2>
          <p className="subtitle mt-4 max-w-3xl mx-auto">
            A satisfação e a saúde dos nossos pacientes são nossa maior prioridade.
          </p>
        </div>
        
        {/* Carrossel animado */}
        <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="pb-12"
          >
            {reviewsData.map(review => (
              <SwiperSlide key={review.id} className="h-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;