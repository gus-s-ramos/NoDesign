import React from 'react';

const NavigationButtons = ({ currentScreenIndex, setCurrentScreenIndex, totalScreens }) => {
  const handleNextClick = () => {
    const newIndex = (currentScreenIndex + 1) % totalScreens;
    setCurrentScreenIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = (currentScreenIndex - 1 + totalScreens) % totalScreens;
    setCurrentScreenIndex(newIndex);
  };

  return (
    <div className="buttonDiv">
      <button className='prevScreenButton' onClick={handlePrevClick}>Prev</button>
      <button className='nextScreenButton' onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default NavigationButtons;
