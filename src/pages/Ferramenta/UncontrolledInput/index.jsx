import React, { useState } from 'react';

import { StyledContainerInput } from './style';

export const UncontrolledInput = ({ id, prof }) => {
  const [labelStyle, setLabelStyle] = useState('tamanhoNormal corNormal');
  const [displayButtons, setDisplayButtons] = useState('invisible');

  const [selectButton, setSelectButton] = useState(['unselected', 'selected', 'unselected']);

  return (

    <StyledContainerInput>
      <p>{`Tensiômetro ${id + 1}`}</p>

      <div className="wrapper">
        <label className={`${labelStyle}`}>{`Tensiô. ${prof}`}</label>

        <input 
          type="text" 
          className={`InputLeitura${prof}`} 
          onClick={() => {
            setDisplayButtons('visible');
            setLabelStyle('small colorido');
          }}
          onBlur={(event) => {
            setTimeout(() => setDisplayButtons('invisible'), 250);
            event.target.value ?
              setLabelStyle('small corNormal') 
              : setLabelStyle('tamanhoNormal corNormal');
          }}
          required
        />
      </div>

      <div className={`btns-container ${displayButtons}`}>
        <button 
          type="button" 
          className={`${selectButton[0]} atm`} 
          onClick={() => setSelectButton(['selected', 'unselected', 'unselected'])}
          >
          Atm
        </button>

        <button 
          type="button" 
          className={`${selectButton[1]} cbar`}
          onClick={() => setSelectButton(['unselected', 'selected', 'unselected'])}
        >
          Cbar
        </button>

        <button 
          type="button" 
          className={`${selectButton[2]} bar`}
          onClick={() => setSelectButton(['unselected', 'unselected', 'selected'])}
        >
          Bar
        </button>
      </div>
    </StyledContainerInput>
  );
}