const dbName = "ecoagro";
const stores = ["analises", "plantacoes"];
const version = 1;

export class ConnectionFactory {
  constructor() {
    throw new Error("Não é possível criar instâncias de ConnectionFactory");
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      let request = window.indexedDB.open(dbName, version);
      let connection;

      request.onupgradeneeded = (e) => {
        let conectionDB = e.target.result;

        stores.forEach((store) => {
          if (!conectionDB.objectStoreNames.contains(store)) { 
            conectionDB.createObjectStore(store, { autoIncrement: true })
          }
        });

      };

      request.onsuccess = (e) => {
        if (!connection) {
          connection = e.target.result;
        }
        resolve(connection);
      };

      request.onerror = (e) => {
        console.log(e.target.error);

        reject(e.target.error.name);
      };
    });
  }
}
