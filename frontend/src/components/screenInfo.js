import React from 'react';
import ColorPicker from '../components/colorpicker';
import AssetUploader from '../components/assetsUpload';

const ScreenInfo = ({
  currentScreenIndex,
  splash,
  setSplash,
  loginFile,
  setLoginFile,
  primaryColor,
  setPrimaryColor,
  headerColor,
  setHeaderColor,
  logoTimeline,
  setLogoTimeline,
  storeIcon,
  setStoreIcon
}) => {

  const renderInfoContent = () => {
    switch (currentScreenIndex) {
      case 0:
        return (
          <>
            <AssetUploader
              label="Imagem de Login"
              asset={loginFile}
              setAsset={setLoginFile}
            />
            <ColorPicker
              label="Cor Primária"
              color={primaryColor}
              setColor={setPrimaryColor}
            />
          </>
        );
      case 1:
        return (
          <AssetUploader
            label="Imagem Splash"
            asset={splash}
            setAsset={setSplash}
          />
        );
      case 2:
        return (
          <>
            <AssetUploader
              label="Ícone da Loja"
              asset={storeIcon}
              setAsset={setStoreIcon}
            />
            <AssetUploader
              label="Banners da Loja"
              asset={storeIcon} 
              setAsset={setStoreIcon} 
            />
          </>
        );
      case 3:
        return (
          <>
            <ColorPicker
              label="Cor do Header"
              color={headerColor}
              setColor={setHeaderColor}
            />
            <AssetUploader
              label="Logo Timeline"
              asset={logoTimeline}
              setAsset={setLogoTimeline}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="screenInfoContainer">
      <h2>Informações da Tela</h2>
      {renderInfoContent()}
    </div>
  );
};

export default ScreenInfo;
