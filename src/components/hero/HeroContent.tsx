import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-[#FFBF00] text-xs sm:text-sm tracking-[0.3em] uppercase mb-2 sm:mb-4">Where</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-2 sm:mb-4 tracking-wider">
            TRADITION
          </h1>
          <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-8">meets</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#FFBF00] leading-tight mb-8 sm:mb-12 tracking-wider">
            INNOVATION
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mt-8 sm:mt-12">
            <div className="text-center">
              <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1 sm:mb-2">Aged to Perfection</p>
              <p className="text-white text-base sm:text-lg font-serif">Premium Whiskey</p>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1 sm:mb-2">Crafted with Care</p>
              <p className="text-white text-base sm:text-lg font-serif">Artisanal Spirits</p>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-16">
            <button className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-[#FFBF00] text-[#FFBF00] text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#FFBF00] hover:text-black transition-all duration-300">
              Discover Our Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;