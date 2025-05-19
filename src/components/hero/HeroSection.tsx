import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import AgeVerification from './AgeVerification';
import HeroContent from './HeroContent';

const HeroSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setAgeVerified(true);
      setShowAgeModal(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleAgeVerification = (verified: boolean) => {
    if (verified) {
      setAgeVerified(true);
      localStorage.setItem('ageVerified', 'true');
    }
    setShowAgeModal(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#121212]">
      {showAgeModal && (
        <AgeVerification onVerify={handleAgeVerification} />
      )}
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7291382/pexels-photo-7291382.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          transform: scrolled ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Navbar */}
      <Navbar scrolled={scrolled} />
      
      {/* Hero Content */}
      <HeroContent />
      
      {/* Age Disclaimer */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white/50 text-sm tracking-wider uppercase">
          Must be 21+ to purchase. Please drink responsibly.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;