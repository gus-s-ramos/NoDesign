import React from 'react';
import './screenFour.css';
import Icon from '@mdi/react';
import { mdiPlus, mdiDotsVertical } from '@mdi/js';



function ScreenFour({ headerColor, logoTimeline, isLightMode }) {
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
                    <div className="timeline-content">
                        <div className="screenfour">
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
                                    <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </div>
                                <div>
                                    <p>Compartilhe uma ideia</p>
                                </div>
                            </div>
                            <div className='timeline-content' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                <div className="app-post" style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                    <div className='post-title' style={{ backgroundColor: isLightMode ? '#ffffff' : '#333333', color: isLightMode ? '#000000' : '#ffffff', }}>
                                        <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                        <div className="app-details">
                                            <h3 type="text" ></h3>
                                            <p className='timelineName'>YAZO</p>
                                        </div>
                                    </div>
                                    <Icon path={mdiDotsVertical} size={1} className="icon-options" />
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
                                        <img src="https://visitcuritiba.tur.br/wp-content/uploads/2022/11/yazo-300x300.jpg" alt="App Icon" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                        <div className="app-details">
                                            <h3 type="text" ></h3>
                                            <p className='timelineName'>YAZO</p>
                                        </div>
                                    </div>
                                    <Icon path={mdiDotsVertical} size={1} className="icon-options" />
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
