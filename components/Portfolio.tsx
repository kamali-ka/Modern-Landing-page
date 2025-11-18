'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent projects and achievements
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl shadow-lg">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Portfolio Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m currently working on some exciting projects to showcase here.
              Check back soon to see my latest work!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                React
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                Next.js
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md">
                Framer Motion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
