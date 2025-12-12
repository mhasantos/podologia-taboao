
import React from 'react';
import { CLINIC_INFO } from '../constants';
import { Layout, Smartphone, MousePointer2 } from 'lucide-react';

const PerspectiveShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-teal-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/3 text-white z-10">
            <h2 className="text-teal-400 font-bold tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
              <Layout className="w-4 h-4" /> Design de Última Geração
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Interface Fluida e Experiência Digital <span className="text-teal-400 underline decoration-2 underline-offset-8">Imersiva</span>
            </h3>
            <p className="text-teal-100/70 text-lg leading-relaxed mb-8">
              Utilizamos tecnologias de ponta para garantir que seu primeiro contato com a {CLINIC_INFO.name} seja tão cuidadoso quanto nossos tratamentos.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-teal-100">
                <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span>Totalmente Responsivo</span>
              </div>
              <div className="flex items-center gap-4 text-teal-100">
                <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center">
                  <MousePointer2 className="w-5 h-5" />
                </div>
                <span>Navegação Intuitiva</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 relative h-[500px] w-full flex items-center justify-center">
            {/* 3D Container */}
            <div className="relative w-full max-w-lg transition-all duration-700 hover:scale-105" 
                 style={{ 
                   perspective: '2000px',
                   transformStyle: 'preserve-3d'
                 }}>
              
              {/* Layer 3 (Bottom/Back) - Services */}
              <div className="absolute top-0 left-0 w-full bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transition-all duration-500 hover:translate-x-10 hover:-translate-y-10"
                   style={{
                     transform: 'rotateX(50deg) rotateZ(-30deg) translateZ(-60px)',
                     opacity: 0.6
                   }}>
                <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 bg-teal-50 rounded"></div>
                  <div className="h-20 bg-teal-50 rounded"></div>
                </div>
              </div>

              {/* Layer 2 (Middle) - Reviews */}
              <div className="absolute top-10 left-10 w-full bg-white rounded-xl shadow-2xl p-6 border border-gray-100 transition-all duration-500 hover:translate-x-5 hover:-translate-y-5"
                   style={{
                     transform: 'rotateX(50deg) rotateZ(-30deg) translateZ(0px)',
                   }}>
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 bg-amber-400 rounded-full"></div>)}
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-100 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100"></div>
                  <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Layer 1 (Top/Front) - Hero/Title */}
              <div className="absolute top-20 left-20 w-full bg-teal-600 rounded-xl shadow-[0_50px_100px_rgba(0,0,0,0.3)] p-8 text-white transition-all duration-500 hover:translate-x-0 hover:-translate-y-0"
                   style={{
                     transform: 'rotateX(50deg) rotateZ(-30deg) translateZ(80px)',
                   }}>
                <div className="h-6 w-32 bg-teal-400/30 rounded-full mb-6"></div>
                <h4 className="text-2xl font-bold mb-4 leading-tight">Saúde para<br/>seus pés.</h4>
                <div className="h-10 w-full bg-white/20 rounded-lg"></div>
                
                {/* Float elements */}
                <div className="absolute -right-8 -top-8 bg-green-500 p-4 rounded-2xl shadow-xl animate-bounce-slow">
                  <div className="w-8 h-8 rounded-full border-2 border-white/50"></div>
                </div>
              </div>

              {/* Chat Bubble Layer */}
              <div className="absolute -right-12 bottom-0 w-48 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-500"
                   style={{
                     transform: 'rotateX(50deg) rotateZ(-30deg) translateZ(140px)',
                   }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full bg-teal-50 rounded"></div>
                  <div className="h-2 w-full bg-teal-50 rounded"></div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateZ(20px); }
          50% { transform: translateY(-20px) translateZ(20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default PerspectiveShowcase;
