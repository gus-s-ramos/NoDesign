import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './layout.css';
import ScreenOne from '../components/screenOne';
import ScreenTwo from '../components/screenTwo';
import ScreenThree from '../components/screenThree';
import ScreenFour from '../components/screenFour';
import ScreenPreview from '../components/screenPreview';
import ScreenInfo from '../components/screenInfo';
import ScreenRepresentation from '../components/screenRepresentation';

function Layout() {
  const [splash, setSplash] = useState('https://placehold.co/375x777');
  const [loginFile, setLoginFile] = useState('https://placehold.co/1900x1500');
  const [logoTimeline, setLogoTimeline] = useState('https://placehold.co/254x128');
  const [storeIcon, setStoreIcon] = useState('https://placehold.co/128x128');
  const [bannerStoreIcon, setBannerStoreIcon] = useState('https://placehold.co/621x1344');
  const [bannerStoreIcon01, setBannerStoreIcon01] = useState('https://placehold.co/621x1344');
  const [primaryColor, setPrimaryColor] = useState('#821938');
  const [secondaryColor, setSecondaryColor] = useState('#f1f1f1');
  const [headerColor, setHeaderColor] = useState('#ffa00c');
  const [text00, setText00] = useState('NOME DO APLICATIVO');
  const [isLightMode, setIsLightMode] = useState(true);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const screens = [
    <ScreenOne loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />,
    <ScreenTwo splash={splash} />,
    <ScreenThree storeIcon={storeIcon} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />,
    <ScreenFour headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />,
  ];

  const downloadImagesAsZip = async () => {
    const zip = new JSZip();

    // Create folders
    const iconsFolder = zip.folder('AppIcon.appiconset');
    const assetsFolder = zip.folder('assets');
    const printsFolder = assetsFolder.folder('prints');
    const printsAndroidFolder = printsFolder.folder('print_android');
    const printsIosFolder = printsFolder.folder('print_iphone');
    const IosFolder01 = printsIosFolder.folder('5,5');
    const IosFolder02 = printsIosFolder.folder('6,5');

    // List of images with their respective sizes
    const images = [
      { url: storeIcon, name: 'icon-20@2x.png', width: 40, height: 40, folder: iconsFolder },
      { url: storeIcon, name: 'icon-20@3x.png', width: 60, height: 60, folder: iconsFolder },
      { url: storeIcon, name: 'icon-29@2x.png', width: 58, height: 58, folder: iconsFolder },
      { url: storeIcon, name: 'icon-29@3x.png', width: 87, height: 87, folder: iconsFolder },
      { url: storeIcon, name: 'icon-40@2x.png', width: 80, height: 80, folder: iconsFolder },
      { url: storeIcon, name: 'icon-40@3x.png', width: 120, height: 120, folder: iconsFolder },
      { url: storeIcon, name: 'icon-60@2x.png', width: 120, height: 120, folder: iconsFolder },
      { url: storeIcon, name: 'icon-60@3x.png', width: 180, height: 180, folder: iconsFolder },
      { url: storeIcon, name: 'icon-1024.png', width: 1024, height: 1024, folder: iconsFolder },
      { url: storeIcon, name: 'App-icon.png', width: 1024, height: 1024, folder: assetsFolder },
      { url: storeIcon, name: 'icon_512.png', width: 512, height: 512, folder: assetsFolder },
      { url: loginFile, name: 'Login@2x.png', width: 3800, height: 3000, folder: assetsFolder },
      { url: logoTimeline, name: 'logo timeline.png', width: 260, height: 132, folder: assetsFolder },
      { url: splash, name: 'splash@3x.png', width: 1125, height: 2331, folder: assetsFolder },
    ];

    try {
      // Download and add images to respective folders
      const imagePromises = images.map(async (image) => {
        const response = await fetch(image.url);
        if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
        const blob = await response.blob();
        // Resize image if necessary
        const resizedBlob = await resizeImage(blob, image.width, image.height);
        image.folder.file(image.name, resizedBlob);
      });

      await Promise.all(imagePromises);
      console.log('All images processed.');

      // Generate and save the ZIP file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'Assets.zip');
    } catch (error) {
      console.error('Error generating ZIP:', error);
    }
  };
  

  const resizeImage = async (blob, width, height) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((resizedBlob) => {
          URL.revokeObjectURL(img.src);
          resolve(resizedBlob);
        }, 'image/png');
      };
      img.onerror = reject;
    });
  };

  return (
    <div>
      <button onClick={downloadImagesAsZip}>Download Images as ZIP</button>
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
            secondaryColor={secondaryColor}
            setSecondaryColor={setSecondaryColor}
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
