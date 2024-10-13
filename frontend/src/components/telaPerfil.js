import React from 'react';
import './telaPerfil.css';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiEmailOutline, mdiSignal, mdiWifi, mdiBattery, mdiCogOutline } from '@mdi/js';



function TelaPerfil({ primaryColor, headerColor, logoTimeline, isLightMode }) {
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
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" style={{ color: '#fff' }} />
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" style={{ color: '#fff' }} />
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" style={{ color: '#fff' }} />
                                </div>

                            </div>
                            <div className="menuHeaderProfile" style={{ backgroundColor: headerColor, border: `2px solid ${headerColor}` }}>
                                <Icon path={mdiArrowLeft} size={0.5} className="icon-battery" style={{ color: '#000' }} />
                                <h2 style={{ color: '#000' }}>Meu perfil</h2>
                            </div>
                            <div className='bannerBackgroud' style={{ backgroundColor: primaryColor }}>
                                <div>
                                    <img src="/assets/foto01.jpeg" className='profilePicture' alt="App Icon"
                                    />
                                </div>
                            </div>
                            <div className='profileContent'>
                                <h2>Felipe Marques</h2>
                            </div>
                            <div className='buttonStyle'>
                                <button className='buttonProfile' style={{ backgroundColor: primaryColor, color: '#fff' }}>Editar perfil</button>
                                <Icon path={mdiCogOutline} size={0.5} className="icon-Cog" style={{ color: primaryColor, border: `1px solid ${primaryColor}` }} />

                            </div>
                            <div>
                                <button style={{ color: '#000', margin: '10px 10px 10px 10px', border: 'none', borderBottom: `2px solid ${primaryColor}` }}>Sobre</button>
                                <button style={{ color: '#000', border: 'none', borderBottom: `2px solid #fff` }}>Publicações</button>
                            </div>
                            <div style={{margin: '0px 10px 10px 10px', }}>
                                <div>
                                    <Icon path={mdiEmailOutline} size={0.5} className="icon-battery" style={{ color: '#000', marginRight: '5px' }} />
                                    Email
                                </div>
                                <div>
                                    <p>felipemarques@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TelaPerfil;
