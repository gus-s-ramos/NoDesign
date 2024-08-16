import React from 'react';

const ColorSelector = ({ color, setColor, label }) => {
  const toggleColor = () => {
    setColor(color === '#ffffff' ? '#000000' : '#ffffff');
  };

  return (
    <div className="colorSection" style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      
        <h3>Cor do texto</h3>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '5px' }}>
          <div className='TitleColorSection'>
            <h3>Branco</h3>
          </div>
        </div>
        <div
          onClick={toggleColor}
          style={{
            width: '50px',
            height: '25px',
            backgroundColor: color === '#ffffff' ? '#ccc' : '#555',
            borderRadius: '25px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginRight: '10px'
          }}
        >

          <div
            style={{
              width: '23px',
              height: '23px',
              backgroundColor: color,
              borderRadius: '50%',
              position: 'absolute',
              top: '1px',
              left: color === '#ffffff' ? '1px' : '26px',
              transition: 'left 0.3s ease',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>

        <div style={{ marginLeft: '5px' }}>
          <div className='TitleColorSection'>
            <h3>Preto</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
