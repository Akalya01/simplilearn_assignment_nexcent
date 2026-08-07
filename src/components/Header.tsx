"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import contentData from '@/data/content.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = contentData;

  return (
    <header className="w-full bg-brand-light transition-all duration-300">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[84px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={header.logo} alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {header.links.map((link, index) => (
              <Link 
                key={index} 
                href={link.url}
                className={`text-[16px] transition-colors ${index === 0 ? 'text-[#18191F] font-semibold' : 'text-[#18191F] font-normal hover:text-brand-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-[34px]">
            <Link 
              href={header.login.url}
              className="text-[14px] text-brand-primary font-medium hover:text-brand-primary/80 transition-colors"
            >
              {header.login.label}
            </Link>
            <Link 
              href={header.signup.url}
              className="text-[14px] bg-brand-primary text-white px-5 py-2.5 rounded-md font-medium hover:bg-brand-primary/90 transition-colors"
            >
              {header.signup.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-secondary hover:text-brand-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            {header.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="block px-3 py-3 text-base font-medium text-brand-secondary hover:text-brand-primary hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <Link
                href={header.login.url}
                className="w-full text-center px-4 py-2 border border-brand-primary text-brand-primary rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.login.label}
              </Link>
              <Link
                href={header.signup.url}
                className="w-full text-center px-4 py-2 bg-brand-primary text-white rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {header.signup.label}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
