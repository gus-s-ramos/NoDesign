import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiStar, mdiStarOutline, mdiCrownOutline, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaRanking = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <h6>Ranking</h6>
                                </div>
                            </div>

                            <div>
                                <div className="searchBar">
                                    <Icon path={mdiMagnify} size={0.7} className="searchIcon" />
                                    <input type="text" placeholder="Pesquisar" className="searchInput" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "center", alignItems: "flex-end" }} >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "45px" }}>
                                    <img src="/assets/foto01.jpeg" style={{ width: '60px', height: '60px', marginBottom: '15px', borderRadius: '16px' }} className='profilePicture' alt="App Icon"
                                    />
                                    <h2>Tales</h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: primaryColor, color: 'white', padding: '15px', borderRadius: '10px 10px 0px 0px' }}>
                                        <p style={{ color: 'white' }}>
                                            820 pts
                                        </p>
                                        <h2>2º</h2>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '45px' }}>
                                    <Icon path={mdiCrownOutline} size={0.7} />
                                    <img src="/assets/foto01.jpeg" style={{ width: '60px', height: '60px', borderRadius: '16px', marginBottom: '0px' }} className='profilePicture' alt="App Icon"
                                    />
                                    <h2>Tales</h2>
                                    <div style={{paddingBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: primaryColor, color: 'white', padding: '15px', borderRadius: '10px 10px 0px 0px' }}>
                                        <p style={{ color: 'white' }}>
                                            1020 pts
                                        </p>
                                        <h2 >1º</h2>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "45px" }}>
                                    <img src="/assets/foto01.jpeg" style={{ width: '60px', height: '60px', marginBottom: '0px', borderRadius: '16px' }} className='profilePicture' alt="App Icon"
                                    />
                                    <h2>Tales</h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: primaryColor, color: 'white', padding: '15px', borderRadius: '10px 10px 0px 0px' }}>
                                        <p style={{ color: 'white' }}>
                                            620 pts
                                        </p>
                                        <h2>3º</h2>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h2 style={{ marginLeft: '10px' }}>Todos os usuários</h2>

                                <div className='leadLabel' style={{ borderBottom: '1px solid #c3c3c3', height: '50px' }}>
                                    <div>
                                        <div>
                                            1º
                                        </div>

                                    </div>
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

                                    </div>
                                    <div>
                                        <p>450pts</p>
                                    </div>
                                </div>
                                <div className='leadLabel' style={{ borderBottom: '1px solid #c3c3c3', height: '70px' }} >
                                    <div>
                                        <div>
                                            2º
                                        </div>

                                    </div>
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

                                    </div>
                                    <div>
                                        <p>450pts</p>
                                    </div>
                                </div>
                                <div className='leadLabel' style={{ borderBottom: '1px solid #c3c3c3', height: '50px' }}>
                                    <div>
                                        <div>
                                            3º
                                        </div>

                                    </div>
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

                                    </div>
                                    <div>
                                        <p>450pts</p>
                                    </div>
                                </div>
                                <div className='leadLabel'>
                                    <div>
                                        <div>
                                            4º
                                        </div>

                                    </div>
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

                                    </div>
                                    <div>
                                        <p>450pts</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
})

export default TelaRanking;
