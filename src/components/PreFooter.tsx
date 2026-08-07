"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import contentData from '@/data/content.json';

const PreFooter = () => {
  const { preFooter } = contentData;

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[36px] md:text-[64px] font-semibold text-[#263238] mb-10 leading-[1.2] md:leading-[76px]">
            {preFooter.title}
          </h2>
          <Link
            href={preFooter.cta.url}
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-[32px] py-[14px] rounded-[4px] text-[16px] font-medium hover:bg-brand-primary/90 transition-colors"
          >
            {preFooter.cta.label}
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooter;
