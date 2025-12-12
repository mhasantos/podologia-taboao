
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import PerspectiveShowcase from './components/PerspectiveShowcase';
import Location from './components/Location';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <PerspectiveShowcase />
        <Location />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
