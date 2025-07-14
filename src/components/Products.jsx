import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const Products = () => {
  const [ref, isInView] = useInView();

  const products = [
    {
      title: 'Sweets',
      description: 'Laddus, Barfis, Gulab Jamun & more',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Bakery Products',
      description: 'Cookies, Rusks, Cakes',
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <motion.div 
          ref={ref}
          className="products-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Product Categories</h2>
          <p>Discover our wide range of wholesale products crafted with traditional recipes</p>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay" />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <motion.button 
                  className="view-products-btn"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Products
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;