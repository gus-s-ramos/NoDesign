import React from 'react';
import ColorPicker from '../components/colorpicker';
import AssetUploader from '../components/assetsUpload';
import LoginUploader from '../components/loginUploader';
import SplashUploader from '../components/SplashUploader';
import TimelineUploader from '../components/timelineUploader';
import BannerLojaUpload from '../components/bannerLojaUpload';
import IconeLojaUploader from '../components/IconeLojaUploader';
import './screenInfo.css';
import ColorSelector from './colorselector';

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
  secondaryColor,
  setSecondaryColor,
  text00,
  setText00,
  textColor,
  setTextColor
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
      case 3:
        return (
          <>
            <div>
              <ColorPicker
                label="Cor banner"
                color={secondaryColor}
                setColor={setSecondaryColor}
              />
            </div>
            <div>
              <ColorSelector
                
                color={textColor}
                setColor={setTextColor}
              />
            </div>
            <div className='appNameInput'>
              <label htmlFor="appName">Nome do App</label>
              <input
                id="appName"
                type="text"
                value={text00}
                onChange={(e) => setText00(e.target.value)}
                maxLength={25}
              />
            </div>
            <IconeLojaUploader
              label="Ícone da Loja"
              asset={storeIcon}
              setAsset={setStoreIcon}
            />

            
          </>
        );
      case 2:
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
