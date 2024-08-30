import React from 'react';
import ScreenOne from '../components/screenOne';
import ScreenTwo from '../components/screenTwo';
import ScreenThree from '../components/screenThree';
import ScreenFour from '../components/screenFour';
import './telaComercial.css'

const TelaComercial = ({ loginFile, primaryColor, splash, headerColor, logoTimeline, secondaryColor, text00, bannerStoreIcon, storeIcon, textColor, isLightMode }) => {
    return (
        <div id='tela-comercial-content' className="layout-container01">
            <div>
                <img src={logoTimeline} alt="Logo Timeline" className="logo-image" />
            </div>
            <div className="layout-container">
                <div className="screen">
                    <ScreenOne loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                </div>
                <div className="screen">
                    <ScreenTwo splash={splash} />
                </div>
                <div className="screen">
                    <ScreenFour headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                </div>
                <div className="screen">
                    <ScreenThree storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                </div>
            </div>
        </div>
    );
}

export default TelaComercial;
