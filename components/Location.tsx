import React from 'react';
import { CLINIC_INFO } from '../constants';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 text-white space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-4">Visite nossa clínica</h3>
              <p className="text-gray-400 max-w-sm">Localização privilegiada em Taboão da Serra para melhor atender você e sua família.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 p-3 rounded-xl shrink-0">
                  <MapPin className="text-teal-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 p-3 rounded-xl shrink-0">
                  <Phone className="text-teal-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Telefone / WhatsApp</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{CLINIC_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 p-3 rounded-xl shrink-0">
                  <Clock className="text-teal-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Horário de Atendimento</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Seg à Sex: 09:00 - 18:00<br/>Sábado: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col xs:flex-row gap-4">
               <a 
                 href="https://instagram.com/podologia_pirajussara" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 bg-white/10 px-6 py-4 rounded-xl hover:bg-white/20 transition-all font-bold whitespace-nowrap"
               >
                 <Instagram className="w-5 h-5" /> Instagram
               </a>
               <a 
                 href={`https://wa.me/55${CLINIC_INFO.phone.replace(/\D/g, '')}`}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 bg-teal-600 px-6 py-4 rounded-xl hover:bg-teal-700 transition-all font-bold whitespace-nowrap shadow-lg shadow-teal-900/50"
               >
                 <MessageCircle className="w-5 h-5" /> Agendar Agora
               </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto min-h-[350px] grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.882193563454!2d-46.79356932466782!3d-23.62635397875398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53434190c681%3A0x341f5a9e3d36b856!2sPodologia%20Pirajussara%20Cl%C3%ADnica%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1715432000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-none"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;