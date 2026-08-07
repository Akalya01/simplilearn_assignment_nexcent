"use client";

import React from 'react';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const Clients = () => {
  const { clients } = contentData;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] mb-2">{clients.title}</h2>
          <p className="text-brand-muted text-[16px]">{clients.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-between items-center w-full mt-4">
          {clients.logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="transition-all duration-300"
            >
              <img src={logo} alt={`Client ${index + 1}`} className="h-[48px] w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
