import React, { useState } from 'react';

import { Header } from "../../components/Header/index";
import { MainListaAnalises } from './style';

function ListaAnalises() {
  const [hiddenMenu, setHiddenMenu] = useState('invisible');

  return (
    <>
      <Header visiblity={hiddenMenu} setVisiblity={setHiddenMenu} />

      <MainListaAnalises>
        list here
      </MainListaAnalises>
    </>
  );
}

export default ListaAnalises;