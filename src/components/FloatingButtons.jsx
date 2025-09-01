import React from 'react';
import { doctorData } from '@/data/doctorData';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      
      {/* Botão do Instagram */}
      <a 
        href={`https://instagram.com/${doctorData.contact.instagram}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Siga-nos no Instagram"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400
                   flex items-center justify-center text-white 
                   shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {/* 2. Usa o componente de ícone importado */}
        <FaInstagram className="w-8 h-8" />
      </a>
      
      {/* Botão do WhatsApp */}
      <a 
        href={`https://wa.me/${doctorData.contact.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Entre em contato pelo WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] 
                   flex items-center justify-center text-white 
                   shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {/* 2. Usa o componente de ícone importado */}
        <FaWhatsapp className="w-9 h-9" />
      </a>
    </div>
  );
}

export default FloatingButtons;