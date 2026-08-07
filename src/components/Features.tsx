"use client";

import React from 'react';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const Features = () => {
  const { features } = contentData;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] mb-4">{features.title}</h2>
          <p className="text-brand-muted text-[16px]">{features.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="mb-6 relative h-[65px] w-[65px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[49px] bg-[#E8F5E9] rounded-tl-[18px] rounded-br-[18px] rounded-tr-[5px] rounded-bl-[5px] z-0"></div>
                <img src={card.icon} alt={card.title} className="relative z-10 w-[65px] h-[65px] object-contain m-auto" />
              </div>
              <h3 className="text-[28px] font-bold text-[#4D4D4D] mb-4 leading-tight">{card.title}</h3>
              <p className="text-brand-muted text-[14px] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
