
import React from 'react';
import { CLINIC_INFO } from '../constants';
// Added missing Star icon to the imports
import { ShieldCheck, Clock, Award, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-32 pb-16 lg:pt-48 lg:pb-32 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-bold tracking-wide animate-fade-in">
              <Award className="w-4 h-4 mr-2" /> 15+ ANOS CUIDANDO DA SAÚDE DOS SEUS PÉS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
              Saúde e Bem-estar para <span className="text-teal-600">cada passo</span> que você der.
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Tratamentos especializados em podologia clínica, pé diabético e unhas encravadas em Taboão da Serra. Tecnologia, esterilização rigorosa e atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/55${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                className="inline-flex justify-center items-center bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-700 transition-all shadow-xl hover:-translate-y-1"
              >
                Agendar Avaliação Grátis
              </a>
              <a 
                href="#servicos"
                className="inline-flex justify-center items-center bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all shadow-md"
              >
                Nossos Serviços
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-teal-600 w-5 h-5" />
                <span className="text-sm font-semibold text-gray-700">100% Esterilizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-teal-600 w-5 h-5" />
                <span className="text-sm font-semibold text-gray-700">Hora Marcada</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-teal-600 w-5 h-5" />
                <span className="text-sm font-semibold text-gray-700">Nota Máxima</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                alt="Clínica de Podologia" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-teal-600 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Star className="text-teal-600 fill-teal-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5.0</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Média de satisfação</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
