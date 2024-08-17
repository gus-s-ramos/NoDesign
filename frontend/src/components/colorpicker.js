import React, { useState, useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({ color, setColor, label }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const pickerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="colorSection" style={{ position: 'relative' }} ref={pickerRef}>
      <button
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color,
          cursor: "pointer",
          borderRadius: "10px",
          marginRight: "10px",
          border: "none",
          
        }}
        onClick={() => setShowColorPicker(!showColorPicker)}
      />
      {showColorPicker && (
        <div style={{ position: 'absolute', top: '100px', left: '0', zIndex: '1' }}>
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
    </div>
  );
};

export default ColorPicker;
