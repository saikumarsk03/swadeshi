import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isInView] = useInView();

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Factory Address',
      details: ['Industrial Area', 'Bangalore, Karnataka', 'India']
    },
    {
      icon: FaPhone,
      title: 'Phone & WhatsApp',
      details: ['+91 8197305131', 'Mon-Sat: 9:00 AM - 6:00 PM']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['swadeshi.siri.udyog@gmail.com']
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Hello, I would like to contact Swadeshi Siri Udyog for business inquiries.";
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Us</h2>
          <p>Ready to grow your business with our wholesale solutions? Get in touch today.</p>
        </motion.div>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="contact-icon">
                <info.icon />
              </div>
              <h3>{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>Ready to Place Your First Order?</h3>
          <p>Join our network of satisfied distributors and retailers.</p>
          
          <motion.button 
            className="whatsapp-contact-btn"
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            Contact on WhatsApp
          </motion.button>
        </motion.div>

        <div className="footer">
          <div className="footer-logo">
            <div className="logo-icon">
              <span>S</span>
            </div>
            <span>Swadeshi Siri Udyog</span>
          </div>
          <p>© 2024 Swadeshi Siri Udyog. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;