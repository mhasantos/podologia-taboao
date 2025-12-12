
import React from 'react';
import { CLINIC_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">Podologia Pirajussara</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Cuidando da saúde dos seus pés com profissionalismo e dedicação desde 2009. Especialistas em tratamentos clínicos e preventivos.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#inicio" className="hover:text-teal-600 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-teal-600 transition-colors">Serviços</a></li>
              <li><a href="#avaliacoes" className="hover:text-teal-600 transition-colors">Avaliações</a></li>
              <li><a href="#contato" className="hover:text-teal-600 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900">Fale Conosco</h4>
            <p className="text-sm text-gray-500">
              Av. Fernando Fernandes, 87<br/>
              Taboão da Serra - SP<br/>
              Fone: {CLINIC_INFO.phone}
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Podologia Pirajussara Clínica Especializada. Todos os direitos reservados.</p>
          <p className="mt-2 font-medium text-gray-300 tracking-widest">DESIGNED FOR EXCELLENCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
