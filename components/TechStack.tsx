'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiGit,
  SiDocker,
  SiVercel,
} from 'react-icons/si';

const TECH_STACK = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Technologies I Use
          </h2>
          <p className="text-gray-600">
            Modern tools and frameworks for exceptional results
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-6xl mx-auto"
        >
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <tech.icon
                className="w-10 h-10 mb-2 transition-all group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-xs font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-primary-100">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold text-gray-700">5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-secondary-100">
            <span className="text-2xl">✓</span>
            <span className="font-semibold text-gray-700">100+ Projects</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-primary-100">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold text-gray-700">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-secondary-100">
            <span className="text-2xl">💬</span>
            <span className="font-semibold text-gray-700">24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
