import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { Header } from '../../components/Header';
import { ControllerFerramenta } from '../../controllers/ControllerFerramenta';
import { StyledFerramenta } from './style';

const Controller = new ControllerFerramenta();

const Ferramenta = () => {
  const [dados, setDados] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [btnStyle, setBtnStyle] = useState('invisible');

  useEffect(() => {
    let novosDados = window.localStorage.getItem('dados');
    let dadosAtuais = JSON.stringify(dados);

    let dadosNaoSaoNulos = novosDados !== null;
    let dadosNovosSaoDiferentes = novosDados !== dadosAtuais;

    if ( dadosNaoSaoNulos && dadosNovosSaoDiferentes ) {
      setDados(JSON.parse(novosDados));
      setBtnStyle('visible');

    } else {
      if(JSON.stringify(dados) === '{}'){
        setRedirect(true);
      }
    }
  }, [dados]);
   
  if(redirect){
    return <Redirect to="/configuracoes-locais" />
  } 
  
  return (
    <>
      <Header type="session" title='Ferramenta' helperLink='/help/1' />
      
      <StyledFerramenta>
        <h2> Insira os valores medidos pelos tensiômetros </h2>

        <form onSubmit={event => Controller.calcularMedia(event, dados)}>
          {Controller.createInputs(dados)}

          <button type="submit" className={btnStyle}>
            Calcular
          </button>
        </form>
      </StyledFerramenta>
    </>
  );
}

export default Ferramenta;
