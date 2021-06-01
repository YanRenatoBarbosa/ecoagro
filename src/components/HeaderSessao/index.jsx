import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import arrowBack from "../../assets/arrow_back.svg";
import help from "../../assets/help.svg";
import { HeaderMain } from '../HeaderMain';
import { StyledHeader } from './style';

const HeaderSessao = ({titulo, helperLink}) => {
  const history = useHistory();

  if(window.innerWidth > 768){
    return <HeaderMain />
  }  

  return (
    <StyledHeader>
      <div>
        <button onClick={() => history.goBack()} className="btnRetornar">
          <img src={arrowBack} alt="Voltar"/>
        </button>

        <h1>{titulo}</h1>
      </div>

      <Link to={helperLink}> <img src={help} alt="Botão de ajuda"/> </Link>
    </StyledHeader>
  );
};

export default HeaderSessao;
