import React from 'react';
import TelaLogin from './telaLogin';
import TelaSplash from './telaSplash';
import TelaLojaApp from './telaLojaApp';
import TelaTimeline from './TelaTimeline';
import './telaComercial.css'

const TelaComercial = ({ loginFile, primaryColor, splash, headerColor, logoTimeline, secondaryColor, text00, bannerStoreIcon, storeIcon, textColor, isLightMode }) => {
    return (
        <div id='tela-comercial-content' className="layout-container01">
            <div>
                <img src={logoTimeline} alt="Logo Timeline" className="logo-image" />
            </div>
            <div className="layout-container">
                <div className="screen">
                    <TelaLogin loginFile={loginFile} primaryColor={primaryColor} isLightMode={isLightMode} />
                </div>
                <div className="screen">
                    <TelaSplash splash={splash} />
                </div>
                <div className="screen">
                    <TelaTimeline headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={isLightMode} />
                </div>
                <div className="screen">
                    <TelaLojaApp storeIcon={storeIcon} textColor={textColor} secondaryColor={secondaryColor} logoTimeline={logoTimeline} bannerStoreIcon={bannerStoreIcon} text00={text00} headerColor={headerColor} />
                </div>
            </div>
        </div>
    );
}

export default TelaComercial;
