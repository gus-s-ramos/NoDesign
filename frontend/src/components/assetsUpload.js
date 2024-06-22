import React, { useRef } from 'react';

const AssetUploader = ({ label, asset, setAsset }) => {
  const inputFileRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setAsset(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="assetUploaderContainer">
      <h3>{label}</h3>
      <img src={asset} alt={label} className="assetPreview" />
      <button onClick={() => inputFileRef.current.click()}>Buscar</button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AssetUploader;
