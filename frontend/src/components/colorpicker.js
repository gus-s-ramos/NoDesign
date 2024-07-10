import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor, label }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="colorSection" style={{ position: 'relative' }}>
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
          <div style={{ position: 'absolute', top: '60px', left: '0' }}>
            <ChromePicker
              color={color}
              onChange={(newColor) => setColor(newColor.hex)}
              disableAlpha={true} // Opcional: desabilita o canal alpha se não for necessário
            />
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
      <div>

      </div>
    </div>


  );
};

export default ColorPicker;
