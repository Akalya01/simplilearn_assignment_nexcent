"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import contentData from '@/data/content.json';

const Testimonial = () => {
  const { testimonial } = contentData;

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Logo / Image */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[326px] h-[326px] rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center">
              <img src={testimonial.logo} alt="Tesla Logo" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#717171] text-[16px] font-medium mb-6 leading-relaxed">
              {testimonial.quote}
            </p>
            <h4 className="text-[20px] font-semibold text-brand-primary mb-2">
              {testimonial.author}
            </h4>
            <p className="text-[#89939E] text-[16px] mb-8">
              {testimonial.role}
            </p>

            <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-8">
              <div className="flex items-center gap-6 opacity-60">
                {testimonial.logos.map((logo, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, opacity: 1 }} className="transition-all duration-300">
                    <img src={logo} alt={`Client ${index + 1}`} className="h-[48px] w-[48px] object-contain" />
                  </motion.div>
                ))}
              </div>
              <Link
                href={testimonial.cta.url}
                className="flex items-center gap-2 text-brand-primary text-[20px] font-semibold hover:text-brand-primary/80 transition-colors ml-auto group"
              >
                {testimonial.cta.label}
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
