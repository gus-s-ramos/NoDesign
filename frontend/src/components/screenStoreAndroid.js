import React from 'react';
import './screenThree.css';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiMagnify, mdiDotsVertical, mdiBattery, mdiDownloadBoxOutline, mdiSignal, mdiWifi, mdiAccountCircle, mdiArrowRight } from '@mdi/js';
import ScreenOneStore from './screensStore/screenOneStore';
import ScreenTwoStore from './screensStore/screenTwoStore';
import ScreenThreeStore from './screensStore/screenThreeStore';
import ScreenFourStore from './screensStore/screenFourStore';



function ScreenStoreAndroid({ headerColor, storeIcon, text00, secondaryColor, logoTimeline, textColor }) {


    return (
        <div className="screen-three-pl">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="splash-content">
                        <div className="screen-three-store">
                            <div className="menuNotch" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" style={{ color: 'black' }} />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" style={{ color: 'black' }} />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" style={{ color: 'black' }} />
                                </div>

                            </div>
                            <div className="menuHeader">
                                <Icon path={mdiArrowLeft} size={0.7} className="icon-return" style={{ color: 'black' }} />
                                <div>
                                    <Icon path={mdiMagnify} size={0.7} className="icon-search" style={{ color: 'black' }} />
                                    <Icon path={mdiDotsVertical} size={0.7} className="icon-options" style={{ color: 'black' }} />
                                </div>
                            </div>
                            <div className="app-info">
                                <img src={storeIcon} alt="App Icon" className="app-icon" />
                                <div className="app-details">
                                    <h3 className='title-store' type="text" >{text00}</h3>
                                    <p className='title-store'>YAZO</p>
                                </div>
                            </div>
                            <div className="app-stats">
                                <div className="app-reviews">
                                    <div className='app-stats-star'>
                                        <p style={{ color: 'black' }}>19 MB</p>
                                        <Icon path={mdiDownloadBoxOutline} size={0.8} style={{ color: 'black' }} />
                                    </div>
                                </div>
                                <div className="app-download">
                                    <div className='app-stats-star'>
                                    </div>
                                    <h4 style={{ color: 'black' }}>Mais de 1 mil</h4>
                                    <p style={{ color: 'black' }}>Downloads</p>

                                </div>
                                <div className="app-rating">
                                    <div className='app-stats-star'>
                                        <p style={{ color: 'black' }}>anos</p>
                                        <p style={{ color: 'black' }}>Classificação 12</p>
                                        <Icon path={mdiAccountCircle} size={0.8} style={{ color: 'black' }} className="icon-download" />

                                    </div>

                                </div>
                            </div>
                            <div className="install-button">
                                <button>Instalar</button>
                            </div>
                            <div className="screenshots">
                                <div className="screen-one-container">
                                    <div className="screen-store">
                                        <ScreenOneStore textColor={textColor} secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenTwoStore textColor={textColor} secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenThreeStore textColor={textColor} secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenFourStore textColor={textColor} secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="opacity-overlay"></div>
        </div>
    );
}

export default ScreenStoreAndroid;
