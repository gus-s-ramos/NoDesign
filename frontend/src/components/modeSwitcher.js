import React from 'react';

const ModeSwitcher = ({ isLightMode, setIsLightMode }) => {
  const handleModeChange = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div>
      <h1>Modo de visualização</h1>
      <div>
        <input
          type="checkbox"
          checked={isLightMode}
          onChange={handleModeChange}
        /> Light Mode
        <input
          type="checkbox"
          checked={!isLightMode}
          onChange={handleModeChange}
        /> Dark Mode
      </div>
    </div>
  );
};

export default ModeSwitcher;
