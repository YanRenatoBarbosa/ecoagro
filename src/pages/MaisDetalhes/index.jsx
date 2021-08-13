import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ConnectionContext } from '../../context/Connection';
import { AnalisesDao } from '../../dao/AnalisesDao';
import Grafico from './Grafico';

import { MaisDetalhesMain } from './styles';

function MaisDetalhes() {
  const { idResultado } =  useParams();
  const connection = useContext(ConnectionContext);
  const [ data, setData ] = useState({});
  
  useEffect(() => {
    const dao = new AnalisesDao(connection);

    if(connection) {
      dao.getAnalise(idResultado).then(resp => {
        let isNewInfo = JSON.stringify(resp) !== JSON.stringify(data);

        if(isNewInfo) {
          setData(resp);
        }
      });
    }
  }, [idResultado, connection, data])

  return (
    <>
      
      <MaisDetalhesMain>
        <Grafico data={data} />

      </MaisDetalhesMain>
    </>
  );
}

export default MaisDetalhes;
