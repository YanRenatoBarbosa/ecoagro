import React from "react";
import { StyleCardPlantacao } from "./style";

const CardPlantacao = ({ i, infos, id }) => (
  <StyleCardPlantacao>
    <button className="plantacao" onClick={() => window.location.pathname = `/ferramenta/${id}`}>
      <span className="material-icons">spa</span>

      <div className="infos">
        <h3>Plantação {i}</h3>
        <p>{infos}</p>
      </div>
    </button>

    <button className="btnRemove">
      <span className="material-icons">delete</span>
    </button>
  </StyleCardPlantacao>
);

export default CardPlantacao;
