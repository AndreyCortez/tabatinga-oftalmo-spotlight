import React from 'react';
// Importamos tanto os dados do médico quanto os links de navegação
import { doctorData, navLinks } from '@/data/doctorData';

// Um pequeno ícone para o crédito do desenvolvedor
const DevIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);


function Footer() {
  // Pega o ano atual dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-base text-surface">
      <div className="container-main py-12">
        {/* Seção principal do footer com 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Coluna 1: Nome e Credenciais */}
          <div>
            <h3 className="font-bold text-lg">{doctorData.name}</h3>
            <p className="text-sm text-surface/70 mt-2">
              CRM/SP: {doctorData.credentials.crm} <br />
              RQE: {doctorData.credentials.rqe}
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contato</h3>
            <a href={`tel:${doctorData.contact.phone}`} className="block text-sm text-surface/70 hover:text-surface transition-colors">
              Tel: {doctorData.contact.phone}
            </a>
            <a href={`mailto:${doctorData.contact.email}`} className="block text-sm text-surface/70 hover:text-surface transition-colors mt-1">
              {doctorData.contact.email}
            </a>
          </div>

          {/* Coluna 3: Navegação Rápida */}
          <div>
            <h3 className="font-bold text-lg mb-2">Navegação</h3>
            <ul>
              {navLinks.map(link => (
                <li key={link.text} className="mt-1">
                  <a href={link.href} className="text-sm text-surface/70 hover:text-surface transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior com copyright e crédito */}
        <div className="mt-12 pt-8 border-t border-surface/20 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-xs text-surface/50">
            &copy; {currentYear} {doctorData.name}. Todos os direitos reservados.
          </p>
          <a 
            href={doctorData.developer.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-xs text-surface/50 hover:text-surface transition-colors mt-4 md:mt-0"
          >
            <DevIcon className="w-4 h-4" />
            <span>Desenvolvido por {doctorData.developer.name}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;