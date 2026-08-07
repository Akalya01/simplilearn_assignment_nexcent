"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import contentData from '@/data/content.json';

const Marketing = () => {
  const { marketing } = contentData;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D] mb-4">{marketing.title}</h2>
          <p className="text-brand-muted text-[16px] leading-relaxed">{marketing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marketing.cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center group pb-8"
            >
              {/* Image Placeholder */}
              <div className="w-full h-[286px] rounded-[8px] overflow-hidden relative">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              </div>
              
              {/* Content Card overlapping */}
              <div className="w-[317px] max-w-[95%] bg-[#F5F7FA] p-6 rounded-[8px] shadow-[0_8px_16px_rgba(171,190,209,0.4)] text-center -mt-[96px] relative z-20">
                <h3 className="text-[20px] font-semibold text-[#717171] mb-4">
                  {card.title}
                </h3>
                <Link
                  href={card.cta.url}
                  className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-primary/80 transition-colors group/link text-[20px]"
                >
                  {card.cta.label}
                  <ArrowRight size={24} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
