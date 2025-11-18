'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS, SITE_CONFIG } from '@/lib/constants';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I&apos;m a passionate full-stack developer and designer with years of
              experience creating beautiful, functional websites and applications.
              I specialize in building modern web solutions using cutting-edge
              technologies like React, Next.js, and TypeScript.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My approach combines technical expertise with creative design thinking
              to deliver projects that not only look great but also perform
              exceptionally well. I&apos;m committed to writing clean, maintainable
              code and creating user experiences that delight.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">5+</h4>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">100+</h4>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">50+</h4>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <h4 className="text-3xl font-bold text-primary-600 mb-1">24/7</h4>
                <p className="text-gray-600 text-sm">Support Available</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="font-medium text-primary-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
