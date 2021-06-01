import React, { useState } from 'react';

import HeaderSessao from '../../components/HeaderSessao';
import { etapaEspecificacoes, etapaQuantidade } from './conteudoFormulario';
import { validarInputsQntd, validarSelectsEspecificacoes } from '../../services/validacoes_ConfigLocais';
import { StyledConfiguracoesLocais } from './style';

const ConfiguracoesLocais = () => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  const [qtdTensiosRasos, setQtdTensiosRasos] = useState('');
  const [statusInputRasos, setStatusInputRasos] = useState('noProblems'); //Emite a estilização de erro
  const [qtdTensiosProf, setQtdTensiosProf] = useState('');
  const [statusInputProfs, setStatusInputProfs] = useState('noProblems'); //Emite a estilização de erro
  
  const listaDeEtapas = [
    etapaQuantidade(qtdTensiosRasos, setQtdTensiosRasos, statusInputRasos , qtdTensiosProf, setQtdTensiosProf, statusInputProfs),
    etapaEspecificacoes(),
  ];

  function handlerSubmit(event){
    event.preventDefault();

    let inputs = [...(event.target).querySelectorAll('input')];
    let inputsValidos = validarInputsQntd(inputs, setStatusInputRasos, setStatusInputProfs);
    let selects = [...(event.target).querySelectorAll('select')];
    let selectsValidos = validarSelectsEspecificacoes(selects);

    if(inputsValidos){

      const valores = inputs.map(element => element.value);

      setDadosColetados({ qtdTensiosRasos: valores[0], qtdTensiosProfundos: valores[1] });
      setEtapaAtual(etapaAtual + 1);
      console.log(dadosColetados);
    }
    
    if(selectsValidos){
      
      console.log('ackda vakg[v');
    }

  }

  return (
    <>
      <HeaderSessao titulo="Configurações Locais" helperLink="/help/1"/>
      
      <StyledConfiguracoesLocais>
        <p>stepper</p>

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
