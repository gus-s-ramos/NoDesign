import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiStar, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline, mdiStarOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaColetorDeLeads = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
    return (
        <div className="screen-three">
            <div className="mockup">
                <div className="phone-frame">
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
                                    <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                    <h6>Dashboard</h6>
                                </div>
                            </div>

                            <div className='labelColetor'>
                                <h2>Coletor de leads</h2>
                                <p>Aponte a camera do celular no crachá de algum participante e colete os leads!</p>
                                <button style={{backgroundColor:primaryColor}}>Escanear Qrcode</button>
                            </div>
                            <h2>Coleta de leads</h2>
                            <div className='leadLabel'>
                                <div className='labelColetor' style={{ width:"50%"}}>
                                    <h2>15:00h</h2>
                                    <p>Última coleta de leads no dia - 07/01/2024</p>
                                </div>
                                <div className='labelColetor' style={{ width:"50%"}}>
                                    <h2>34</h2>
                                    <p>Leads coletados hoje</p>
                                </div>
                            </div>
                            <div className='labelColetor' >
                                <h2>320</h2>
                                <p>Total de leads coletados</p>
                                <button style={{backgroundColor: "#fff", color: primaryColor, borderTop: "1px solid #c7c7c7", borderRadius: "0px"  }}>Ver todos</button>
                            </div>
                            <div>
                                <h2>Ultimos leads coletados</h2>
                            </div>
                            <div className='leadLabel'>
                                <div>
                                    <img
                                        src="/assets/1.jpg"
                                        alt="Foto do Usuário"
                                        style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Maria Antonia
                                    </div>
                                    <div>
                                        11/01 - 13:00h
                                    </div>
                                </div>
                                <div>
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                </div>
                            </div>
                            <div className='leadLabel'>
                                <div>
                                    <img
                                        src="/assets/1.jpg"
                                        alt="Foto do Usuário"
                                        style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Maria Antonia
                                    </div>
                                    <div>
                                        11/01 - 13:00h
                                    </div>
                                </div>
                                <div>
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                </div>
                            </div>
                            <div className='leadLabel'>
                                <div>
                                    <img
                                        src="/assets/1.jpg"
                                        alt="Foto do Usuário"
                                        style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Maria Antonia
                                    </div>
                                    <div>
                                        11/01 - 13:00h
                                    </div>
                                </div>
                                <div>
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStarOutline} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStarOutline} size={0.7} className="icon-star" />
                                </div>
                            </div>
                            <div className='leadLabel'>
                                <div>
                                    <img
                                        src="/assets/1.jpg"
                                        alt="Foto do Usuário"
                                        style={{ width: '30px', height: '30px', borderRadius: '8px' }}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Maria Antonia
                                    </div>
                                    <div>
                                        11/01 - 13:00h
                                    </div>
                                </div>
                                <div>
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStar} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStarOutline} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStarOutline} size={0.7} className="icon-star" />
                                    <Icon style={{ color: primaryColor }} path={mdiStarOutline} size={0.7} className="icon-star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default TelaColetorDeLeads;
