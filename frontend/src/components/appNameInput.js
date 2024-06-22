import React from 'react';

const AppNameInput = ({ text00, setText00 }) => {
  return (
    <div className="containerRow">
      <h1>Nome do aplicativo</h1>
      <div className="containerRules">
        <textarea
          type="text"
          value={text00}
          onChange={(e) => setText00(e.target.value)}
          className="AppName"
        />
      </div>
    </div>
  );
};

export default AppNameInput;
