'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiClipboardList,
  HiCode,
  HiRefresh,
  HiCheckCircle,
  HiSupport,
} from 'react-icons/hi';

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Requirements",
    description: "We discuss your project goals, target audience, and specific requirements in detail.",
    icon: HiClipboardList,
  },
  {
    id: 2,
    title: "Design & Development",
    description: "I create wireframes, design mockups, and develop your project using modern technologies.",
    icon: HiCode,
  },
  {
    id: 3,
    title: "Review & Revisions",
    description: "You review the work, provide feedback, and I make necessary revisions until you're satisfied.",
    icon: HiRefresh,
  },
  {
    id: 4,
    title: "Final Delivery",
    description: "After approval, I deliver the final product with all source files and documentation.",
    icon: HiCheckCircle,
  },
  {
    id: 5,
    title: "Post-Launch Support",
    description: "I provide ongoing support and maintenance to ensure everything runs smoothly.",
    icon: HiSupport,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How I Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process to bring your ideas to life
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-primary-200 rounded-full flex items-center justify-center font-bold text-primary-600">
                      {step.id}
                    </div>
                  </motion.div>
                </div>

                {/* Connecting Line (except last item) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 w-0.5 h-24 bg-gradient-to-b from-primary-300 to-transparent" />
                )}

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to get started on your project?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
