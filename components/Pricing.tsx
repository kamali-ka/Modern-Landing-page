'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheck } from 'react-icons/hi';
import { PRICING_PLANS } from '@/lib/constants';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
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
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-800'
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 ${
                  plan.highlighted ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <HiCheck
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-primary-600'
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? 'text-white/90' : 'text-gray-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Custom Projects Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-primary-600 font-semibold hover:underline"
            >
              Let&apos;s discuss your project
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
