import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaIndustry, FaCertificate } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: FaTruck,
      title: 'Distribution-ready products',
      description: 'Packaging and logistics optimized for wholesale distribution'
    },
    {
      icon: FaIndustry,
      title: 'Modern hygienic facility',
      description: 'State-of-the-art manufacturing with highest hygiene standards'
    },
    {
      icon: FaCertificate,
      title: 'Certified (FSSAI, ISO)',
      description: 'Quality and safety compliance with industry standards'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about-us" className="about">
      <div className="container">
        <motion.div 
          ref={ref}
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Who We Are</h2>
          <p>
            With 15+ years in large-scale production, Swadeshi Siri Udyog supplies 
            top-quality Indian sweets and bakery items across multiple cities.
          </p>
        </motion.div>

        <motion.div 
          className="highlights-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="highlight-icon">
                <item.icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;