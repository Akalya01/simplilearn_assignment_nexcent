"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const About = () => {
  const { about } = contentData;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Illustration */}
          <motion.div 
            className="flex-1 w-full flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[442px]">
               <img src={about.image} alt="About" className="w-full h-auto object-contain" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[36px] font-semibold text-[#4D4D4D] mb-6 leading-tight max-w-sm">
              {about.title}
            </h2>
            <p className="text-brand-muted text-[14px] mb-8 leading-relaxed">
              {about.description}
            </p>
            <Link
              href={about.cta.url}
              className="inline-block bg-brand-primary text-white px-[32px] py-[14px] rounded-[4px] text-[16px] font-medium hover:bg-brand-primary/90 transition-colors"
            >
              {about.cta.label}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
