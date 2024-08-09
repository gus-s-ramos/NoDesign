import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import './gamification.css';
import html2canvas from 'html2canvas';
import poweredby from "../assets/poweredby.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faPenToSquare, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import ColorPicker from '../components/colorpicker';




function Gamification() {
  const [file, setFile] = useState('https://www.yazo.com.br/wp-content/uploads/2021/04/cropped-lett_color.png');
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


  

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  }

  const [additionalInputs, setAdditionalInputs] = useState([
    { text01: 'NOME DA REGRA', text: 'QNT PTS' },
    { text01: 'NOME DA REGRA', text: 'QNT PTS' },
    { text01: 'NOME DA REGRA', text: 'QNT PTS' },
  ]);
  

  const addAdditionalInputs = () => {
    setAdditionalInputs([...additionalInputs, { text01: 'NOME DA REGRA', text: 'QNT PTS' }]);
  };

  const deleteInput = (index) => {
    const updatedInputs = additionalInputs.filter((_, i) => i !== index);
    setAdditionalInputs(updatedInputs);
  };


  const handleDownloadClick = () => {
    const previewContainer = document.querySelector('.previews');
    const scale = 4;

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
    setText12(editedObservationTitle);
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
                <div>
                  <div className="colorSection">
                    <div className='previewImage'>
                      <img src={file} className="preview-image" style={{ width: '50px', alignContent: 'center' }} />
                    </div>
                    <div className="logoTitleContainer">
                      <h3>LOGO (300x128):</h3>
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
            </div>

            <div>
              <ColorPicker
                label="COR PRIMÁRIA"
                color={textColor}
                setColor={setPrimaryColor}
              />
            </div>


            <div>
              <ColorPicker
                label="COR PRIMÁRIA"
                color={secundaryTextColor}
                setColor={setSecundaryColor}
              />
            </div>
            <div>
              <ColorPicker
                label="COR PRIMÁRIA"
                color={backgroundColor}
                setColor={setBackgroundColor}
              />
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
                  <button className='editButton' onClick={saveEditedTitle}  ><FontAwesomeIcon icon={faFloppyDisk} color='white' /></button>
                </>
              ) : (
                <>
                  <h1>{text11}</h1>
                  <button className='editButton' onClick={startEditingTitle}><FontAwesomeIcon icon={faPenToSquare} color='white' /></button>
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
                  <button className='editButton' onClick={saveEditedScoreTitle}><FontAwesomeIcon icon={faFloppyDisk} color='white' /></button>
                </>
              ) : (
                <>
                  <h1>{editedScoreTitle} </h1>
                  <button className='editButton' onClick={startEditingScoreTitle}><FontAwesomeIcon icon={faPenToSquare} color='white' /></button>
                </>
              )}
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
                <button className='deleteButton' onClick={() => deleteInput(index)}>
                  <FontAwesomeIcon icon={faTrashCan} color='red' />
                </button>
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

                  <button className='editButton' onClick={saveEditedObservationTitle}><FontAwesomeIcon icon={faFloppyDisk} color='white' /></button>
                </>
              ) : (
                <>
                  <h1>{editedObservationTitle}</h1>
                  <button className='editButton' onClick={startEditingObservationTitle}><FontAwesomeIcon icon={faPenToSquare} color='white' /></button>
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
            <div>
              <div>
                {editingTitle ? (
                  <h2 style={{ color: secundaryTextColor }}>{editedTitle}</h2>
                ) : (
                  <h2 style={{ color: secundaryTextColor }}>{text11}</h2>
                )}
              </div>
              <h4 style={{ color: textColor }}>{text01}</h4>
            </div>
            <div className='pontuacao' style={{ color: textColor }} >
              {editedScoreTitle ? (
                <h2 style={{ color: secundaryTextColor }}>{editedScoreTitle}</h2>
              ) : (
                <h2 style={{ color: secundaryTextColor }}>{text00}</h2>
              )}
              
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
