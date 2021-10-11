import React from "react";
import { useHistory } from "react-router-dom";
import { deletarPlatacao } from "../../../services/deletarPlantacoes";
import { StyleCardPlantacao } from "./style";

const CardPlantacao = ({ i, infos, id, deleteCardsListCB }) => {
  const history = useHistory();
  
  let responsiveInfos;
  if(window.innerWidth < 800) {
    responsiveInfos = infos.join(' - ')
  } else {
    responsiveInfos = infos.join(' ')
  }
  
  let responsiveTitle = () => {
    if(window.innerWidth > 800) {
      return 'Plant.'
    } 
    
    return 'Plantação'
  } 

  return (
    <StyleCardPlantacao className="card-plantacao">
      <button className="plantacao" onClick={() => history.push(`/ferramenta/${id}`)}>
        <span className="material-icons iconeFolha">spa</span>

        <div className="infos">
          <h3>{responsiveTitle()} {i}</h3>
          <p>{responsiveInfos}</p>
        </div>
      </button>

      <button className="btnRemove" onClick={() => {
        deletarPlatacao(id).then(() => {
          deleteCardsListCB();
        })
      }}>
        <span className="material-icons">delete</span>
      </button>
    </StyleCardPlantacao>
  )
};

export default CardPlantacao;
