import TelaInicialRelatorio from './telas/telaInicialRelatorio';
import TelaRelatorioModelo01 from './telas/telaRelatorioModelo01';

// Função que retorna os modelos disponíveis
export const getModelById = (id, props) => {
    switch (id) {
        case 'default':
            return (
                <TelaInicialRelatorio
                    loginFile={props.loginFile}
                    primaryColor={props.primaryColor}
                    textColor={props.textColor}
                    storeIcon={props.storeIcon}
                    isLightMode={props.isLightMode}
                    secondaryColor={props.secondaryColor}
                    logoTimeline={props.logoTimeline}
                    bannerStoreIcon={props.bannerStoreIcon}
                    text00={props.text00}
                    headerColor={props.headerColor}
                    splash={props.splash}
                />
            );
        case 'TelaRelatorioModelo01':
            return (
                <TelaRelatorioModelo01
                    textoAdc={props.textoAdc || 'Texto Inicial'}
                    mockups={props.mockups || []} // Recebe mockups dinâmicos
                    onEditText={props.onEditText || ((text) => console.log('Texto editado:', text))}
                />
            );
        default:
            return null;
    }
};

// Modelos disponíveis no modal
export const models = [
    { id: 'default', name: 'Tela Inicial', description: 'Modelo padrão de tela inicial.' },
    {
        id: 'TelaRelatorioModelo01',
        name: 'Tela Relatório Modelo 01',
        description: 'Modelo com mockups selecionáveis e texto editável.',
    },
];
