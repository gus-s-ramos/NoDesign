import React from 'react';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './screenFourStore.css';

// Função para converter hexadecimal para rgba com opacidade
const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r},${g},${b},${alpha})`;
};

function ScreenFourStore({ headerColor, logoTimeline, secondaryColor, textColor }) {
    const headerColorWithOpacity = hexToRgba(headerColor, 0.3);

    return (
        <div >
            <div className="storePrint" style={{ backgroundColor: secondaryColor }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '84px', height: '42px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <h5 style={{ color: textColor}}>Receba notificações <br></br> em tempo real!</h5>
                <div>
                    <div className="screenStore" style={{ marginTop: '40px' }}>
                        <div className="timeline-content">
                            <div className="screenfour">
                                <div className="menuNotch" style={{ color: 'black' }}>
                                    <h6 className='hoursize'>9:41</h6>
                                    <div className="notchtimeline"></div>
                                    <div className="statusIcons">
                                        <Icon path={mdiSignal} size={0.5} className="icon-signal" />
                                        <Icon path={mdiWifi} size={0.5} className="icon-wifi" />
                                        <Icon path={mdiBattery} size={0.5} className="icon-battery" />
                                    </div>
                                </div>
                                <div className="labelmenu">
                                    <div className="labelmenu01">
                                        <h6>Notificações</h6>
                                    </div>
                                    <div className="labelmenu01"></div>
                                </div>
                                <div className='notificationLabel' style={{ backgroundColor: headerColorWithOpacity }}>
                                    <div className='notificationLabel01'>
                                        <div className="icon-circle" style={{ backgroundColor: headerColor }}>
                                            <Icon path={mdiHeartOutline} style={{ color: 'white' }} size={0.5} className="icon-signal" />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Não se atrase</h6>
                                            <p>A palestra sobre o futuro da nação irá começar em breve.</p>
                                            <p>agora</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} style={{ color: 'black' }} size={0.8} className="icon-signal" />
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

export default ScreenFourStore;
