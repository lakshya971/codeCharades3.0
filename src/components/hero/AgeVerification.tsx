import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: (verified: boolean) => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVerify = () => {
    setIsVisible(false);
    setTimeout(() => {
      onVerify(true);
    }, 500);
  };

  const handleDeny = () => {
    setIsVisible(false);
    setTimeout(() => {
      onVerify(false);
      // Redirect to an appropriate page or show a message
      window.location.href = 'https://www.responsibility.org/';
    }, 500);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[100] bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-[#1A0008] border border-[#FFBF00]/30 rounded-lg shadow-2xl p-8 max-w-md mx-4 text-center relative">
        <div className="absolute top-4 right-4">
          <button 
            onClick={handleDeny}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-white mb-2">Age Verification</h2>
          <div className="w-16 h-1 bg-[#FFBF00] mx-auto"></div>
        </div>
        
        <p className="text-gray-300 mb-6">
          To enter this site, you must be of legal drinking age in your country of residence.
        </p>
        
        <p className="text-gray-300 mb-8">
          Are you 21 years of age or older?
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
          <button
            onClick={handleVerify}
            className="px-6 py-2.5 bg-[#FFBF00] text-[#1A0008] font-medium rounded-md hover:bg-[#E6AC00] transition-colors"
          >
            Yes, I am 21+
          </button>
          <button
            onClick={handleDeny}
            className="px-6 py-2.5 bg-transparent border border-gray-600 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            No, I am under 21
          </button>
        </div>
        
        <p className="mt-6 text-xs text-gray-400">
          By entering this site you agree to our <a href="#" className="text-[#FFBF00] hover:underline">Terms of Service</a> and <a href="#" className="text-[#FFBF00] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;