import { ConnectionFactory } from "./connectionFactory";

export function deletarPlatacao(id) {
  return ConnectionFactory.getConnection().then((connection) => {
    let request = connection
      .transaction(["plantacoes"], "readwrite")
      .objectStore("plantacoes")
      .delete(id);

    request.onerror = (event) => {
      alert('Algo deu errado!')
      console.log("evento de erro:", event);
    };
  });
}
