import React, { useState } from 'react';
// Importamos agora tanto os links quanto os dados do médico
import { navLinks, doctorData } from '@/data/doctorData';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* A tag <header> agora precisa ser 'relative' para o posicionamento do nome */}
      <header className="bg-surface shadow-md w-full sticky top-0 z-20">
        <nav className="container-main py-4 flex justify-between items-center relative">
          
          {/* 1. Logo à Esquerda (link para home) */}
          <a href="/" className="z-20">
            <img src={doctorData.logoUrl} alt={`Logo de ${doctorData.name}`} className="h-10 w-auto" />
          </a>

          {/* 2. Nome do Médico Centralizado (visível apenas em telas maiores) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="/" className="font-display text-xl font-bold text-text-base hover:text-primary transition-colors">
              {doctorData.name}
            </a>
          </div>
          
          {/* 3. Itens da Direita (Navegação Desktop e Botão Mobile) */}
          <div className="z-20">
            {/* Navegação Desktop */}
            <ul className="hidden md:flex md:space-x-2">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="btn-ghost">{link.text}</a>
                </li>
              ))}
            </ul>

            {/* Botão Hambúrguer Mobile */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              <div className="w-7 h-7 flex flex-col justify-around">
                <span className={`block w-full h-0.5 transform transition-all duration-300 ${isMenuOpen ? 'bg-surface rotate-45 translate-y-2' : 'bg-text-base'}`}></span>
                <span className={`block w-full h-0.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'bg-text-base'}`}></span>
                <span className={`block w-full h-0.5 transform transition-all duration-300 ${isMenuOpen ? 'bg-surface -rotate-45 -translate-y-2' : 'bg-text-base'}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* O Backdrop e o Menu Drawer continuam exatamente iguais */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-5/6 max-w-sm bg-primary shadow-xl z-40
                       transform transition-transform duration-300 ease-in-out md:hidden
                       ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pt-20">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href} className="text-xl font-semibold text-surface/80 hover:text-surface" onClick={() => setIsMenuOpen(false)}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;