
import React, { useState } from 'react';
import { Menu, X, Star, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 block leading-tight">Podologia Pirajussara</span>
              <div className="flex items-center text-xs text-amber-500 font-semibold">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <span className="ml-1 text-gray-500">5.0 (46 avaliações)</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#inicio" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Início</a>
            <a href="#servicos" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Serviços</a>
            <a href="#avaliacoes" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Avaliações</a>
            <a 
              href={`https://wa.me/55${CLINIC_INFO.phone.replace(/\D/g, '')}`}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Agendar Consulta
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium py-2">Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium py-2">Serviços</a>
          <a href="#avaliacoes" onClick={() => setIsOpen(false)} className="block text-gray-700 font-medium py-2">Avaliações</a>
          <a 
            href={`https://wa.me/55${CLINIC_INFO.phone.replace(/\D/g, '')}`}
            className="block bg-teal-600 text-white text-center px-6 py-3 rounded-full font-semibold"
          >
            Agendar WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
