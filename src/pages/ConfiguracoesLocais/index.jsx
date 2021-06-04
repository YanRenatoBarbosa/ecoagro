import React, { useState } from 'react';

import HeaderSessao from '../../components/HeaderSessao';
import { Stepper } from './Stepper';
import { etapaConfirmacao, etapaEspecificacoes, etapaQuantidade } from './conteudoFormulario';
import { validarInputsQntd, validarSelectsEspecificacoes } from '../../services/validacoes_ConfigLocais';
import { StyledConfiguracoesLocais } from './style';
import { Redirect } from 'react-router';

const ConfiguracoesLocais = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  const [redirect, setRedirect] = useState(false);

  const [qtdTensiosRasos, setQtdTensiosRasos] = useState('');
  const [statusInputRasos, setStatusInputRasos] = useState('noProblems'); //Emite a estilização de erro
  const [qtdTensiosProf, setQtdTensiosProf] = useState('');
  const [statusInputProfs, setStatusInputProfs] = useState('noProblems'); //Emite a estilização de erro
  
  const listaDeEtapas = [
    etapaQuantidade(qtdTensiosRasos, setQtdTensiosRasos, statusInputRasos , qtdTensiosProf, setQtdTensiosProf, statusInputProfs),
    etapaEspecificacoes(),
    etapaConfirmacao(dadosColetados, setEtapaAtual),
  ];

  function handlerSubmit(event){
    event.preventDefault();

    let inputs = [...(event.target).querySelectorAll('input')];
    let inputsValidos = validarInputsQntd(inputs, setStatusInputRasos, setStatusInputProfs);
    let selects = [...(event.target).querySelectorAll('select')];
    let selectsValidos = validarSelectsEspecificacoes(selects);

    if(inputsValidos){
      let valores = inputs.map(element => element.value);

      setDadosColetados({ qtdTensiosRasos: valores[0], qtdTensiosProfundos: valores[1] });
      setEtapaAtual(etapaAtual +1);
    }
    
    if(selectsValidos){
      let valores = selects.map(element => element.value);

      setDadosColetados({...dadosColetados, cultura: valores[0], tipoSolo: valores[1], tipoIrrigacao: valores[2]});
      setEtapaAtual(etapaAtual +1);
    };

    if (etapaAtual === 2) {
      localStorage.setItem('dados', JSON.stringify(dadosColetados));
      setRedirect(true);
    }
  }

  if(redirect){
    return <Redirect to="/ferramenta" />
  } 

  return (
    <>
      <HeaderSessao titulo="Configurações Locais" helperLink="/help/2"/>
      
      <StyledConfiguracoesLocais>
        <Stepper etapa={etapaAtual} />

        <h2> {listaDeEtapas[etapaAtual].textoh2} </h2>
        
        <form onSubmit={event => handlerSubmit(event)}>

          {listaDeEtapas[etapaAtual].campos}

          <button type="submit">
            {listaDeEtapas[etapaAtual].textoBtn}
          </button>

        </form>
        
      </StyledConfiguracoesLocais>
    </>
  );
}

export default ConfiguracoesLocais;
