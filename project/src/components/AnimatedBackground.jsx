import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="animated-bg"></div>
      <div className="floating-particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;