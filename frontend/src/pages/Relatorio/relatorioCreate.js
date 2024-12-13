import React, { useState } from 'react';
import './relatorio.css';
import ScreenPreviewRelatorio from './screenPreviewRelatorio';
import ScreenInfo from './screenInfo';
import SelectedScreen from './selectedScreen';
import ModalSelecaoTemplate from './modalSelecaoTemplate';
import SelectScreensModal from './modalSelecaoMockup';
import { getModelById } from './models';
import TelaLogin from '../../../src/components/telaLogin';
import TelaSplash from '../../../src/components/telaSplash';
import TelaTimeline from '../../../src/components/TelaTimeline';
import TelaLojaApp from '../../../src/components/telaLojaApp';
import TelaRelatorioModelo01 from './telas/telaRelatorioModelo01';

function RelatorioCreate() {
    const allScreens = [
        {
            id: 'TelaLogin',
            name: 'Tela de Login',
            component: (props) => <TelaLogin {...props} />,
        },
        {
            id: 'TelaSplash',
            name: 'Tela de Splash',
            component: (props) => <TelaSplash {...props} />,
        },
        {
            id: 'TelaTimeline',
            name: 'Tela de Timeline',
            component: (props) => <TelaTimeline {...props} />,
        },
        {
            id: 'TelaLojaApp',
            name: 'Tela de Loja App',
            component: (props) => <TelaLojaApp {...props} />,
        },
        {
            id: 'Tela'
        }

    ];

    const [screens, setScreens] = useState([
        {
            id: 1,
            type: 'TelaInicialRelatorio',
            title: 'Estratégias Yazo para o seu evento', // Texto do <h2>
            screens: ['TelaLogin', 'TelaSplash', 'TelaTimeline'], // Telas exibidas na galeria
            loginFile: 'https://placehold.co/1900x1500',
            splash: 'https://placehold.co/360x777',
            primaryColor: '#821938',
            secondaryColor: '#f1f1f1',
            headerColor: '#ffa00c',
            logoTimeline: 'https://placehold.co/254x128',
            storeIcon: 'https://placehold.co/128x128',
            bannerStoreIcon: 'https://placehold.co/621x1344',
            textColor: '#000',
            isLightMode: true,
        },
    ]);

    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMockupModalOpen, setIsMockupModalOpen] = useState(false);
    const [mockupsDisponiveis, setMockupsDisponiveis] = useState([]);
    const [selectedModelId, setSelectedModelId] = useState(null);

    const handleAddScreen = () => {
        setIsModalOpen(true);
    };

    const handleSelectModel = (modelId) => {
        if (modelId === 'TelaRelatorioModelo01') {
            // Define mockups disponíveis para seleção
            setMockupsDisponiveis([
                { id: 'mockup1', name: 'Mockup 1', component: () => <img src="https://placehold.co/200x300?text=Mockup+1" alt="Mockup 1" /> },
                { id: 'mockup2', name: 'Mockup 2', component: () => <img src="https://placehold.co/200x300?text=Mockup+2" alt="Mockup 2" /> },
                { id: 'mockup3', name: 'Mockup 3', component: () => <img src="https://placehold.co/200x300?text=Mockup+3" alt="Mockup 3" /> },
            ]);
            setSelectedModelId(modelId);
            setIsMockupModalOpen(true); // Abre o modal de seleção de mockups
        } else {
            // Para outros modelos, adiciona diretamente
            const newScreen = {
                id: screens.length + 1,
                type: modelId,
                component: getModelById(modelId, {}),
            };
            setScreens([...screens, newScreen]);
            setCurrentScreenIndex(screens.length); // Seleciona a nova tela
            setIsModalOpen(false); // Fecha o modal
        }
    };

    const handleMockupSelection = (selectedScreens) => {
    const selectedScreenObjects = selectedScreens.map((id) => {
        const screen = allScreens.find((screen) => screen.id === id);
        return screen
            ? {
                  id: screen.id,
                  name: screen.name,
                  component: screen.component, // Mantém a função component
              }
            : null; // Ignora telas não encontradas
    }).filter(Boolean); // Remove itens inválidos

    const newScreen = {
        id: screens.length + 1,
        type: selectedModelId,
        component: getModelById(selectedModelId, {
            textoAdc: 'Texto Inicial',
            mockups: selectedScreenObjects,
            allScreens,
        }),
    };

    setScreens([...screens, newScreen]);
    setCurrentScreenIndex(screens.length); // Seleciona a nova tela
    setIsMockupModalOpen(false); // Fecha o modal
};




    return (
        <div>
            <div className="containerLayout">
                <div className="divSliderContent">
                    <SelectedScreen
                        currentScreenIndex={currentScreenIndex}
                        screenRepresentations={screens.map((screen) => screen.component)}
                        handleScreenClick={setCurrentScreenIndex}
                        handleAddScreen={handleAddScreen}
                    />
                </div>
                <div className="divScreenContent">
                    <ScreenPreviewRelatorio
                        screens={screens.map((screen) => screen.component)}
                        currentScreenIndex={currentScreenIndex}
                        setCurrentScreenIndex={setCurrentScreenIndex}
                        allScreens={allScreens}
                    />
                </div>
                <div className="divContent">
                    <ScreenInfo
                        currentScreen={screens[currentScreenIndex]}
                        setCurrentScreen={(updatedScreen) => {
                            const updatedScreens = [...screens];
                            updatedScreens[currentScreenIndex] = updatedScreen;
                            setScreens(updatedScreens);
                        }}
                        allScreens={allScreens}
                    />
                </div>
                <ModalSelecaoTemplate
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSelectModel={handleSelectModel}
                    allScreens={allScreens}
                />
                <SelectScreensModal
                    isOpen={isMockupModalOpen}
                    onClose={() => setIsMockupModalOpen(false)}
                    allScreens={allScreens}
                    selectedScreens={[]} // Nenhum mockup selecionado inicialmente
                    setSelectedScreens={handleMockupSelection}
                />
            </div>
        </div>
    );
}

export default RelatorioCreate;
