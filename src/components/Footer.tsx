"use client";

import React from 'react';
import Link from 'next/link';
import { Camera, Hash, Globe, Play, Send } from 'lucide-react';
import contentData from '@/data/content.json';

const IconMap: Record<string, React.ElementType> = {
  instagram: Camera,
  dribbble: Hash,
  twitter: Globe,
  youtube: Play,
};

const Footer = () => {
  const { footer } = contentData;

  return (
    <footer className="bg-[#263238] text-white pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Col */}
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-center gap-2">
            <img src={footer.logo} alt="Logo" className="h-[24px] w-auto" />
          </div>
          <p className="text-[#F5F7FA] text-[14px] mt-6 mb-10 leading-relaxed">
            {footer.copyright}
          </p>
          <div className="flex space-x-[16px]">
            {footer.socials.map((social, index) => {
              const Icon = IconMap[social.icon];
              return (
                <Link
                  key={index}
                  href={social.url}
                  className="bg-white/10 w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-brand-primary transition-colors duration-300"
                >
                  {Icon && <Icon size={16} className="text-white" />}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Links Cols */}
        {footer.links.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-[20px] font-semibold text-white">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link
                    href={item.url}
                    className="text-[#F5F7FA] text-[14px] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Col */}
        <div className="space-y-6">
          <h3 className="text-[20px] font-semibold text-white">{footer.newsletter.title}</h3>
          <div className="relative">
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="w-[255px] max-w-full h-[40px] bg-white/20 text-[14px] text-white placeholder-[#D9DBE1] rounded-[8px] px-[12px] pr-[40px] focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
