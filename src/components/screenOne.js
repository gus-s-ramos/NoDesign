import React from 'react';
import './screenOne.css';
import mockup from '../assets/cellphonemockup.png';

function ScreenOne({ loginFile, text00 }) {
    return (
        <div className="screen-one">

            <div className="header">

            </div>
            <div className="mockup">
                <div className="phone-frame">
                    <img src={mockup} alt="mockup" className="mockupcellphone" />

                    <div className="screen-content">
                        <div>
                            <div>
                                <img className='previewLoginFile' src={loginFile} alt='tela de login'></img>
                            </div>
                            <div>
                                <h5> Faça seu login</h5>
                            </div>
                            <div>
                                <input type="text" placeholder="Digite seu email" />
                            </div>
                            <div>
                                <input type="text" placeholder="Digite sua senha" />
                            </div>
                            <div>
                                <input type='checkbox' />Aceite nossos <u>Termos e Condições</u> e nossa <u>Politica de Privacidade</u>
                            </div>
                            <div className="button-container">
                                <button className="button"> Fazer login </button>
                            </div>
                            <div>
                                <p> Crie uma conta </p>
                                <p> Esqueceu a senha?  </p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenOne;
