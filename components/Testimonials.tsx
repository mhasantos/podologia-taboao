
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3">O que dizem os pacientes</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Satisfação 100% Comprovada</h3>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">Excelente</p>
              <p className="text-sm text-gray-500">Baseado em 46 avaliações</p>
            </div>
            <div className="flex gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <Quote className="w-10 h-10 text-teal-100 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-teal-600 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/place/Podologia+Pirajussara+Cl%C3%ADnica+Especializada/@-23.6263539,-46.7909944,17z/data=!4m8!3m7!1s0x94ce53434190c681:0x341f5a9e3d36b856!8m2!3d-23.6263539!4d-46.7909944!9m1!1b1!16s%2Fg%2F11f_sw376c?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 font-bold hover:underline gap-2"
          >
            Ver mais avaliações no Google Maps
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
