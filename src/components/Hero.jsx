import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPlay } from 'react-icons/fa';

const Hero = ({ scrollY }) => {
  const handleWhatsAppClick = () => {
    const message = "Hello, I'm interested in placing a bulk order with Swadeshi Siri Udyog. Please share details.";
    const whatsappUrl = `https://wa.me/918197305131?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Background Image with Parallax */}
      <div 
        className="hero-bg"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Delivering Traditional
          <span className="gradient-text">
            Taste with Modern Scale
          </span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium Wholesale Manufacturer of Sweets & Bakery Products
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="btn-primary"
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            Request a Quote
          </motion.button>
          
          <motion.button 
            className="btn-secondary"
            onClick={scrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
            Explore Products
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;