import React from 'react';
import ColorPicker from '../components/colorpicker';
import AssetUploader from '../components/assetsUpload';
import LoginUploader from '../components/loginUploader';
import SplashUploader from '../components/SplashUploader';
import TimelineUploader from '../components/timelineUploader';
import BannerLojaUpload from '../components/bannerLojaUpload';
import IconeLojaUploader from '../components/IconeLojaUploader';

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
  setStoreIcon,
  bannerStoreIcon,
  setBannerStoreIcon,
  text00,
  setText00,
}) => {

  const renderInfoContent = () => {
    switch (currentScreenIndex) {
      case 0:
        return (
          <>
            <ColorPicker
              label="Cor Primária"
              color={primaryColor}
              setColor={setPrimaryColor}
            />
            <LoginUploader
              label="Imagem de Login"
              asset={loginFile}
              setAsset={setLoginFile}
              style={{ width: '1000px', height: 'auto' }}
            />
          </>
        );
      case 1:
        return (
          <SplashUploader
            label="Imagem Splash"
            asset={splash}
            setAsset={setSplash}
          />
        );
      case 2:
        return (
          <>
            <IconeLojaUploader
              label="Ícone da Loja"
              asset={storeIcon}
              setAsset={setStoreIcon}
            />
            <div>
              <BannerLojaUpload
                label="Banners da Loja"
                asset={bannerStoreIcon}
                setAsset={setBannerStoreIcon}
              />
            </div>
            <div>
              <label htmlFor="appName">Nome do App</label>
              <input
                id="appName"
                type="text"
                value={text00}
                onChange={(e) => setText00(e.target.value)}
                maxLength={25}
              />
            </div>
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
            <TimelineUploader
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
