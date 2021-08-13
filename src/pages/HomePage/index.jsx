import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { getCardsList } from '../../services/getCardsList';
import { LinkInfo } from './LinkInfo';
import { StyleHomePage } from './style';

function Home() {
  const [hiddenMenu, setHiddenMenu] = useState('invisible');
  const [cardsList, setCardsList] = useState([]);
  const [cardsAmount, setCardsAmount] = useState('none');

  useEffect(() => {
    getCardsList(cardsList, setCardsList).then(newCards => {
      let cardsAtualizados = JSON.stringify(cardsList) === JSON.stringify(newCards);

      if(!cardsAtualizados){
        setCardsList(newCards);

        if(newCards.length === 1){
          setCardsAmount('oneChild')
        } else if(newCards.length === 2){
          setCardsAmount('dobleChild')
        } else if(newCards.length >= 3){
          setCardsAmount('manyChilds')
        }
      }
    });
  }, [cardsList]);

  return (
    <>
      <Header visiblity={hiddenMenu} setVisiblity={setHiddenMenu} />

      <StyleHomePage>
        <h2>Escolha uma plantação</h2>

        <section className="container-plantacoes">
            <div className={`cards-list ${cardsAmount}`}>
              {cardsList}
            </div>

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
