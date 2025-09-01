import React, { useEffect, useState, useRef } from 'react'; // 1. Importa os hooks
import { doctorData } from '@/data/doctorData';
import { WhatsAppIcon, InstagramIcon, PhoneIcon, EmailIcon } from '@/components/ContactIcons';

// A função formatPhoneNumber continua a mesma
const formatPhoneNumber = (phone) => {
  if (!phone || phone.length < 10) return phone;
  const areaCode = phone.substring(0, 2);
  const firstPart = phone.substring(2, 6);
  const secondPart = phone.substring(6, 10);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
};

function ContactSection() {
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
    <section ref={sectionRef} id="contato" className="py-16 md:py-24 bg-bg-primary-tint overflow-hidden">
      <div className="container-main">
        {/* Bloco de título animado */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="title-main">Contato e Localização</h2>
          <p className="subtitle mt-4 max-w-3xl mx-auto">
            Entre em contato por um dos canais abaixo ou venha nos visitar. Estamos prontos para atender você.
          </p>
        </div>

        {/* --- O Card Principal Animado --- */}
        <div className={`bg-surface p-8 md:p-12 rounded-2xl shadow-xl max-w-6xl mx-auto
                        transition-all duration-700 ease-out delay-200
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Coluna de Contato */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-text-base">Nossos Canais</h3>
              <a href={`https://wa.me/${doctorData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-bg-primary-tint transition-colors">
                <WhatsAppIcon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-text-base">WhatsApp</p>
                  <p className="text-text-muted">{`+${doctorData.contact.whatsapp.substring(0,2)} ${formatPhoneNumber(doctorData.contact.whatsapp.substring(2))}`}</p>
                </div>
              </a>
              <a href={`https://instagram.com/${doctorData.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-bg-primary-tint transition-colors">
                <InstagramIcon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-text-base">Instagram</p>
                  <p className="text-text-muted">{`@${doctorData.contact.instagram}`}</p>
                </div>
              </a>
               <a href={`tel:${doctorData.contact.phone}`} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-bg-primary-tint transition-colors">
                <PhoneIcon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-text-base">Telefone</p>
                  <p className="text-text-muted">{formatPhoneNumber(doctorData.contact.phone)}</p>
                </div>
              </a>
              <a href={`mailto:${doctorData.contact.email}`} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-bg-primary-tint transition-colors">
                <EmailIcon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold text-text-base">E-mail</p>
                  <p className="text-text-muted break-all">{doctorData.contact.email}</p>
                </div>
              </a>
            </div>

            {/* Coluna do Mapa */}
            <div>
               <h3 className="text-2xl font-bold text-text-base mb-6">Nosso Endreço</h3>
               <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                 <iframe
                  src={doctorData.address.googleMapsEmbedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               </div>
               <p className="text-text-muted mt-4 text-center md:text-left">
                  {doctorData.address.street} <br /> {doctorData.address.city}
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;