import React from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiSignal, mdiWifi, mdiBattery } from '@mdi/js';



function ScreenTwoStoreDownload({ primaryColor, secondaryColor, logoTimeline, textColor }) {

    return (
        <div id="screen-two-store-content" className="storePrintDownload" style={{ backgroundColor: secondaryColor, }}>
            <img
                src={logoTimeline}
                className="logoTimelinesHeader"
                style={{ width: '110px', height: '68px', objectFit: 'cover', paddingBottom: '40px', paddingTop: '40px' }}
            />
            <h5 style={{ color: textColor}}>Tenha contato com os <br></br> outros participantes!</h5>
            <div>
                <div className="screenStore" style={{ marginTop: '40px' }}>
                    <div className="timeline-content">
                        <div className="screenfour">
                            <div className="menuNotchStoreOne" style={{ color: 'black' }}>
                                <h6 className='hoursize'>9:41</h6>
                                <div className="notchtimeline"></div>
                                <div className="statusIcons">
                                    <Icon path={mdiSignal} size={0.5} className="icon-signal" style={{ color: 'black' }}/>
                                    <Icon path={mdiWifi} size={0.5} className="icon-wifi" style={{ color: 'black' }}/>
                                    <Icon path={mdiBattery} size={0.5} className="icon-battery" style={{ color: 'black' }}/>
                                </div>

                            </div>
                            <div className="labelmenu">
                                <div className="labelmenu01">
                                    <Icon path={mdiChevronLeft} size={0.5} className="icon-signal" style={{ color: 'black' }}/>
                                    <h6>Área de networking</h6>
                                </div>
                                <div className="labelmenu01">

                                    <Icon path={mdiTuneVertical} size={0.5} className="icon-signal" style={{ color: 'black' }}/>
                                </div>
                            </div>
                            <div className='networkingButton'>
                                <button className='buttonprimary' style={{ borderBottom: `2px solid ${primaryColor}` }}>Todos</button>
                                <button className='buttonsecundary'>Contatos</button>
                                <button className='buttonsecundary'>Pendentes</button>
                            </div>
                            <div>
                                <div className="searchBar">
                                    <div type="text" className="searchInputBig">
                                        <Icon path={mdiMagnify} size={0.7} className="icon-signal" style={{ color: 'black' }}/>
                                        <p>Pesquisar</p>
                                    </div>
                                </div>

                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/foto03.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Tales Henrique</h6>
                                            <p>27 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" style={{ color: 'black' }}/>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/foto04.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Sandra Dias</h6>
                                            <p>9 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div >
                                            <img
                                                src="/assets/foto05.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Rodrigo Silva</h6>
                                            <p>30 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking'>Cancelar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/foto06.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Mônica Mathias</h6>
                                            <p>15 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Icon path={mdiDotsVertical} size={0.7} className="icon-signal" style={{ color: 'black' }}/>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/foto11.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Rogério Antunes</h6>
                                            <p>30 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                    <button className='buttonNetworking'>Cancelar</button>
                                    </div>
                                </div>
                                <div className="userLabel">
                                    <div className="userLabel01">
                                        <div>
                                            <img
                                                src="/assets/foto10.jpeg"
                                                alt="Foto do Usuário"
                                                style={{ width: '30px', height: '30px', borderRadius: '6px' }}
                                            />
                                        </div>
                                        <div className='app-details'>
                                            <h6>Vanessa Machado</h6>
                                            <p>9 amigos em comum</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='buttonNetworking01' style={{ backgroundColor: primaryColor }}>Adicionar</button>
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

export default ScreenTwoStoreDownload;
