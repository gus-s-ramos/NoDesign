import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const TelaTicketAereo = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
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
                                    <h6>Ticket Aéreo</h6>
                                </div>
                            </div>
                            <div>
                                <div className="searchBar">
                                    <Icon path={mdiMagnify} size={0.7} className="searchIcon" />
                                    <input type="text" placeholder="Pesquisar" className="searchInput" />
                                </div>
                            </div>

                            <div>
                                <button style={{ color: '#000', margin: '10px 10px 10px 10px', border: 'none', borderBottom: `2px solid ${primaryColor}` }}>Meu voo</button>
                                <button style={{ color: '#000', border: 'none', borderBottom: `2px solid #fff` }}>Minhas acomodações</button>
                            </div>
                            <div>
                                <h2>IDA</h2>
                                <h2>16/07/2025</h2>
                            </div>
                            <div>
                                <h2>VOO 1</h2>
                            </div>
                            <div>
                                <div>
                                    <h2>Código reserva</h2>
                                    <h2>FDBDPF</h2>
                                </div>
                                <div>
                                    <h2>Companhia</h2>
                                    <h2>Gol - GOL203</h2>
                                </div>
                                <div>
                                    <h2>Nome</h2>
                                    <h2>José Silva</h2>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <h2>SSA</h2>
                                        <h2>Salvador</h2>
                                    </div>
                                    <div>
                                        <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                        <h2>10:00</h2>
                                        <h2>16/07/2025</h2>
                                    </div>
                                </div>
                                <div>
                                    <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                </div>
                                <div>
                                    <div>
                                        <h2>SSA</h2>
                                        <h2>Salvador</h2>
                                    </div>
                                    <div>
                                        <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" />
                                        <h2>10:00</h2>
                                        <h2>16/07/2025</h2>
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

export default TelaTicketAereo;
