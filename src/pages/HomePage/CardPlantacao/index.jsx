import React from "react";
import { useHistory } from "react-router-dom";
import { deletarPlatacao } from "../../../services/deletarPlantacoes";
import { StyleCardPlantacao } from "./style";

const CardPlantacao = ({ i, infos, id, deleteCardsListCB }) => {
  const history = useHistory();

  return (
    <StyleCardPlantacao>
      <button className="plantacao" onClick={() => history.push(`/ferramenta/${id}`)}>
        <span className="material-icons">spa</span>

        <div className="infos">
          <h3>Plantação {i}</h3>
          <p>{infos}</p>
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
