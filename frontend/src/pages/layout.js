import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import './layout.css';
import ScreenOne from '../components/screenOne';
import ScreenTwo from '../components/screenTwo';
import ScreenThree from '../components/screenThree';
import ScreenFour from '../components/screenFour';
import ScreenPreview from '../components/screenPreview';
import ScreenInfo from '../components/screenInfo';
import ScreenRepresentation from '../components/screenRepresentation';
import ScreenOneIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenOneIphone65';
import ScreenTwoIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenTwoIphone65';
import ScreenThreeIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenThreeIphone65';
import ScreenFourIphone65 from '../components/screensStoreDownload/screenIphone6,5/screenFourIphone65';
import ScreenOneIphone55 from '../components/screensStoreDownload/screenIphone5,5/screenOneIphone55';
import ScreenTwoIphone55 from '../components/screensStoreDownload/screenIphone5,5/screenTwoIphone55';
import ScreenThreeIphone55 from '../components/screensStoreDownload/screenIphone5,5/screenThreeIphone55';
import ScreenFourIphone55 from '../components/screensStoreDownload/screenIphone5,5/screenFourIphone55';
import ScreenOneAndroid from '../components/screensStoreDownload/screenAndroid/screenOneAndroid';
import ScreenTwoAndroid from '../components/screensStoreDownload/screenAndroid/screenTwoAndroid';
import ScreenThreeAndroid from '../components/screensStoreDownload/screenAndroid/screenThreeAndroid';
import ScreenFourAndroid from '../components/screensStoreDownload/screenAndroid/screenFourAndroid';
import LoadingScreen from './loadingScreen';



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
  const [isLoading, setIsLoading] = useState(false);


  const screens = [
    <ScreenOne loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />,
    <ScreenTwo splash={splash} />,
    <ScreenThree storeIcon={storeIcon} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />,
    <ScreenFour headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />,
  ];

  const screensContainerRef = useRef(null);

  const downloadImagesAsZip = async (zip) => {

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
      img.onerror = (error) => {
        URL.revokeObjectURL(img.src);
        reject(error);
      };
    });
  };

  const downloadScreensAsImages = async (zip) => {
    const screenIds = [
      { id: 'screen-one-store-content', name: 'Android-1.png', width: 1242, height: 2208, folder: 'print_android' },
      { id: 'screen-two-store-content', name: 'Android-2.png', width: 1242, height: 2208, folder: 'print_android' },
      { id: 'screen-three-store-content', name: 'Android-3.png', width: 1242, height: 2208, folder: 'print_android' },
      { id: 'screen-four-store-content', name: 'Android-4.png', width: 1242, height: 2208, folder: 'print_android' },
      { id: 'screen-one-iphone-55', name: 'iPhone Small-1.png', width: 1242, height: 2208, folder: 'print_iphone/5,5' },
      { id: 'screen-two-iphone-55', name: 'iPhone Small-2.png', width: 1242, height: 2208, folder: 'print_iphone/5,5' },
      { id: 'screen-three-iphone-55', name: 'iPhone Small-3.png', width: 1242, height: 2208, folder: 'print_iphone/5,5' },
      { id: 'screen-four-iphone-55', name: 'iPhone Small-4.png', width: 1242, height: 2208, folder: 'print_iphone/5,5' },
      { id: 'screen-one-iphone-65', name: 'iPhone Large-1.png', width: 1242, height: 2688, folder: 'print_iphone/6,5' },
      { id: 'screen-two-iphone-65', name: 'iPhone Large-2.png', width: 1242, height: 2688, folder: 'print_iphone/6,5' },
      { id: 'screen-three-iphone-65', name: 'iPhone Large-3.png', width: 1242, height: 2688, folder: 'print_iphone/6,5' },
      { id: 'screen-four-iphone-65', name: 'iPhone Large-4.png', width: 1242, height: 2688, folder: 'print_iphone/6,5' },
    ];

    const container = screensContainerRef.current;

    if (!container) return;

    try {
      // Make the container visible
      container.style.display = 'block';

      await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the delay as needed


      const imagePromises = screenIds.map(async ({ id, name, width, height, folder }) => {
        const element = document.getElementById(id);
        if (!element) {
          console.error(`Element with ID ${id} not found.`);
          return;
        }

        const canvas = await html2canvas(element, {
          useCORS: true,
          scale: 3, // Increase the scale to capture more details
        });

        // Convert the canvas directly to blob
        const blob = await new Promise((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject('Error generating the blob.');
            }
          }, 'image/png');
        });

        // Add the blob to the ZIP file in the respective folder
        const deviceFolder = zip.folder(`assets/prints/${folder}`);
        deviceFolder.file(name, blob);
      });

      // Wait for all image processing promises to complete
      await Promise.all(imagePromises);
    } catch (error) {
      console.error('Error downloading images:', error);
    } finally {
      // Hide the container again
      container.style.display = 'none';
    }
  };



  const handleDownload = async () => {
    setIsLoading(true);
    const zip = new JSZip();
    await downloadImagesAsZip(zip);
    await downloadScreensAsImages(zip);
    await downloadSettingsAsText(zip);

    // Generate and save the ZIP file
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'Assets.zip');
    setIsLoading(false);
  };

  const downloadSettingsAsText = () => {
    const settings = `
      Nome App: ${text00}
      Header Color: ${headerColor}
      Secondary Color: ${secondaryColor}
      Primary Color: ${primaryColor}
    `;

    const blob = new Blob([settings], { type: 'text/plain' });
    saveAs(blob, 'settings.txt');
  };


  return (
    <div>
      {isLoading && <LoadingScreen />}
      
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
            handleDownload={handleDownload}
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
            isLightMode={isLightMode}
            setIsLightMode={setIsLightMode}
          />
        </div>
      </div>
      <div
        ref={screensContainerRef}
        style={{ display: 'none' }}
      >

        <div>
          <ScreenOneIphone65 loginFile={loginFile} headerColor={headerColor} primaryColor={primaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} secondaryColor={secondaryColor} />
        </div>
        <div>
          <ScreenTwoIphone65 primaryColor={primaryColor} splash={splash} headerColor={headerColor} logoTimeline={logoTimeline} secondaryColor={secondaryColor} />
        </div>
        <div>
          <ScreenThreeIphone65 primaryColor={primaryColor} storeIcon={storeIcon}
            secondaryColor={secondaryColor}
            logoTimeline={logoTimeline}
            bannerStoreIcon={bannerStoreIcon}
            text00={text00}
            headerColor={headerColor} />
        </div>
        <div>
          <ScreenFourIphone65 loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} secondaryColor={secondaryColor} />
        </div>

        <div>
          <ScreenOneIphone55 loginFile={loginFile} headerColor={headerColor} primaryColor={primaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} secondaryColor={secondaryColor} />
        </div>
        <div>
          <ScreenTwoIphone55 primaryColor={primaryColor} splash={splash} headerColor={headerColor} secondaryColor={secondaryColor} />
        </div>
        <div>
          <ScreenThreeIphone55 storeIcon={storeIcon}
            secondaryColor={secondaryColor}
            logoTimeline={logoTimeline}
            bannerStoreIcon={bannerStoreIcon}
            text00={text00}
            headerColor={headerColor}
            primaryColor={primaryColor} />
        </div>
        <div>
          <ScreenFourIphone55 loginFile={loginFile} headerColor={headerColor} secondaryColor={secondaryColor} primaryColor={primaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} />
        </div>

        <div>
          <ScreenOneAndroid loginFile={loginFile} headerColor={headerColor} primaryColor={primaryColor} secondaryColor={secondaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} />
        </div>
        <div>
          <ScreenTwoAndroid splash={splash} primaryColor={primaryColor} headerColor={headerColor} secondaryColor={secondaryColor} />
        </div>
        <div>
          <ScreenThreeAndroid storeIcon={storeIcon}
            secondaryColor={secondaryColor}
            logoTimeline={logoTimeline}
            bannerStoreIcon={bannerStoreIcon}
            text00={text00}
            headerColor={headerColor}
            primaryColor={primaryColor} />
        </div>
        <div>
          <ScreenFourAndroid loginFile={loginFile} headerColor={headerColor} primaryColor={primaryColor} secondaryColor={secondaryColor} isLightMode={isLightMode} logoTimeline={logoTimeline} />
        </div>

      </div>
    </div>
  );
}

export default Layout;
