// LoadingScreen.js
import React from 'react';
import './loadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-modal">
        <div className="loading-spinner"></div>
        <p>Baixando prévia...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
