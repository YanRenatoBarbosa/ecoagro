import React from 'react';

import { StyledSelect } from './style';

export const Select = ({ opcoes=[], opcaoPadrao='Selecione', helperText='' }) => {

  return (
    <StyledSelect>
      
      <select defaultValue='opcaoPadrao'>
        <option disabled value='opcaoPadrao'> {opcaoPadrao} </option>

        {opcoes.map(opcao => (
          <option key={opcao} value={opcao} > {opcao} </option>
        ))}
      
      </select> 

      <span>{helperText}</span>
    </StyledSelect>
  );
}