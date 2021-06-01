import React, { useState } from 'react';
import { ContainerInputs } from './style';

export const Input = ({ value, setValue, typeInput='text', placeholder, helperText, status='noProblems' }) => {
  const [detalhesLabel, setDetalhesLabel] = useState('tamanhoNormal corNormal')

  return (
    <ContainerInputs>
      <label className={`${detalhesLabel} ${status}`}>
        {placeholder}
      </label>

      <input 
        type={typeInput}
        className={`${status}`}
        value={value} 
        onChange={(event) => setValue(event.target.value)}
        onFocus={(event) => setDetalhesLabel('small colorido')}
        onBlur={(event) => {
          event.target.value !== '' ?
            setDetalhesLabel('small corNormal')
          : setDetalhesLabel('tamanhoNormal corNormal')
        }}
        required
      />

      <span className={`${status}`}>
        {helperText}
      </span>
    </ContainerInputs>
  );
}