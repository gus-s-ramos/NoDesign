import React, { forwardRef } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const telaQuiz = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {

    const circleStyle = {
        width: '20px', // Ajuste o tamanho desejado
        height: '20px',
        borderRadius: '50%',
        border: `4px solid ${primaryColor}`, // Ajuste a espessura e a cor da borda
        position: 'relative',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%, 0% 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000', // Cor do número dentro do círculo
        fontSize: '12px',
        fontWeight: 'bold',
    };

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
                                    <h6>Quiz/Enquete</h6>
                                </div>
                            </div>
                            <div className="labelmenu" style={{ borderBottom: `1px solid #c5c5c5`, paddingBottom: '10px', margin: '10px' }}>
                                <h2 style={{ color: '#000', margin: '10px 10px 10px 10px', border: 'none' }}>Questão 1/10</h2>
                                <div style={circleStyle}>
                                    2/4
                                </div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <h6>Você trabalha com eventos?</h6>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <button style={{ margin: '10px', padding: '30px', color: 'green', border: 'none', backgroundColor: '#e7e7e7', borderRadius: '12px' }}>SIM</button>
                                <button style={{ margin: '10px', padding: '30px', color: 'red', border: 'none', backgroundColor: '#e7e7e7', borderRadius: '12px' }}>NÃO</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default telaQuiz;
