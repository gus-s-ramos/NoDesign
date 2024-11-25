import React, { forwardRef, useState} from 'react';
import Icon from '@mdi/react';
import { mdiMagnify, mdiDotsVertical, mdiChevronLeft, mdiTuneVertical, mdiMapMarker, mdiClockOutline, mdiSignal, mdiWifi, mdiBattery, mdiHeartOutline } from '@mdi/js';
import './telaAgenda.css';



// function ScreenThreeStore({ headerColor, logoTimeline, secondaryColor }) {
const telaEnquete = React.forwardRef(({ primaryColor, logoTimeline, secondaryColor, textColor }, ref) => {
    const [selectedOption, setSelectedOption] = useState(null); // Estado para controlar a opção selecionada

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

    const options = [
        { year: 2015, percentage: '10%' },
        { year: 2016, percentage: '10%' },
        { year: 2017, percentage: '70%' },
        { year: 2018, percentage: '10%' },
    ];

    const handleOptionSelect = (year) => {
        setSelectedOption(year);
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
                                <h6>Em que ano a Yazo inciou o processo da coleta de Leads dentro do aplicativo?</h6>
                                <div>
                                    {options.map((option) => (
                                        <div
                                            key={option.year}
                                            onClick={() => handleOptionSelect(option.year)}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                padding: '10px',
                                                margin: '5px',
                                                backgroundColor: selectedOption === option.year ? '#00B46F' : '#e7e7e7',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <span style={{ color: selectedOption === option.year ? 'white' : 'black' }}>{option.year}</span>
                                            <span style={{ color: selectedOption === option.year ? 'white' : 'black' }}>{option.percentage}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                    <button style={{ padding: '10px 20px', backgroundColor: primaryColor, color: '#fff', borderRadius: '8px', border: 'none' }}>
                                        Próximo
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default telaEnquete;
