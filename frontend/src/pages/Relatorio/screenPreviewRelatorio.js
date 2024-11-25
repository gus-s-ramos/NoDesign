import React from 'react';
import './screenPreviewRelatorio.css';

const ScreenPreviewRelatorio = ({ screens, allScreens, currentScreenIndex, setCurrentScreenIndex}) => {

  const handleNextClick = () => {
    const newIndex = (currentScreenIndex + 1) % screens.length;
    setCurrentScreenIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = (currentScreenIndex - 1 + screens.length) % screens.length;
    setCurrentScreenIndex(newIndex);
  };


  return (
    <div className="layoutPreviewRelatorio">
      <div className='buttonDiv'>
        <button className='prevScreenButton' onClick={handlePrevClick}>Anterior</button>
        <button className='nextScreenButton' onClick={handleNextClick}>Próximo</button>
      </div>
      <div className="screensContainer">
        <div className="mainScreen">
          {screens[currentScreenIndex]}
        </div>
      </div>

    </div>
  );
};

export default ScreenPreviewRelatorio;
