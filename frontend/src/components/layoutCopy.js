import React, { useState } from 'react';
import './layout.css';
import ScreenOne from '../components/screenOne';
import ScreenTwo from '../components/screenTwo';
import ScreenThree from '../components/screenThree';
import ScreenFour from '../components/screenFour';
import ColorPicker from '../components/colorpicker';
import AssetUploader from '../components/assetsUpload';
import LoginUploader from '../components/loginUploader'
import ScreenPreview from '../components/screenPreview';
import AppNameInput from '../components/appNameInput';
import ModeSwitcher from '../components/modeSwitcher';
import LanguageSelector from '../components/languageSelector';

function Layout() {
  const [splash, setSplash] = useState('https://placehold.co/375x777');
  const [loginFile, setLoginFile] = useState('https://placehold.co/1900x1500');
  const [logoTimeline, setLogoTimeline] = useState('https://placehold.co/254x128');
  const [storeIcon, setStoreIcon] = useState('https://placehold.co/128x128');

  const [primaryColor, setPrimaryColor] = useState('#821938');
  const [secondaryColor, setSecondaryColor] = useState('#000');
  const [headerColor, setHeaderColor] = useState('#ffa00c');
  const [textColor, setTextColor] = useState('#ffffff');
  const [text00, setText00] = useState('NOME DO APLICATIVO');

  const [isLightMode, setIsLightMode] = useState(true);

  const screens = [
    <ScreenOne loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />,
    <ScreenTwo splash={splash} />,
    <ScreenThree storeIcon={storeIcon} text00={text00} />,
    <ScreenFour headerColor={headerColor} logoTimeline={logoTimeline} storeIcon={storeIcon} isLightMode={isLightMode} />
  ];

  return (
    <div className="containerPai">
      <div className="AssetsContainer">
        <h1>Prévia de layout</h1>
        <h1>Cores do aplicativo</h1>
        <div className="containerColor">
          <ColorPicker color={primaryColor} setColor={setPrimaryColor} label="COR PRIMÁRIA" />
          <ColorPicker color={headerColor} setColor={setHeaderColor} label="COR DO HEADER" />
          <ColorPicker color={textColor} setColor={setTextColor} label="COR DO TEXTO" />
          <ColorPicker color={secondaryColor} setColor={setSecondaryColor} label="COR DO TEXTO SECUNDÁRIO" />
        </div>
        <h1>Assets</h1>
        <div className="containerColor">
          <AssetUploader imageUrl={splash} setImageUrl={setSplash} label="SPLASH" />
          <LoginUploader imageUrl={loginFile} setImageUrl={setLoginFile} label="TELA LOGIN" />
          <AssetUploader imageUrl={logoTimeline} setImageUrl={setLogoTimeline} label="LOGO TIMELINE" />
          <AssetUploader imageUrl={storeIcon} setImageUrl={setStoreIcon} label="ICONE DA LOJA" />
        </div>
        <AppNameInput text00={text00} setText00={setText00} />
        <ModeSwitcher isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <LanguageSelector />
      </div>
      <ScreenPreview screens={screens} />
    </div>
  );
}

export default Layout;
