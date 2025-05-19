import React, { useState } from 'react';
import { Menu, X, Wine, ShoppingCart, User, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null);
    } else {
      setDropdown(menu);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1A0008]/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-white hover:text-[#FFBF00] transition-colors flex items-center text-sm tracking-wider"
                onClick={() => toggleDropdown('products')}
              >
                PRODUCTS <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {dropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A0008] shadow-xl rounded-md py-2 z-10">
                  <a href="#whiskey" className="block px-4 py-2 text-white hover:bg-[#3A0012] hover:text-[#FFBF00] text-sm">WHISKEY</a>
                  <a href="#wine" className="block px-4 py-2 text-white hover:bg-[#3A0012] hover:text-[#FFBF00] text-sm">WINE</a>
                  <a href="#vodka" className="block px-4 py-2 text-white hover:bg-[#3A0012] hover:text-[#FFBF00] text-sm">VODKA</a>
                  <a href="#gin" className="block px-4 py-2 text-white hover:bg-[#3A0012] hover:text-[#FFBF00] text-sm">GIN</a>
                </div>
              )}
            </div>
            <a href="#about" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">ABOUT</a>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="flex items-center space-x-2">
              <Wine className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFBF00]" />
              <span className="text-white font-serif text-lg sm:text-xl font-bold tracking-wide">
                Elysian Spirits
              </span>
            </div>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">EVENTS</a>
            <a href="#contact" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">CONTACT</a>
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-white hover:text-[#FFBF00] transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#FFBF00] transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1A0008]/95 mt-2 sm:mt-4 rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                className="text-white hover:text-[#FFBF00] transition-colors flex items-center justify-between text-sm tracking-wider"
                onClick={() => toggleDropdown('mobileProducts')}
              >
                PRODUCTS 
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdown === 'mobileProducts' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdown === 'mobileProducts' && (
                <div className="pl-4 flex flex-col space-y-2">
                  <a href="#whiskey" className="text-white hover:text-[#FFBF00] py-1 text-sm">WHISKEY</a>
                  <a href="#wine" className="text-white hover:text-[#FFBF00] py-1 text-sm">WINE</a>
                  <a href="#vodka" className="text-white hover:text-[#FFBF00] py-1 text-sm">VODKA</a>
                  <a href="#gin" className="text-white hover:text-[#FFBF00] py-1 text-sm">GIN</a>
                </div>
              )}
              
              <a href="#about" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">ABOUT</a>
              <a href="#events" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">EVENTS</a>
              <a href="#contact" className="text-white hover:text-[#FFBF00] transition-colors text-sm tracking-wider">CONTACT</a>
              
              <div className="flex space-x-4 pt-2 border-t border-gray-700">
                <button className="text-white hover:text-[#FFBF00] transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-[#FFBF00] transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;