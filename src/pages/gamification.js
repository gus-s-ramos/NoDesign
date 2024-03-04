import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import './gamification.css';
import html2canvas from 'html2canvas';
import poweredby from "../assets/poweredby.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-solid-svg-icons';



function Gamification() {
  const [file, setFile] = useState('https://placehold.co/300x128');
  const [textColor, setPrimaryColor] = useState('#000');
  const [secundaryTextColor, setSecundaryColor] = useState('#a2a2a2');
  const [backgroundColor, setBackgroundColor] = useState('#f8f8f8');
  const [selectColor, selectedColor] = useState("#000000");
  const [text00, setText00] = useState('Pontuação');
  const [text01, setText01] = useState('O evento todo está gamificado! Isso significa que você pode ganhar pontos interagindo dentro do app e os primeiros do ranking vão ganhar prêmios especiais do evento');
  const [text02, setText02] = useState('NOME DA REGRA');
  const [text03, setText03] = useState('NOME DA REGRA');
  const [text04, setText04] = useState('NOME DA REGRA');
  const [text05, setText05] = useState('NOME DA REGRA');
  const [text06, setText06] = useState('QNT PTS');
  const [text07, setText07] = useState('QNT PTS');
  const [text08, setText08] = useState('QNT PTS');
  const [text09, setText09] = useState('QNT PTS');
  const [text10, setText10] = useState('Teremos ações extraordinárias com pontuações extras como, por exemplo, QRCodes, notificações, games na timeline e nos quizzes. Fique atento para não perder nada.As atividades são sujeitas a moderação do time, por isso atividades como spamming e criação de contas fakes não serão permitidas, podendo acarretar no bloqueio de postagens na timeline e contas fakes serão apagadas.Os prêmios serão divulgados durante o dia na timeline do evento. Não fique de fora!');
  const [text11, setText11] = useState('Regra de Gamificação');
  const [text12, setText12] = useState('Observações');

  const [showPrimaryColorPicker, setShowPrimaryColorPicker] = useState(false);
  const [showSecondaryColorPicker, setShowSecondaryColorPicker] = useState(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);


  const handleColorChange = (color, buttonType) => {
    selectedColor(color.hex);
    if (buttonType === 'primaryColor') {
      setPrimaryColor(color.hex);
    } else if (buttonType === 'secondaryColor') {
      setSecundaryColor(color.hex);
    } else if (buttonType === 'backgroundColor') {
      setBackgroundColor(color.hex);
    }
  };

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'primaryColor') {
      setShowPrimaryColorPicker(!showPrimaryColorPicker);
      setShowSecondaryColorPicker(false);
      setShowBackgroundColorPicker(false);
    } else if (buttonType === 'secondaryColor') {
      setShowSecondaryColorPicker(!showSecondaryColorPicker);
      setShowPrimaryColorPicker(false);
      setShowBackgroundColorPicker(false);
    } else if (buttonType === 'backgroundColor') {
      setShowBackgroundColorPicker(!showBackgroundColorPicker);
      setShowPrimaryColorPicker(false);
      setShowSecondaryColorPicker(false);
    }
  };

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  }

  const [additionalInputs, setAdditionalInputs] = useState([]);

  const addAdditionalInputs = () => {
    setAdditionalInputs([...additionalInputs, { text01: 'NOME DA REGRA', text: 'QNT PTS' }]);
  };

  const handleDownloadClick = () => {
    const previewContainer = document.querySelector('.previews');
    const scale = 2;

    const scaledWidth = previewContainer.offsetWidth * scale;
    const scaledHeight = previewContainer.offsetHeight * scale;


    html2canvas(previewContainer, { scale }).then(canvas => {
      const image = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'preview.jpg';
      link.click();
    });
  };

  const [editingObservationTitle, setEditingObservationTitle] = useState(false);
  const [editedObservationTitle, setEditedObservationTitle] = useState(text12);

  const [editingScoreTitle, setEditingScoreTitle] = useState(false);
  const [editedScoreTitle, setEditedScoreTitle] = useState(text00);

  const [editingTitle, setEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(text11);

  const inputFileRef = useRef(null);

  const startEditingTitle = () => {
    setEditingTitle(true);
    setEditedTitle(text11);
  };

  const saveEditedTitle = () => {
    setText11(editedTitle);
    setEditingTitle(false);
  }

  const startEditingScoreTitle = () => {
    setEditingScoreTitle(true);
    setEditedScoreTitle(text00);
  };

  const saveEditedScoreTitle = () => {
    setText00(editedScoreTitle);
    setEditingScoreTitle(false);
  };

  const startEditingObservationTitle = () => {
    setEditingObservationTitle(true);
    setEditedObservationTitle(text12);
  };

  const saveEditedObservationTitle = () => {
    setText00(editedObservationTitle);
    setEditingObservationTitle(false);
  };


  return (
    <div className="containerPai">

      <div className="EditableContainer">
        <div className='TituloPagina'>
          <h1>Criar Regra Gamificação</h1>
        </div>
        <div className='TitleColor'>
          <h1>Selecione as cores</h1>


          <div className="containerColor">


            <div className="logoSection">

              <div className="logoPreviewContainer">

                <div className="logoTitleContainer">
                  <h3>LOGO (300x128):</h3>

                </div>
                <div className='previewImage'>
                  <img src={file} className="preview-image" />
                </div>
                <div>
                  <div className="buttonContainer">
                    <button className="customButton" onClick={() => inputFileRef.current.click()}>
                      BUSCAR
                    </button>
                    <input
                      ref={inputFileRef}
                      className="inputFile"
                      type="file"
                      onChange={handleChange}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="colorSection">
              <div className='TitleColorSection'>
                <h3>COR PRIMÁRIA</h3>
              </div>
              <div>
                <button
                  style={{
                    width: "200px",
                    height: "75px",
                    backgroundColor: textColor,
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
                  value={textColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />


              </div>

              {showPrimaryColorPicker && (
                <div>
                  <ChromePicker color={selectedColor} onChange={(color) => handleColorChange(color, 'primaryColor')} />
                </div>
              )}
            </div>


            <div className="colorSection">
              <div className='TitleColorSection'>
                <h3>COR SECUNDÁRIA:</h3>
              </div>
              <div>
                <button
                  style={{
                    width: "200px",
                    height: "75px",
                    backgroundColor: secundaryTextColor,
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
                  value={secundaryTextColor}
                  onChange={(e) => setSecundaryColor(e.target.value)}

                />

              </div>


              {showSecondaryColorPicker && (
                <div>
                  <ChromePicker color={textColor} onChange={(color) => handleColorChange(color, 'secondaryColor')} />
                </div>
              )}
            </div>
            <div className="colorSection">
              <div className='TitleColorSection'>
                <h3>COR DE FUNDO:</h3>
              </div>
              <div>
                <button
                  style={{
                    width: "200px",
                    height: "75px",
                    backgroundColor: backgroundColor,
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleButtonClick('backgroundColor')}
                />
              </div>
              <div >
                <input className='ColorColorSection'
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}

                />


              </div>
              {showBackgroundColorPicker && (
                <div>
                  <ChromePicker color={backgroundColor} onChange={(color) => handleColorChange(color, 'backgroundColor')} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="containerRow">
          <div className="containerRules">
            <div style={{ display: "flex", alignItems: "center" }}>
              {editingTitle ? (
                <>
                  <input className='EditedInput'
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <button className='editButton' onClick={saveEditedTitle}  ><FontAwesomeIcon icon={faFloppyDisk} /></button>
                </>
              ) : (
                <>
                  <h1>{text11}</h1>
                  <button className='editButton' onClick={startEditingTitle}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </>
              )}
            </div>

            <textarea
              type="text"
              value={text01}
              onChange={(e) => setText01(e.target.value)}
              className="largerInput"
            />
          </div>

          <div className='ContainerPoints'>
            <div style={{ display: "flex", alignItems: "center" }} >
              {editingScoreTitle ? (
                <>
                  <input className='EditedInput'
                    type="text"
                    value={editedScoreTitle}
                    onChange={(e) => setEditedScoreTitle(e.target.value)}
                  />
                  <button className='editButton' onClick={saveEditedScoreTitle}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                </>
              ) : (
                <>
                  <h1>{editedScoreTitle}</h1>
                  <button className='editButton' onClick={startEditingScoreTitle}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </>
              )}
            </div>
            <div className='PointsContainer'>
              <input className='RuleName'
                type="text"
                value={text02}
                onChange={(e) => setText02(e.target.value)}
              />
              <input className='RulePoint'
                type="text"
                value={text06}
                onChange={(e) => setText06(e.target.value)}
              />
            </div>

            <div className='PointsContainer'>
              <input className='RuleName'
                type="text"
                value={text03}
                onChange={(e) => setText03(e.target.value)}
              />
              <input className='RulePoint'
                type="text"
                value={text07}
                onChange={(e) => setText07(e.target.value)}
              />
            </div>

            <div className='PointsContainer'>
              <input className='RuleName'
                type="text"
                value={text04}
                onChange={(e) => setText04(e.target.value)}
              />
              <input className='RulePoint'
                type="text"
                value={text08}
                onChange={(e) => setText08(e.target.value)}
              />
            </div>
            <div className='PointsContainer'>
              <input className='RuleName'
                type="text"
                value={text05}
                onChange={(e) => setText05(e.target.value)}
              />
              <input className='RulePoint'
                type="text"
                value={text09}
                onChange={(e) => setText09(e.target.value)}
              />
            </div>

            {additionalInputs.map((input, index) => (
              <div className='PointsContainer' key={index} >
                <input className='RuleName'
                  type="text"
                  value={input.text01}
                  onChange={(e) => {
                    const updatedInputs = [...additionalInputs];
                    updatedInputs[index].text01 = e.target.value;
                    setAdditionalInputs(updatedInputs);
                  }}
                />
                <input className='RulePoint'
                  type="text"
                  value={input.text}
                  onChange={(e) => {
                    const updatedInputs = [...additionalInputs];
                    updatedInputs[index].text = e.target.value;
                    setAdditionalInputs(updatedInputs);
                  }}
                />
              </div>
            ))}
            <button className='ButtonAddInputs' onClick={addAdditionalInputs}>ADICIONAR NOVA REGRA</button>
          </div>
          <div className="containerRules">
            <div style={{ display: "flex", alignItems: "center" }} >
              {editingObservationTitle ? (
                <>
                  <input className='EditedInput'
                    type="text"
                    value={editedObservationTitle}
                    onChange={(e) => setEditedObservationTitle(e.target.value)}
                  />

                  <button className='editButton' onClick={saveEditedObservationTitle}><FontAwesomeIcon icon={faFloppyDisk} /></button>
                </>
              ) : (
                <>
                  <h1>{editedObservationTitle}</h1>
                  <button className='editButton' onClick={startEditingObservationTitle}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </>
              )}</div>
            <textarea className='largerInput'
              type="text"
              value={text10}
              onChange={(e) => setText10(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="previewContainer">
          <button className='PreviewDownload' onClick={handleDownloadClick}>BAIXAR REGRA</button>
          <div className="previews" style={{ backgroundColor, }}>

            <div className="image-container" style={{ display: "flex", justifyContent: "center" }}>
              <img src={file} className="preview-image01" />
            </div>
            <div >
              {editingTitle ? (
                <h2 style={{ color: secundaryTextColor }}>{editedTitle}</h2>
              ) : (
                <h2 style={{ color: secundaryTextColor }}>{text11}</h2>
              )}
              <h4 style={{ color: textColor }}>{text01}</h4>
            </div>
            <div className='pontuacao' style={{ color: textColor }} >
              {editedScoreTitle ? (
                <h2 style={{ color: secundaryTextColor }}>{editedScoreTitle}</h2>
              ) : (
                <h2 style={{ color: secundaryTextColor }}>{text00}</h2>
              )}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ color: textColor }}>{text02}</h4>
                <span>&nbsp;</span>
                <h4 style={{ color: secundaryTextColor }}>{text06}</h4>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ color: textColor }}>{text03}</h4>
                <span>&nbsp;</span>
                <h4 style={{ color: secundaryTextColor }}>{text07}</h4>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ color: textColor }}>{text04}</h4>
                <span>&nbsp;</span>
                <h4 style={{ color: secundaryTextColor }}>{text08}</h4>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ color: textColor }}>{text05}</h4>
                <span>&nbsp;</span>
                <h4 style={{ color: secundaryTextColor }}>{text09}</h4>
              </div>
              {additionalInputs.map((input, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ color: textColor }}>{input.text01}</h4>
                  <span>&nbsp;</span>
                  <h4 style={{ color: secundaryTextColor }}>{input.text}</h4>
                </div>
              ))}
            </div>

            <div>
              {editedObservationTitle ? (
                <h2 style={{ color: secundaryTextColor }}>{editedObservationTitle}</h2>
              ) : (
                <h2 style={{ color: secundaryTextColor }}>{text12}</h2>
              )}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ color: textColor }}>{text10}</h4>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={poweredby} style={{ width: "30%", height: "auto", }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Gamification;
