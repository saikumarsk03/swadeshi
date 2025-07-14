import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const Partnership = () => {
  const [ref, isInView] = useInView();

  const stats = [
    { icon: FaUsers, value: '50+', label: 'Happy Partners' },
    { icon: FaClock, value: '2+', label: 'Years of Experience' },
    { icon: FaMapMarkerAlt, value: '10+', label: 'Cities Covered' }
  ];

  const handlePartnershipClick = () => {
    const message = "Hello, I'm interested in starting a partnership with Swadeshi Siri Udyog. Please share next steps.";
    const whatsappUrl = `https://wa.me/918197305131?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="partnership">
      <div className="container">
        <motion.div 
          ref={ref}
          className="partnership-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's Start Your Partnership</h2>
          <p>Join our growing network of successful business partners</p>

          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="contact-info">
            <p><strong>Email:</strong> swadeshi.siri.udyog@gmail.com</p>
            <p><strong>WhatsApp:</strong> +91 8197305131</p>
          </div>

          <motion.button 
            className="partnership-btn"
            onClick={handlePartnershipClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FaWhatsapp />
            Start Partnership
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;