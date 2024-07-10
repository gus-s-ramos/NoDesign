import React from 'react';
import Icon from '@mdi/react';
import { mdiPlus, mdiDotsVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';
import './screenOneStore.css';



function ScreenOneStore({ headerColor, logoTimeline, isLightMode }) {
    return (
        <div>
            <div className="storePrint" style={{ backgroundColor: headerColor }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '63px', height: '32px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <p>Não perca nada do que irá rolar no evento!</p>
                <div>
                    <div className="screenStore" style={{marginTop: '40px' }}>
                        <div className="timeline-content">
                            <div className="screenfour">
                                <div className="menuNotch" style={{ backgroundColor: headerColor, }}>
                                    <p>9:41</p>
                                    <div className="notchtimeline"></div>
                                    <div className="statusIcons">
                                        <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                        <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                        <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                    </div>

                                </div>
                                <div className="menuTimeline" style={{ backgroundColor: headerColor, }}>
                                    <img
                                        src={logoTimeline}
                                        className="logoTimelinesHeader"
                                        style={{ width: '63px', height: '32px', objectFit: 'cover' }}
                                    />
                                    <div >
                                        <Icon path={mdiPlus} size={0.8} style={{ color: 'white' }} className="icon-options" />
                                    </div>
                                </div>
                                <div className='timeline-share'>
                                    <div>
                                        <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    </div>
                                    <div>
                                        <p>Compartilhe uma ideia</p>
                                    </div>
                                </div>
                                <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                    <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                        <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                            <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }}
                                            />
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
                                        <img src="https://markmesse.com.br/wp-content/uploads/2024/02/21.png" alt="App Icon" style={{ width: '260px', height: '250px', objectFit: 'cover' }}
                                        />
                                    </div>

                                </div>
                                <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                    <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                        <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                            <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }}
                                            />
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
                                        <img src="https://markmesse.com.br/wp-content/uploads/2024/02/21.png" alt="App Icon" style={{ width: '260px', height: '250px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenOneStore;
