import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

const Ferramenta = () => {
  const [dados, setDados] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let novosDados = window.localStorage.getItem('dados');
    let dadosAtuais = JSON.stringify(dados);

    if(novosDados !== null){
       dadosAtuais !== novosDados ?
        setDados(JSON.parse(novosDados))
      : console.log('Os dados estão atualizados!');

    } else {
      if(JSON.stringify(dados) === '{}'){
        setRedirect(true);
      }
    }
  }, [dados])
   
  if(redirect){
    return <Redirect to="/configuracoes-locais" />
  } 
  
  return (
    <p>this is the page Ferramenta</p>
  );
}

export default Ferramenta;