'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiCode,
  HiColorSwatch,
  HiShoppingCart,
  HiDatabase,
  HiLightBulb,
} from 'react-icons/hi';
import { SERVICES } from '@/lib/constants';

const iconMap: { [key: string]: JSX.Element } = {
  code: <HiCode className="w-8 h-8" />,
  palette: <HiColorSwatch className="w-8 h-8" />,
  shopping: <HiShoppingCart className="w-8 h-8" />,
  database: <HiDatabase className="w-8 h-8" />,
  lightbulb: <HiLightBulb className="w-8 h-8" />,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <motion.div
                className="mb-6 p-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {iconMap[service.icon]}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
