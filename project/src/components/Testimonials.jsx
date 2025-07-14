import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      name: 'Suraj',
      text: 'Game-changer for my business.',
      rating: 5
    },
    {
      name: 'Raju',
      text: 'Top quality, great shelf life.',
      rating: 5
    },
    {
      name: 'Basu – Dandeli',
      text: 'Our customers love their sweets.',
      rating: 5
    },
    {
      name: 'Sangemesh',
      text: 'Reliable and consistent.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>What Our Partners Say</h2>
          <p>Building lasting relationships through quality products and reliable service</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p>"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;