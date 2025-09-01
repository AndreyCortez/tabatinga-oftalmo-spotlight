import React from 'react';
import HeroSection from '@/components/HeroSection';
import QualificationsSection from '@/components/QualificationsSection'; // 1. Importa a nova seção
import TreatmentsSection from '@/components/TreatmentsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <QualificationsSection />
      <TreatmentsSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

export default HomePage;