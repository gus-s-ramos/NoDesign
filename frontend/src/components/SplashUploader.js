import React, { useRef } from 'react';

const SplashUploader = ({ label, asset, setAsset }) => {
  const inputFileRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setAsset(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="loginUploaderContainer">
      <div>
      <h3>{label}</h3>
      <img src={asset} alt={label} onClick={() => inputFileRef.current.click()} className="assetPreview" />
      <button onClick={() => inputFileRef.current.click()}>Buscar</button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
    </div>
  );
};

export default SplashUploader;
