import React, { useState } from 'react';
import './layout.css';
import ScreenOne from '../components/screenOne';
import ScreenTwo from '../components/screenTwo';
import ScreenThree from '../components/screenThree';
import ScreenFour from '../components/screenFour';
import ScreenPreview from '../components/screenPreview';
import ScreenInfo from '../components/screenInfo';
import ScreenRepresentation from '../components/screenRepresentation';
import ScreenOneStore from '../components/screensStore/screenOneStore';
import ScreenTwoStore from '../components/screensStore/screenTwoStore';



function Layout() {
  const [splash, setSplash] = useState('https://placehold.co/375x777');
  const [loginFile, setLoginFile] = useState('https://placehold.co/1900x1500');
  const [logoTimeline, setLogoTimeline] = useState('https://placehold.co/254x128');
  const [storeIcon, setStoreIcon] = useState('https://placehold.co/128x128');
  const [bannerStoreIcon, setBannerStoreIcon] = useState('https://placehold.co/621x1344')
  const [bannerStoreIcon01, setBannerStoreIcon01] = useState('https://placehold.co/621x1344')

  const [primaryColor, setPrimaryColor] = useState('#821938');
  const [secondaryColor, setSecondaryColor] = useState('#000');
  const [headerColor, setHeaderColor] = useState('#ffa00c');
  const [textColor, setTextColor] = useState('#ffffff');
  const [text00, setText00] = useState('NOME DO APLICATIVO');

  const [isLightMode, setIsLightMode] = useState(true);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const screens = [
    <ScreenOne loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />,
    <ScreenTwo splash={splash} />,
    <ScreenThree storeIcon={storeIcon} headerColor={headerColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} />,
    <ScreenFour headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode}  />,
    <ScreenTwoStore headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
  ];

  const screensStore = [
    <ScreenOneStore headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />,
    <ScreenTwoStore headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
  ]

  return (
    <div>
      <div>
      </div>
      <div className="containerLayout">
        <div className='divSliderContent'>
          <ScreenRepresentation
            currentScreenIndex={currentScreenIndex}
            screenRepresentations={screens}
            handleScreenClick={setCurrentScreenIndex}
          />
        </div>
        <div className='divScreenContent'>

          <ScreenPreview
            screens={screens}
            screensStore={screensStore}
            currentScreenIndex={currentScreenIndex}
            setCurrentScreenIndex={setCurrentScreenIndex}
          />
        </div>

        <div className='divContent'>
          <ScreenInfo
            currentScreenIndex={currentScreenIndex}
            splash={splash}
            setSplash={setSplash}
            loginFile={loginFile}
            setLoginFile={setLoginFile}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
            headerColor={headerColor}
            setHeaderColor={setHeaderColor}
            logoTimeline={logoTimeline}
            setLogoTimeline={setLogoTimeline}
            storeIcon={storeIcon}
            setStoreIcon={setStoreIcon}
            bannerStoreIcon={bannerStoreIcon}
            setBannerStoreIcon={setBannerStoreIcon}
            bannerStoreIcon01={bannerStoreIcon01}
            setBannerStoreIcon01={setBannerStoreIcon01}
            text00={text00}
            setText00={setText00}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
