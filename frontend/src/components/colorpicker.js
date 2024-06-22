import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor, label }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="colorSection">
      <button
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color,
          cursor: "pointer",
          borderRadius: "10px",
          marginRight: "10px",
        }}
        onClick={() => setShowColorPicker(!showColorPicker)}
      />
      {showColorPicker && (
        <div>
          <ChromePicker color={color} onChange={(newColor) => setColor(newColor.hex)} />
        </div>
      )}
      <div>
        <div className='TitleColorSection'>
          <h3>{label}</h3>
        </div>
        <input
          className='ColorColorSection'
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
