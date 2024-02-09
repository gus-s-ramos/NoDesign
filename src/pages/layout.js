import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import './layout.css';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScreenOne from '../components/screenOne.js';


function Layout() {

  /* APENAS DESTINADO A SESSÃO DE ASSETS DO PROJETO */

  const [splash, setSplash] = useState('https://placehold.co/215x445');
  const [loginFile, setLoginFile] = useState('https://placehold.co/300x241');
  const [logoTimeline, setLogoTimeline] = useState('https://placehold.co/300x149');
  const [storeIcon, setStoreIcon] = useState('https://placehold.co/445x445');

  const inputFileRefSplash = useRef(null);
  const inputFileRefLogin = useRef(null);
  const inputFileRefLogo = useRef(null);
  const inputFileRefStore = useRef(null);

  function handleChange(e) {
    const selectedSplash = e.target.files[0];
    setSplash(URL.createObjectURL(selectedSplash));
  }
  function handleChange01(e) {
    const selectedLoginFile = e.target.files[0];
    setLoginFile(URL.createObjectURL(selectedLoginFile));
  }
  function handleChange02(e) {
    const selectedLogoTimeline = e.target.files[0];
    setLogoTimeline(URL.createObjectURL(selectedLogoTimeline));
  }
  function handleChange03(e) {
    const selectedStoreIcon = e.target.files[0];
    setStoreIcon(URL.createObjectURL(selectedStoreIcon));
  }

  const [primaryColor, setPrimaryColor] = useState('#010101');
  const [secondaryColor, setSecondaryColor] = useState('#000');
  const [headerColor, setHeaderColor] = useState('#a2a2a2');
  const [textColor, setTextColor] = useState('#ffffff');
  const [selectColor, selectedColor] = useState("#000000");
  const [text00, setText00] = useState('NOME DO APLICATIVO');


  const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false);
  const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false);
  const [showHeaderColorPicker, setShowHeaderColorPicker] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);


  const handleColorChange = (color, buttonType) => {
    selectedColor(color.hex);
    if (buttonType === 'primaryColor') {
      setPrimaryColor(color.hex);
    } else if (buttonType === 'headerColor') {
      setHeaderColor(color.hex);
    } else if (buttonType === 'textColor') {
      setTextColor(color.hex);
    } else if (buttonType === 'secondaryColor') {
      setSecondaryColor(color.hex);
    }
  };

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'primaryColor') {
      setShowPrimaryColorPicker(!showPrimaryColorPicker);
      setShowSecondaryColorPicker(false);
      setShowHeaderColorPicker(false);
      setShowTextColorPicker(false);
    } else if (buttonType === 'secondaryColor') {
      setShowSecondaryColorPicker(!showSecondaryColorPicker);
      setShowPrimaryColorPicker(false);
      setShowHeaderColorPicker(false);
      setShowTextColorPicker(false);
    } else if (buttonType === 'headerColor') {
      setShowHeaderColorPicker(!showHeaderColorPicker);
      setShowPrimaryColorPicker(false);
      setShowSecondaryColorPicker(false);
      setShowTextColorPicker(false);
    } else if (buttonType === 'textColor') {
      setShowTextColorPicker(!showTextColorPicker);
      setShowPrimaryColorPicker(false);
      setShowSecondaryColorPicker(false);
      setShowHeaderColorPicker(false);
    }
  };



  return (
    <div className="containerPai">
      <div className="AssetsContainer">
        <h1>Prévia de layout</h1>
        <div><h1>Assets</h1>
          <div className="containerColor">
            <div className="logoSection">
              <div className="logoPreviewContainer">
                <div className="logoTitleContainer">
                  <h3>SPLASH:</h3>
                </div>
                <div>
                  <img src={splash} className="splash-image" />
                </div>
                <div>
                  <div className="buttonContainer">
                    <button className="splashButton" onClick={() => inputFileRefSplash.current.click()}>
                      BUSCAR
                    </button>
                    <input
                      ref={inputFileRefSplash}
                      className="inputFile"
                      type="file"
                      onChange={handleChange}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="logoPreviewContainer">
              <div>
                <div className="logoTitleContainer">
                  <h3>TELA LOGIN:</h3>
                </div>
                <div>
                  <img src={loginFile} className="login-image" />
                </div>
                <div>
                  <div className="buttonContainer">
                    <button className="loginImageButton" onClick={() => inputFileRefLogin.current.click()}>
                      BUSCAR
                    </button>
                    <input
                      ref={inputFileRefLogin}
                      className="inputFile"
                      type="file"
                      onChange={handleChange01}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="logoPreviewContainer">

                <div className="logoTitleContainer">
                  <h3>LOGO TIMELINE:</h3>
                </div>
                <div>
                  <img src={logoTimeline} className="logoTimeline-image" />
                </div>
                <div>
                  <div className="buttonContainer">
                    <button className="logoTimelineButton" onClick={() => inputFileRefLogo.current.click()}>
                      BUSCAR
                    </button>
                    <input
                      ref={inputFileRefLogo}
                      className="inputFile"
                      type="file"
                      onChange={handleChange02}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="logoPreviewContainer">

              <div className="logoTitleContainer">
                <h3>ICONE DA LOJA:</h3>
              </div>
              <div>
                <img src={storeIcon} className="store-image" />
              </div>
              <div>
                <div className="buttonContainer">
                  <button className="storeIconButton" onClick={() => inputFileRefStore.current.click()}>
                    BUSCAR
                  </button>
                  <input
                    ref={inputFileRefStore}
                    className="inputFile"
                    type="file"
                    onChange={handleChange03}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <h1>Cores do aplicativo</h1>
        <div className="containerColor">

          <div className="colorSection">
            <div className='TitleColorSection'>
              <h3>COR PRIMÁRIA</h3>
            </div>
            <div>
              <button
                style={{
                  width: "210px",
                  height: "100px",
                  backgroundColor: primaryColor,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
                onClick={() => handleButtonClick('primaryColor')}
              />
            </div>
            <div >
              <input className='ColorColorSection'
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
              />


            </div>

            {showPrimaryColorPicker && (
              <div>
                <ChromePicker color={setPrimaryColor} onChange={(color) => handleColorChange(color, 'primaryColor')} />
              </div>
            )}
          </div>


          <div className="colorSection">
            <div className='TitleColorSection'>
              <h3>COR DO HEADER:</h3>
            </div>
            <div>
              <button
                style={{
                  width: "210px",
                  height: "100px",
                  backgroundColor: headerColor,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
                onClick={() => handleButtonClick('headerColor')}
              />
            </div>
            <div >
              <input className='ColorColorSection'
                type="text"
                value={headerColor}
                onChange={(e) => setHeaderColor(e.target.value)}

              />
            </div>
            {showHeaderColorPicker && (
              <div>
                <ChromePicker color={headerColor} onChange={(color) => handleColorChange(color, 'headerColor')} />
              </div>
            )}
          </div>
          <div className="colorSection">
            <div className='TitleColorSection'>
              <h3>COR DO TEXTO:</h3>
            </div>
            <div>
              <button
                style={{
                  width: "210px",
                  height: "100px",
                  backgroundColor: textColor,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
                onClick={() => handleButtonClick('textColor')}
              />
            </div>
            <div >
              <input className='ColorColorSection'
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}

              />
            </div>
            {showTextColorPicker && (
              <div>
                <ChromePicker color={textColor} onChange={(color) => handleColorChange(color, 'textColor')} />
              </div>
            )}
          </div>
          <div className="colorSection">
            <div className='TitleColorSection'>
              <h3>COR DO TEXTO SECUNDÁRIO:</h3>
            </div>
            <div>
              <button
                style={{
                  width: "210px",
                  height: "100px",
                  backgroundColor: secondaryColor,
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
                onClick={() => handleButtonClick('secondaryColor')}
              />
            </div>
            <div >
              <input className='ColorColorSection'
                type="text"
                value={secondaryColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
            {showSecondaryColorPicker && (
              <div>
                <ChromePicker color={secondaryColor} onChange={(color) => handleColorChange(color, 'secondaryColor')} />
              </div>
            )}
          </div>
        </div>
        <div className="containerRow">
          <h1>Nome do aplicativo</h1>
          <div className="containerRules">
            <textarea
              type="text"
              value={text00}
              onChange={(e) => setText00(e.target.value)}
              className="largerInput"
            />
          </div>
        </div>
        <div>
          <h1>Modo de visualização</h1>
          <div>
            <input type='checkbox' />Light Mode
            <input type='checkbox' />Dark Mode
          </div>
        </div>

        <div>
          <h1>Linguagem do aplicativo</h1>
          <div>
            <input type='checkbox' />Português
            <input type='checkbox' />Inglês
            <input type='checkbox' />Espanhol
          </div>
        </div>
      </div>
      <div>
      </div>
      <div>
        <div className="layoutPreview">
          <ScreenOne loginFile={loginFile} text00={text00} />
        </div>

      </div>
    </div>
  );
}

export default Layout;
