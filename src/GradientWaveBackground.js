import React from 'react';

const GradientBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom right, #0a346b, #1e5799)',
        zIndex: -1
      }}
    />
  );
};

export default GradientBackground;