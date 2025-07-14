import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = "Hello, I'm interested in placing a bulk order with Swadeshi Siri Udyog. Please share details.";
    const whatsappUrl = `https://wa.me/918197305131?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="floating-whatsapp"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ 
        y: [0, -10, 0],
        boxShadow: [
          '0 4px 20px rgba(37, 211, 102, 0.3)',
          '0 8px 30px rgba(37, 211, 102, 0.5)',
          '0 4px 20px rgba(37, 211, 102, 0.3)'
        ]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <FaWhatsapp />
    </motion.div>
  );
};

export default FloatingWhatsApp;