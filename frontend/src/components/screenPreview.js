import React from 'react';
import './screenPreview.css';

const ScreenPreview = ({ screens, screensStore, currentScreenIndex, setCurrentScreenIndex, handleDownload, downloadComercial }) => {

  const handleNextClick = () => {
    const newIndex = (currentScreenIndex + 1) % screens.length;
    setCurrentScreenIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = (currentScreenIndex - 1 + screens.length) % screens.length;
    setCurrentScreenIndex(newIndex);
  };

  const getPrevScreenIndex = () =>
    currentScreenIndex > 0 ? currentScreenIndex - 1 : screens.length - 1;

  const getNextScreenIndex = () =>
    currentScreenIndex < screens.length - 1 ? currentScreenIndex + 1 : 0;

  return (
    <div className="layoutPreview">
      <div className='buttonDownloadAssets01' >
        <button className='buttonDownloadAssets' onClick={handleDownload}>Download Assets</button>
        <button className='buttonDownloadComercial' onClick={downloadComercial}>Download Tela Comercial</button>
      </div>
      
    
      <div className='buttonDiv'>
        <button className='prevScreenButton' onClick={handlePrevClick}>Anterior</button>
        <button className='nextScreenButton' onClick={handleNextClick}>Próximo</button>
      </div>
      <div className="screensContainer">
        <div
          className="sideScreen"
          style={{ opacity: 0.3 }}
          onClick={() => setCurrentScreenIndex(getPrevScreenIndex())}
        >
          {screens[getPrevScreenIndex()]}
        </div>
        <div className="mainScreen">
          {screens[currentScreenIndex]}
        </div>
        <div
          className="sideScreen"
          style={{ opacity: 0.3 }}
          onClick={() => setCurrentScreenIndex(getNextScreenIndex())}
        >
          {screens[getNextScreenIndex()]}
        </div>
      </div>

    </div>
  );
};

export default ScreenPreview;
