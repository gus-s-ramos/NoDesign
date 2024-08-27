import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const ScreenThreeIphone55 = React.forwardRef(({ primaryColor, headerColor, logoTimeline, secondaryColor, textColor }, ref) => {
    return (
        <div id="screen-three-iphone-55" className="storePrint03" style={{ backgroundColor: secondaryColor }}>
            <img
                src={logoTimeline}
                className="logoTimelinesHeader"
                style={{ width: '110px', height: '68px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
            />
            <h5 style={{ color: textColor}}>Acesse a programação <br></br> completa pelo app!</h5>
            <div>
                <div className="screenStore" style={{ marginTop: '40px' }}>
                    <div className="timeline-content">
                        <div className="screenfour">
                            <div className="menuNotchStoreOne" style={{ color: 'black' }}>
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
                                    <h6>Agenda - 11 Jan</h6>
                                </div>
                                <div className="labelmenu01">
                                    <Icon path={mdiHeartOutline} size={0.5} className="icon-signal" />
                                    <Icon path={mdiTuneVertical} size={0.5} className="icon-signal" />
                                </div>
                            </div>

                            <div>
                                <div className="searchBar">
                                    <div type="text" className="searchInputBig">
                                        <Icon path={mdiMagnify} size={0.7} className="icon-signal" />
                                        <p>Pesquisar</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='buttonschedule01' style={{ backgroundColor: primaryColor, }}>Aba Geral</button>

                            </div>
                            <div>
                                <button className='buttonschedule' style={{ backgroundColor: primaryColor }}>
                                    <span className="largeText">11</span><br /><span className="smallText">Jan</span>
                                </button>
                            </div>
                            <div className='scheduleHour'>
                                <p>11:00</p>
                                <div className='line'></div>
                            </div>
                            <div className='scheduleLabel'>
                                <div className='scheduleLabel01'>
                                    <div>
                                        <h6>Palestra sobre o futuro da nação</h6>
                                    </div>
                                    <div className='textschedule'>
                                        <Icon path={mdiClockOutline} size={0.5} color="grey" className="icon-signal" />
                                        <p>11:00 - 12:00</p>
                                    </div>
                                    <div className='textschedule'>
                                        <Icon path={mdiMapMarker} size={0.5} color="grey" className="icon-signal" />
                                        <p>Trilha do conhecimento</p>
                                    </div>
                                    <img
                                        src="./assets/foto02.jpeg"
                                        alt="Foto do Usuário"
                                        style={{ width: '20px', height: '20px', borderRadius: '50%' }}
                                    />
                                </div>
                                <div>
                                    <Icon path={mdiHeartOutline} size={0.5} className="icon-signal" />

                                </div>
                            </div>

                            <div className='scheduleHour'>
                                <p>13:00</p>
                                <div className='line'></div>
                            </div>
                            <div className='scheduleLabel'>
                                <div className='scheduleLabel01'>
                                    <div>
                                        <h6>Liderança transformadora: Como inspirar e motivar equipes</h6>
                                    </div>
                                    <div className='textschedule'>
                                        <Icon path={mdiClockOutline} size={0.5} color="grey" className="icon-signal" />
                                        <p>13:00 - 14:00</p>
                                    </div>
                                    <div className='textschedule'>
                                        <Icon path={mdiMapMarker} size={0.5} color="grey" className="icon-signal" />
                                        <p>Trilha do conhecimento</p>
                                    </div>
                                    <img
                                        src="/assets/foto03.jpeg"
                                        alt="Foto do Usuário"
                                        style={{ width: '20px', height: '20px', borderRadius: '50%' }}
                                    />
                                </div>
                                <div>
                                    <Icon path={mdiHeartOutline} size={0.5} className="icon-signal" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default ScreenThreeIphone55;
