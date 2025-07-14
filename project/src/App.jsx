import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <AnimatedBackground />
      <AnimatedBackground />
      <Header />
      <Hero scrollY={scrollY} />
      <About />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Partnership />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;