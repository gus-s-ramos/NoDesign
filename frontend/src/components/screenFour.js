import React from 'react';
import './screenFour.css';
import Icon from '@mdi/react';
import { mdiPlus, mdiDotsVertical, mdiSignal, mdiWifi, mdiBattery, mdiThumbUpOutline, mdiMessageOutline, mdiShareOutline } from '@mdi/js';



function ScreenFour({ headerColor, logoTimeline, isLightMode }) {
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="timeline-content">
                        <div className="screenfour">
                            <div className="menuNotch" style={{ backgroundColor: headerColor, }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                </div>

                            </div>
                            <div className="menuTimeline" style={{ backgroundColor: headerColor, border: `2px solid ${headerColor}` }}>

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
                                    <img src="/assets/1.jpg" alt="App Icon" style={{ width: '30px', height: '30px', objectFit: 'cover', borderRadius: '6px' }}
                                    />
                                </div>
                                <div className="app-details">
                                    <p>Compartilhe uma ideia</p>
                                </div>
                            </div>
                            <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                    <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                        <img src="/assets/1.jpg" alt="App Icon" style={{ width: '30px', height: '30px', objectFit: 'cover', borderRadius: '6px' }}
                                        />
                                        <div className="app-details">
                                            <h6 className='timelineName'>Claudio Ribeiro</h6>
                                            <p className='timelineName1'>Há 2 min</p>
                                        </div>
                                    </div>
                                    <Icon path={mdiDotsVertical} size={0.8} color={'grey'} className="icon-options" />
                                </div>
                                <div >
                                </div>
                                <div>
                                    <img src="/assets/21.png" alt="App Icon" style={{ width: '260px', height: '250px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className='post-description'>
                                    <div>
                                        <p>
                                            37 curtidas
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            30 comentários
                                        </p>
                                    </div>
                                </div>
                                <div className='linetimeline'></div>
                                <div className='reactionPubli'>
                                    <div className='reactionPubliIcon'>
                                        <Icon path={mdiThumbUpOutline} size={0.8} color={'grey'} className="icon-options" />
                                        <p>Curtir</p>
                                    </div>
                                    <div className='reactionPubliIcon'>
                                        <Icon path={mdiMessageOutline} size={0.8} color={'grey'} className="icon-options" />
                                        <p>Comentar</p>
                                    </div>
                                    <div className='reactionPubliIcon'>
                                        <Icon path={mdiShareOutline} size={0.8} color={'grey'} className="icon-options" />
                                        <p>Compartilhar</p>
                                    </div>
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
    );
}

export default ScreenFour;
