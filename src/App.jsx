import React from 'react';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <HomePage />
      <Footer />
      <FloatingButtons /> 
    </div>
  );
}

export default App;