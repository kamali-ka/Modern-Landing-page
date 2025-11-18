'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const FAQS = [
  {
    id: 1,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple landing page takes 3-5 days, while a full website can take 2-4 weeks. I always provide a detailed timeline during our initial consultation.",
  },
  {
    id: 2,
    question: "Do you offer revisions?",
    answer: "Yes! All packages include revisions. Basic packages include 2-3 revisions, while premium packages offer unlimited revisions until you're completely satisfied.",
  },
  {
    id: 3,
    question: "What technologies do you work with?",
    answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, and various databases. I choose the best tech stack for your specific needs.",
  },
  {
    id: 4,
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All websites I create are fully responsive and optimized for mobile, tablet, and desktop devices. Mobile-first design is a standard in all my projects.",
  },
  {
    id: 5,
    question: "Do you provide post-launch support?",
    answer: "Yes! I offer ongoing support and maintenance packages. Basic support is included for 30 days after launch, and extended support packages are available.",
  },
  {
    id: 6,
    question: "Can you help with SEO?",
    answer: "Yes! I implement SEO best practices in all projects, including proper meta tags, semantic HTML, fast loading times, and mobile optimization. Advanced SEO services are also available.",
  },
  {
    id: 7,
    question: "What is your payment structure?",
    answer: "Typically, I require 50% upfront and 50% upon completion. For larger projects, we can arrange milestone-based payments. I accept various payment methods for your convenience.",
  },
  {
    id: 8,
    question: "Will I own the code and design?",
    answer: "Yes! Upon final payment, you receive full ownership of all code, designs, and assets. I also provide documentation to help you understand and maintain your project.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? I&apos;ve got answers!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="w-6 h-6 text-primary-600 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
