// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-t border-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex justify-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center text-sm">
              ₺
            </div>
          </div>
          
          <p className="text-sm text-gray-600 font-medium">
            © {2025} MillionDollarTR - Tüm hakları saklıdır
          </p>
          
          <div className="mt-2 flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
            <div className="w-1 h-1 rounded-full bg-purple-400"></div>
            <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;