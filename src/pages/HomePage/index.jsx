import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { getCardsList } from '../../services/getCardsList';
import CardPlantacao from './CardPlantacao';
import { LinkInfo } from './LinkInfo';
import { StyleHomePage } from './style';

function Home() {
  const [hiddenMenu, setHiddenMenu] = useState('invisible');
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    getCardsList(cardsList, setCardsList);
  }, [cardsList]);

  return (
    <>
      <Header visiblity={hiddenMenu} setVisiblity={setHiddenMenu} />

      <StyleHomePage>
        <h2>Escolha uma plantação</h2>

        <section className="container-plantacoes">
          <CardPlantacao i="1" infos="Alface - Gotejamento" />
          <CardPlantacao i="2" infos="Batata - Sulco" />

            <Link to="/configuracoes-locais">
              <div className="btnAddPlantacoes">
                Adicionar Plantações
              </div>
            </Link>
        </section>

        <h2 className="tituloInfos">Informações</h2>

        <section className="container-links">
          <LinkInfo iconName="book" link="https://drive.google.com/drive/folders/1oK5jrqmOL26fgrMKSvIH_SjeiJs6-pbc" title="Literatura" />
          <LinkInfo iconName="info" link="https://google.com" title="Sobre" />
          <LinkInfo iconType="GitHub" link="https://github.com/YanRenatoBarbosa/ecoagro" title="Github" />
        </section>

      </StyleHomePage>
    </>
  );
}

export default Home;
