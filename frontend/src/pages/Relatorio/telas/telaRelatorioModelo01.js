import React from 'react';
import './telaRelatorioModelo01.css';

function TelaRelatorioModelo01({ textoAdc, mockups = [], allScreens = [] }) {
    return (
        <div className="tela-relatorio-modelo01">
            <div className="header">
                <h2>{textoAdc}</h2>
            </div>
            <div className="contentTela01">
                {mockups.length > 0 ? (
                    mockups.map((mockup, index) => (
                        <div key={index} className="mockup-container">
                            {mockup.component ? (
                                // Renderiza o componente com as propriedades desejadas
                                mockup.component({
                                    loginFile: 'https://placehold.co/1900x1500',
                                    splash: 'https://placehold.co/360x777',
                                    primaryColor: '#FFFFFF',
                                    secondaryColor: '#000000',
                                    headerColor: '#123456',
                                    textColor: '#000',
                                    isLightMode: true,
                                    logoTimeline: 'https://placehold.co/254x128',
                                    storeIcon: 'https://placehold.co/128x128',
                                    bannerStoreIcon: 'https://placehold.co/621x1344',
                                })
                            ) : (
                                <p>Mockup inválido</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Nenhum mockup selecionado</p>
                )}
            </div>
        </div>
    );
}


export default TelaRelatorioModelo01;
