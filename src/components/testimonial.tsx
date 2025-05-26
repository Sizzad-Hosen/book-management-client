'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      "BookSwap has completely changed how I buy and sell books. The platform is easy to use and I've connected with so many fellow readers!",
    name: 'Jessica Miller',
    role: 'Book Collector',
    image:
      'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
  },
  {
    id: 2,
    quote:
      "As a college student, I've saved so much money buying textbooks through BookSwap. The messaging feature makes it easy to arrange meetings.",
    name: 'David Chen',
    role: 'Student',
    image:
      'https://media.istockphoto.com/id/1445597021/photo/black-man-phone-and-social-media-in-city-reading-text-message-or-communication-on-social.jpg?s=612x612&w=0&k=20&c=B7pEc-0pgtUw33hz9P5-row1Go3YwwHacUJrE-lCNgA=',
  },
  {
    id: 3,
    quote:
      "I've been able to find rare books that I couldn't find anywhere else. The community here is incredibly helpful and passionate about reading.",
    name: 'Amanda Roberts',
    role: 'Book Enthusiast',
    image:
      'https://t4.ftcdn.net/jpg/01/15/85/23/360_F_115852367_E6iIYA8OxHDmRhjw7kOq4uYe4t440f14.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-xl text-gray-300">
            Hear from book lovers who have used our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800 p-8 rounded-lg shadow-md cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-violet-500"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-violet-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
