import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiPlus, mdiDotsVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';


const ScreenOneIphone55= forwardRef(({ headerColor, logoTimeline, isLightMode, secondaryColor, textColor }) => {
    return (
            <div id="screen-one-iphone-55"   className="storePrintDownload" style={{ backgroundColor: secondaryColor }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '110px', height: '68px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <h5 style={{ color: textColor}}>Não perca nada do<br /> que irá rolar no evento!</h5>
                <div>
                    <div className="screenStore" style={{ marginTop: '40px' }}>
                        <div className="timeline-content">
                            <div className="screenfour">
                                <div className="menuNotchStoreOne" style={{ backgroundColor: headerColor }}>
                                    <h6 className='hoursize'>9:41</h6>
                                    <div className="notchtimeline"></div>
                                    <div className="statusIcons">
                                        <Icon path={mdiSignal} size={0.5} className="icon-signal" style={{ color: 'black' }} />
                                        <Icon path={mdiWifi} size={0.5} className="icon-wifi" style={{ color: 'black' }}/>
                                        <Icon path={mdiBattery} size={0.5} className="icon-battery" style={{ color: 'black' }} />
                                    </div>
                                </div>
                                <div className="menuTimeline" style={{ backgroundColor: headerColor }}>
                                    <img
                                        src={logoTimeline}
                                        className="logoTimelinesHeader"
                                        style={{ width: '63px', height: '32px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <Icon path={mdiPlus} size={0.8} style={{ color: 'white' }} className="icon-options" />
                                    </div>
                                </div>
                                <div className='timeline-share'>
                                    <div>
                                        <img src="/assets/foto01.jpeg" alt="App Icon" style={{ width: '30px', height: '30px', objectFit: 'cover', borderRadius: '6px', marginRight:'8px' }} />
                                    </div>
                                    <div>
                                        <p>Compartilhe uma ideia</p>
                                    </div>
                                </div>
                                <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                    <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                        <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                            <img src="/assets/foto02.jpeg" alt="App Icon" style={{ width: '30px', height: '30px', objectFit: 'cover', borderRadius: '6px' }} />
                                            <div className="app-details">
                                                <h6 className='timelineName'>Emanuel Batista</h6>
                                                <p className='timelineName1'>Há 30 min</p>
                                            </div>
                                        </div>
                                        <Icon path={mdiDotsVertical} size={0.8} color={'grey'} className="icon-options" />
                                    </div>
                                    <div>
                                    </div>
                                    <div>
                                        <img src="/assets/foto09.png" alt="App Icon" style={{ width: '260px', height: '250px', objectFit: 'cover' }} />
                                    </div>
                                    <div className='post-description'>
                                        <div>
                                            <p>37 curtidas</p>
                                        </div>
                                        <div>
                                            <p>30 comentários</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                    <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                        <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff' }}>
                                            <img src="/assets/yazo-300x300.jpg" alt="App Icon" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }} />
                                            <div className="app-details">
                                                <p className='timelineName'>YAZO</p>
                                                <p className='timelineName1'>2 min</p>
                                            </div>
                                        </div>
                                        <Icon path={mdiDotsVertical} size={0.6} className="icon-options" />
                                    </div>
                                    <div className='post-description'>
                                        <p>Teste de uma breve descrição para ser inserida dentro do aplicativo</p>
                                    </div>
                                    <div>
                                        <img src="/assets/21.png" alt="App Icon" style={{ width: '260px', height: '250px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
});

export default ScreenOneIphone55;
