import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './screenIphone65.css'



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const ScreenThreeIphone65 = React.forwardRef(({ logoTimeline, primaryColor, secondaryColor }, ref) => {
    return (
            <div id="screen-three-iphone-65" className="storeIphone" style={{ backgroundColor: secondaryColor }}>
                <img
                    src={logoTimeline}
                    className="logoTimelinesHeader"
                    style={{ width: '100px', height: '58px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
                />
                <h5>Acesse a programação <br></br> completa pelo app!</h5>
                <div>
                    <div className="screenIphone" style={{ marginTop: '40px' }}>
                        <div className="timelineContentBig">
                            <div className="screenfourbig">
                                <div className="menuNotchStoreOne" style={{ color: 'black' }}>
                                    <h6 className='hoursize'>9:41</h6>
                                    <div className="notchtimeline"></div>
                                    <div className="statusIcons">
                                        <Icon path={mdiSignal} size={0.6} className="icon-signal" />
                                        <Icon path={mdiWifi} size={0.6} className="icon-wifi" />
                                        <Icon path={mdiBattery} size={0.6} className="icon-battery" />
                                    </div>

                                </div>
                                <div className="labelmenu">
                                    <div className="labelmenu01">
                                        <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                        <h7>Agenda - 11 Jan</h7>
                                    </div>
                                    <div className="labelmenu01">
                                        <Icon path={mdiHeartOutline} size={0.6} className="icon-signal" />
                                        <Icon path={mdiTuneVertical} size={0.6} className="icon-signal" />
                                    </div>
                                </div>

                                <div>
                                    <div className="searchBar">
                                        <Icon path={mdiMagnify} size={0.7} className="searchIconBig" />
                                        <input type="text" placeholder="Pesquisar" className="searchInputBig" />
                                    </div>
                                </div>
                                <div>
                                    <button className='buttonschedulebig' style={{ backgroundColor: primaryColor, }}>Aba Geral</button>

                                </div>
                                <div>
                                    <button className='buttonschedulebig' style={{ backgroundColor: primaryColor }}>
                                        <span className="largeTextBig">11</span><br /><span className="smallTextBig">Jan</span>
                                    </button>
                                </div>
                                <div>
                                    <p>11:00</p>
                                    <div className='line'></div>
                                </div>
                                <div className='scheduleLabel'>
                                    <div className='scheduleLabel01'>
                                        <div>
                                            <h8>Palestra sobre o futuro da nação</h8>
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
                                            src="./assets/1.jpg"
                                            alt="Foto do Usuário"
                                            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                                        />
                                    </div>
                                    <div>
                                        <Icon path={mdiHeartOutline} size={0.5} className="icon-signal" />

                                    </div>
                                </div>

                                <div>
                                    <p>13:00</p>
                                    <div className='line'></div>
                                </div>
                                <div className='scheduleLabel'>
                                    <div className='scheduleLabel01'>
                                        <div>
                                            <h8>Liderança transformadora: Como inspirar e motivar equipes</h8>
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
                                            src="/assets/4.jpg"
                                            alt="Foto do Usuário"
                                            style={{ width: '30px', height: '30px', borderRadius: '50%' }}
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

export default ScreenThreeIphone65;
