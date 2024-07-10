import React from 'react';
import Icon from '@mdi/react';
import { mdiHome, mdiLogin, mdiTimeline, mdiStore } from '@mdi/js';

const ScreenRepresentation = ({ currentScreenIndex, handleScreenClick }) => {
  const screenIcons = [mdiHome, mdiLogin, mdiStore, mdiTimeline];

  return (
    <div className="screenRepresentationContainer">
      {screenIcons.map((icon, index) => (
        <div
          key={index}
          className={`screenRepresentation ${index === currentScreenIndex ? 'selectedRepresentation' : ''}`}
          onClick={() => handleScreenClick(index)}
        >
          <Icon path={icon} size={1} color={index === currentScreenIndex ? '#fff' : '#a50202'} />
        </div>
      ))}
    </div>
  );
};

export default ScreenRepresentation;
