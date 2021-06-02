import React from 'react';

import edit from "../../../assets/edit.svg";
import { StyledConfirmacaoDados } from './style';

export const ConfirmacaoDados = ({ dados, setEtapaAtual }) => {

  return (
    <StyledConfirmacaoDados>

      <h3>Quantidado de tensiômetros</h3>

      <div className='container-infos'>
        <div>
          <p>Tensiômetros razos: {dados.qtdTensiosRasos}</p>
          <p>Tensiômetros Profundos: {dados.qtdTensiosProfundos}</p>
        </div>

        <button 
          type='button'
          className='btn-editarDados'
          onClick={() => setEtapaAtual(0)}
        >
          <img src={edit} alt="editar dados" />
        </button>
      </div>

      <h3>Especificações do solo</h3>

      <div className='container-infos'>
        <div>
          <p>Cultura escolhida: {dados.cultura}</p>
          <p>Tipo de solo: {dados.tipoSolo}</p>
          <p>Tipo de irrigação: {dados.tipoIrrigacao}</p>
        </div>

        <button 
          type='button' 
          className='btn-editarDados'
          onClick={() => setEtapaAtual(1)}  
        >
          <img src={edit} alt="editar dados" />
        </button>
      </div>
    </StyledConfirmacaoDados>
  );
}
