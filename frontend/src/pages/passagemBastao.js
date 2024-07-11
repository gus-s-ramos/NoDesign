import React, { useState } from 'react';
import "./passagemBastao.css";

function PassagemBastao() {
  const [integracao, setIntegracao] = useState(false);
  const [desenvolvimentoExtra, setDesenvolvimentoExtra] = useState(false);
  const [observacaoUm, setObservacaoUm] = useState('Obs: quantidade de acessos, para quais categorias etc');
  const [pontoFocal, setPontoFocal] = useState('Ponto Focal');
  const [telefone, setTelefone] = useState('Telefone');
  const [email, setEmail] = useState('Email');
  const [observacaoGeral, setObservacaoGeral] = useState('Observação Geral:');
  const [clientes, setClientes] = useState('Cliente');
  const [vendedor, setVendedor] = useState('Vendedor');
  const [agencia, setAgencia] = useState('Agência');
  const [evento, setEvento] = useState('Evento');
  const [expectativaUsuarios, setExpectativaUsuarios] = useState('Expectativa de Usuários');
  const [dataEvento, setDataEvento] = useState('Data do evento');
  const [localEvento, setLocalEvento] = useState('Local Evento');
  const [patrocinio, setPatrocinio] = useState(false);
  const [estande1, setEstande1] = useState(false);
  const [estande2, setEstande2] = useState(false);
  const [yazoCheck, setYazoCheck] = useState(false);
  const [clienteCheck, setClienteCheck] = useState(false);
  const [publicacaoProduto, setPublicacaoProduto] = useState('Publicação do Produto');
  const [lancamentoProduto, setLancamentoProduto] = useState('Lançamento do Produto');
  const [finalContrato, setFinalContrato] = useState('Final do Contrato');
  const [observacaoDois, setObservacaoDois] = useState('Observação:');
  const [yazoApp, setYazoApp] = useState(false);
  const [opcoesAppProduto1, setOpcoesAppProduto1] = useState(false);
  const [opcoesAppProduto2, setOpcoesAppProduto2] = useState(false);
  const [opcoesAppProduto3, setOpcoesAppProduto3] = useState(false);
  const [yazoOnline, setYazoOnline] = useState(false);
  const [yazoLeads, setYazoLeads] = useState(false);
  const [opcoesProduto2, setOpcoesProduto2] = useState(false);
  const [patrocinio1, setPatrocinio1] = useState(true);
  const [patrocinio2, setPatrocinio2] = useState(false);

  const handlePatrocinio1Change = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setPatrocinio1(true);
      setPatrocinio2(false); // Desmarca o segundo checkbox
    } else {
      setPatrocinio1(false);
    }
  };

  const handlePatrocinio2Change = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setPatrocinio2(true);
      setPatrocinio1(false); // Desmarca o primeiro checkbox
    } else {
      setPatrocinio2(false);
    }
  };

  const handleEstandeChange = () => {
    if (estande1) {
      setEstande1(false); // Se já estiver marcado, desmarca
    } else {
      setEstande1(true);
      setEstande2(false); // Desmarca a outra opção se estiver marcada
    }
  };

  const handleEstande2Change = () => {
    if (estande2) {
      setEstande2(false); // Se já estiver marcado, desmarca
    } else {
      setEstande2(true);
      setEstande1(false); // Desmarca a outra opção se estiver marcada
    }
  };

  const handleOpcoesAppProduto1Change = () => {
    setOpcoesAppProduto1(!opcoesAppProduto1); // Inverte o estado atual
  };

  return (
    <div className="profile-container">
      <div className="left-side" style={{ width: '50%', height: '100vh', float: 'left' }}>
        <h1>Passagem de Pastao</h1>
        <div>
          <div className='yazo-product'>
            <h1>Produtos</h1>
            <div>
              <input type="radio" checked={yazoApp} onChange={(e) => setYazoApp(e.target.checked)} />
              Yazo.app:
            </div>
            <div>
              <input
                type="radio"
                checked={opcoesAppProduto1}
                onClick={handleOpcoesAppProduto1Change}
                readOnly
              />
              Single Event
              <input type="radio" checked={opcoesAppProduto2} onChange={(e) => setOpcoesAppProduto2(e.target.checked)} />
              Multi Eventos
              <input type="radio" checked={opcoesAppProduto3} onChange={(e) => setOpcoesAppProduto3(e.target.checked)} />
              Yazo Comunidade
            </div>
            <div>
              <input type="radio" checked={yazoOnline} onChange={(e) => setYazoOnline(e.target.checked)} />
              Yazo.online
            </div>
            <div>
              <input type="radio" checked={yazoLeads} onChange={(e) => setYazoLeads(e.target.checked)} />
              Yazo.leads
            </div>
            <div>
              <input type="radio" checked={opcoesProduto2} onChange={(e) => setOpcoesProduto2(e.target.checked)} />
              COLETOR MANUAL
              <input type="radio" checked={opcoesProduto2} onChange={(e) => setOpcoesProduto2(e.target.checked)} />
              PAINEL
            </div>
          </div>
          <div>
            <h1>Dados Principais</h1>
            <div className='principal-data'>
              <input className="custom-input" type="text" value={clientes} onChange={(e) => setClientes(e.target.value)} />
              <input className="custom-input" type="text" value={agencia} onChange={(e) => setAgencia(e.target.value)} />
              <input className="custom-input" type="text" value={evento} onChange={(e) => setEvento(e.target.value)} />
              <input className="custom-input" type="text" value={vendedor} onChange={(e) => setVendedor(e.target.value)} />
            </div>
          </div>
          <div>
            <h1>Sobre o Evento</h1>
            <div className='about-event'>
              <input className="custom-input2" type="text" value={expectativaUsuarios} onChange={(e) => setExpectativaUsuarios(e.target.value)} />
              <input className="custom-input2" type="text" value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} />
              <input className="custom-input2" type="text" value={localEvento} onChange={(e) => setLocalEvento(e.target.value)} />
            </div>
            <div>
              Patrocínio Yazo:
              <input type="radio" checked={patrocinio1} onChange={handlePatrocinio1Change} />
              SIM
              <input type="radio" checked={patrocinio2} onChange={handlePatrocinio2Change} />
              NÃO
            </div>
            Estande Yazo:
            <input type="radio" checked={estande1} onChange={handleEstandeChange} />
            SIM
            <input type="radio" checked={estande2} onChange={handleEstande2Change} />
            NÃO
          </div>
          <div>
            <h1>Datas</h1>
            <div className='about-event'>
              <input className="custom-input" type="text" value={publicacaoProduto} onChange={(e) => setPublicacaoProduto(e.target.value)} />
              <input className="custom-input" type="text" value={lancamentoProduto} onChange={(e) => setLancamentoProduto(e.target.value)} />
              <input className="custom-input2" type="text" value={finalContrato} onChange={(e) => setFinalContrato(e.target.value)} />
            </div>
          </div>

          <div>
            <h1>Observação</h1>
            <input className="custom-input-observation" type="text" value={observacaoUm} onChange={(e) => setObservacaoUm(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="right-side" style={{ width: '50%', height: '100vh', float: 'left' }}>
        <div>
          <h1>Extras</h1>
          <div>
            <input type="radio" checked={integracao} onChange={(e) => setIntegracao(e.target.checked)} />
            Integração
            <input type="radio" checked={desenvolvimentoExtra} onChange={(e) => setDesenvolvimentoExtra(e.target.checked)} />
            Desenvolvimento Extra:
          </div>
          <div>
            <input className="custom-input-observation" type="text" value={observacaoDois} onChange={(e) => setObservacaoDois(e.target.value)} />
          </div>
        </div>
        <div>
          <h1>Alimentação de Dados</h1>
          <input type="radio" checked={yazoCheck} onChange={(e) => setYazoCheck(e.target.checked)} />
          Yazo
          <input type="radio" checked={clienteCheck} onChange={(e) => setClienteCheck(e.target.checked)} />
          Cliente/Agência
        </div>
        <div>
          <h1>Contato</h1>
          <div className='about-event'>
            <input className="custom-input" type="text" value={pontoFocal} onChange={(e) => setPontoFocal(e.target.value)} />
            <input className="custom-input" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <input className="custom-input2" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <h1>Suporte</h1>
          <button>Normal (Seg-Sex 8h-18h)</button>
          <button>Remoto (Dedicado durante evento)</button>
          <button>Presencial (Dias do evento)</button>
        </div>
        <div>
          <h1>Observações Gerais</h1>
          <input className="custom-input-observation" type="text" value={observacaoGeral} onChange={(e) => setObservacaoGeral(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default PassagemBastao;
