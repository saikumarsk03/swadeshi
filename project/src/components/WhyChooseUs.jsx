import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView();

  const features = [
    {
      icon: FaIndustry,
      title: 'High-capacity production',
      description: 'Daily output optimized for bulk orders and distribution'
    },
    {
      icon: FaCertificate,
      title: 'Certified hygiene practices',
      description: 'FSSAI and ISO certified facility with quality controls'
    },
    {
      icon: FaTruck,
      title: 'Timely delivery',
      description: 'Reliable logistics network ensuring on-time delivery'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Operations in 10+ cities',
      description: 'Established presence across multiple regions'
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
    <section className="why-choose-us">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Why Choose Us</h2>
          <p>Building long-term partnerships through quality, reliability, and exceptional service</p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;