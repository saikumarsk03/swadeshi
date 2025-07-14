import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const Gallery = () => {
  const [ref, isInView] = useInView();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Modern Production Facility'
    },
    {
      url: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Quality Control Process'
    },
    {
      url: 'https://images.pexels.com/photos/3992212/pexels-photo-3992212.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Packaging Department'
    },
    {
      url: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Premium Product Range'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <motion.div 
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Gallery Preview</h2>
          <p>Take a look inside our world-class manufacturing facility</p>
        </motion.div>

        <motion.div 
          className="gallery-carousel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="carousel-container">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].title}
              className="carousel-image"
            />
            <div className="carousel-overlay" />
            
            <div className="carousel-content">
              <h3>{images[currentImage].title}</h3>
              <div className="view-indicator">
                <FaEye />
                <span>Click to view full gallery</span>
              </div>
            </div>

            <button className="carousel-btn prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="carousel-btn next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </div>

          <div className="carousel-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image.url} alt={image.title} />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;