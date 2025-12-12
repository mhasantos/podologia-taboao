
import React from 'react';
import { SERVICES } from '../constants';
import { Heart, ShieldCheck, Activity, PenTool as Tool } from 'lucide-react';

const icons = {
  healing: <Heart className="w-8 h-8" />,
  accessibility: <Activity className="w-8 h-8" />,
  medical_services: <ShieldCheck className="w-8 h-8" />,
  architecture: <Tool className="w-8 h-8" />
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-3">Especialidades</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
          Tratamentos Profissionais <br className="hidden md:block"/> para a Saúde dos Pés
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-teal-100">
                {icons[s.icon as keyof typeof icons]}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {s.description}
              </p>
              <div className="h-1 w-12 bg-teal-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
