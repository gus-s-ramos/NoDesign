import React from 'react';
import './screenThree.css';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiMagnify, mdiDotsVertical, mdiBattery, mdiDownloadBoxOutline, mdiSignal, mdiWifi, mdiAccountCircle, mdiArrowRight } from '@mdi/js';
import ScreenOneStore from './screensStore/screenOneStore';
import ScreenTwoStore from './screensStore/screenTwoStore';
import ScreenThreeStore from './screensStore/screenThreeStore';
import ScreenFourStore from './screensStore/screenFourStore';



function ScreenThree({ headerColor, storeIcon, text00, bannerStoreIcon, secondaryColor, logoTimeline }) {

    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="splash-content">
                        <div className="screenthree">
                            <div className="menuNotch" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                </div>

                            </div>
                            <div className="menuHeader">
                                <Icon path={mdiArrowLeft} size={0.7} className="icon-return" />
                                <div>
                                    <Icon path={mdiMagnify} size={0.7} className="icon-search" />
                                    <Icon path={mdiDotsVertical} size={0.7} className="icon-options" />
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
                                        <p>19 MB</p>
                                        <Icon path={mdiDownloadBoxOutline} size={0.8} />
                                    </div>
                                </div>
                                <div className="app-download">
                                    <div className='app-stats-star'>
                                    </div>
                                    <h4>Mais de 1 mil</h4>
                                    <p>Downloads</p>

                                </div>
                                <div className="app-rating">
                                    <div className='app-stats-star'>
                                        <p>anos</p>
                                        <p>Classificação 12</p>
                                        <Icon path={mdiAccountCircle} size={0.8} className="icon-download" />

                                    </div>

                                </div>
                            </div>
                            <div className="install-button">
                                <button>Instalar</button>
                            </div>
                            <div className="screenshots">
                                <div className="screen-one-container">
                                    <div className="screen-store">
                                        <ScreenOneStore secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenTwoStore secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenThreeStore secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                    <div className="screen-store">
                                        <ScreenFourStore secondaryColor={secondaryColor} headerColor={headerColor} logoTimeline={logoTimeline} isLightMode={true} />
                                    </div>
                                </div>

                            </div>
                            <div className='descriptionStore'>
                                <div>
                                    <h3 className='title-store' >Sobre este app</h3>
                                    <h5> Tenha acesso á uma rede social exclusiva para interagir com a comunidade</h5>
                                    <button className='buttonTag'>Eventos</button>
                                </div>
                                <div>
                                    <Icon path={mdiArrowRight} size={0.8} className="icon-download" />
                                </div>
                            </div>
                            <div className='descriptionStore'>
                                <div>
                                    <h3 className='title-store' >Segurança dos dados</h3>
                                    <h5> Sua segurança começa com o entendimento de como os desenvolvedores coletam e compartilham seus dados. As práticas de segurança e privacidade de dados podem variar de acordo com o uso, a regiaão e a</h5>
                                </div>
                                <div>
                                    <Icon path={mdiArrowRight} size={0.8} className="icon-download" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenThree;
