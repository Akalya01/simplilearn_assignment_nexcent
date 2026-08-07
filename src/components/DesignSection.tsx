"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const DesignSection = () => {
  const { design } = contentData;

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
            <div className="relative w-full max-w-[400px]">
               <img src={design.image} alt="Design" className="w-full h-auto object-contain" />
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
            <h2 className="text-3xl font-semibold text-brand-secondary mb-6 leading-tight">
              {design.title}
            </h2>
            <p className="text-brand-muted text-sm mb-8 leading-relaxed">
              {design.description}
            </p>
            <Link
              href={design.cta.url}
              className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded-md font-medium hover:bg-brand-primary/90 transition-colors shadow-sm"
            >
              {design.cta.label}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DesignSection;
