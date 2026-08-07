"use client";

import React from 'react';
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

const Stats = () => {
  const { stats } = contentData;

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Header */}
          <div className="flex-1 w-full">
            <h2 className="text-[36px] font-semibold text-[#4D4D4D] mb-2 leading-tight">
              {stats.titleNormal}
              <span className="text-brand-primary block">{stats.titleGreen}</span>
            </h2>
            <p className="text-brand-muted text-[16px] mt-2">
              {stats.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <img src={stat.icon} alt={stat.label} className="w-[48px] h-[48px] object-contain shrink-0" />
                <div>
                  <h3 className="text-[28px] font-bold text-[#4D4D4D]">{stat.value}</h3>
                  <p className="text-brand-muted text-[16px]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
