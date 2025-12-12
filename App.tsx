import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import PerspectiveShowcase from './components/PerspectiveShowcase';
import Location from './components/Location';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

// Versão de correção de Deploy: 1.0.2
const App: React.FC = () => {
  useEffect(() => {
    // Implementação de scroll suave aprimorada
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <PerspectiveShowcase />
        <Location />
      </main>
      <Footer />
      <AIChat />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;