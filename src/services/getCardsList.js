import CardPlantacao from "../pages/HomePage/CardPlantacao";
import { ConnectionFactory } from "./connectionFactory";

export function getCardsList(cardsList, setCardsList) {
  return new Promise((resolve, reject) => {
    ConnectionFactory.getConnection().then((connection) => {
      let plantacoes = [];

      let objectStore = connection
        .transaction(["plantacoes"], "readwrite")
        .objectStore("plantacoes");

      objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;

        if (cursor) {
          plantacoes.push({plantacaoInfo: cursor.value, id: cursor.key});
          cursor.continue();
        } else {
          if(plantacoes.length > 0) {
            let cards = plantacoes.map(({ plantacaoInfo, id }, i) =>
              <CardPlantacao 
                key={`CardPlantacao-${i + 1}`} 
                i={i + 1} 
                infos={[`${plantacaoInfo.cultura}`,`${plantacaoInfo.tipoIrrigacao}`]}
                id={id}
                deleteCardsListCB={() => setCardsList(cardsList)}
              />
            );
            resolve(cards)
          }
        }
      };
    });
  });
}
