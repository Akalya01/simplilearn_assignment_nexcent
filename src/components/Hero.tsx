"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const Hero = () => {
  const { hero } = contentData;

  return (
    <section className="bg-[#F5F7FA] pt-32 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[36px] lg:text-[64px] font-semibold text-[#4D4D4D] leading-[1.2] lg:leading-[76px] mb-6">
              <span className="block whitespace-nowrap">{hero.titleNormal}</span>
              <span className="text-brand-primary block">{hero.titleGreen}</span>
            </h1>
            <p className="text-brand-muted text-[16px] mb-8 whitespace-nowrap">
              {hero.subtitle}
            </p>
            <Link
              href={hero.cta.url}
              className="inline-block bg-brand-primary text-white px-[32px] py-[14px] rounded-[4px] text-[16px] font-medium hover:bg-brand-primary/90 transition-colors"
            >
              {hero.cta.label}
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            className="flex-1 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-[391px] h-[407px]">
              <img src={hero.image} alt="Hero Illustration" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
