// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "CEO, TechStart Inc.",
//     content: "Exceptional work! The website exceeded our expectations. Professional, responsive, and delivered on time. Highly recommend!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Product Manager, Digital Co.",
//     content: "Outstanding developer with great communication skills. Turned our vision into reality flawlessly. Will definitely work together again!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     role: "Founder, Creative Studio",
//     content: "Highly skilled and professional. The UI/UX work was phenomenal. Fast turnaround and excellent quality. 10/10!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     id: 4,
//     name: "David Martinez",
//     role: "E-commerce Owner",
//     content: "Transformed my online store completely. Sales increased by 40% after the redesign. Worth every penny!",
//     rating: 5,
//     avatar: "https://i.pravatar.cc/150?img=7",
//   },
// ];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
//   };

//   const currentTestimonial = TESTIMONIALS[currentIndex];

//   return (
//     <section
//       id="testimonials"
//       className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
//       ref={ref}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//             Client Testimonials
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Don&apos;t just take my word for it - hear what my clients have to say
//           </p>
//         </motion.div>

//         {/* Testimonial Carousel */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
//             {/* Quote Icon */}
//             <div className="absolute top-8 left-8 text-6xl text-primary-200 font-serif">
//               "
//             </div>

//             {/* Stars */}
//             <div className="flex justify-center mb-6">
//               {[...Array(currentTestimonial.rating)].map((_, i) => (
//                 <HiStar key={i} className="w-6 h-6 text-yellow-400" />
//               ))}
//             </div>

//             {/* Testimonial Content */}
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="text-center"
//             >
//               <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
//                 {currentTestimonial.content}
//               </p>

//               {/* Avatar and Info */}
//               <div className="flex items-center justify-center gap-4">
//                 <img
//                   src={currentTestimonial.avatar}
//                   alt={currentTestimonial.name}
//                   className="w-16 h-16 rounded-full border-4 border-primary-100"
//                 />
//                 <div className="text-left">
//                   <h4 className="font-bold text-gray-900">
//                     {currentTestimonial.name}
//                   </h4>
//                   <p className="text-sm text-gray-600">
//                     {currentTestimonial.role}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-center gap-4 mt-8">
//               <motion.button
//                 onClick={prevTestimonial}
//                 className="p-3 bg-gray-100 hover:bg-primary-500 hover:text-white rounded-full transition-all"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <HiChevronLeft className="w-6 h-6" />
//               </motion.button>
//               <motion.button
//                 onClick={nextTestimonial}
//                 className="p-3 bg-gray-100 hover:bg-primary-500 hover:text-white rounded-full transition-all"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <HiChevronRight className="w-6 h-6" />
//               </motion.button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex justify-center gap-2 mt-6">
//               {TESTIMONIALS.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-all ${
//                     index === currentIndex
//                       ? 'bg-primary-600 w-8'
//                       : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
//         >
//           <div className="text-center p-4">
//             <h3 className="text-3xl font-bold text-primary-600 mb-1">100+</h3>
//             <p className="text-gray-600">Projects Done</p>
//           </div>
//           <div className="text-center p-4">
//             <h3 className="text-3xl font-bold text-primary-600 mb-1">50+</h3>
//             <p className="text-gray-600">Happy Clients</p>
//           </div>
//           <div className="text-center p-4">
//             <h3 className="text-3xl font-bold text-primary-600 mb-1">5.0</h3>
//             <p className="text-gray-600">Average Rating</p>
//           </div>
//           <div className="text-center p-4">
//             <h3 className="text-3xl font-bold text-primary-600 mb-1">24/7</h3>
//             <p className="text-gray-600">Support</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
