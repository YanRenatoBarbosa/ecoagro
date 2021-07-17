import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ConnectionContext } from "../../context/Connection";
import { AnalisesDao } from "../../dao/AnalisesDao";
import { Header } from "../../components/Header";
import { ResultadosMain } from "./style";
import { getData } from "../../services/getData";
import { getAnalise } from "./getAnalise";

export function Resultados(){
  const { idResultado } =  useParams();
  const [resultado, setResultado] = useState({});
  const [data, setData] = useState({});
  const [ analise, setAnalise ] = useState({})
  const [headerVisiblity, setHeaderVisiblity] = useState('invisible');

  const connection = useContext(ConnectionContext)

  useEffect(() => {
    const dao = new AnalisesDao(connection);
    
    if(connection) {
      dao.getAnalise(idResultado).then(resp => {
        let newDataTest = (JSON.stringify(resp) !== JSON.stringify(resultado));
        if(newDataTest) setResultado(resp);
      });
    }

    getData().then(resp => {
      let newDataTest = (JSON.stringify(resp) !== JSON.stringify(data));
      if(newDataTest) setData(resp);
    })
  }, [ connection, idResultado, resultado, data ]);

  if(resultado && data) {
    getAnalise(resultado, data, setAnalise, analise)
  }

  return (
    <>
      <Header visiblity={headerVisiblity} setVisiblity={setHeaderVisiblity} />

      <ResultadosMain>

        { JSON.stringify(analise) === '{}' ? <div> <br/><br/> Carregando..</div> 
        : (
            <div>
              <h2>Resultado Geral</h2>
              <section className="CardResults">
                <div>
                  <p>{(resultado.mediaGeral).toFixed(2)} Cbar</p>
                  <p>Potêncial Mátrico Médio</p>
                </div>

                <div> {analise.card.text} </div>
              </section>
            </div>
          )
        }

        {
          JSON.stringify(analise) !== '{}' && (
            <div>
              <h2>Recomendação de irrigação</h2>
              <p className="recomendationText">{analise.text}</p>
            </div>
          )
        }

      </ResultadosMain>
    </>
  );
}
