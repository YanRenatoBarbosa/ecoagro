export class AnalisesDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "analises";
  }

  getAnalise(idAnalise) {

    return new Promise((resolve, reject) => {
      let objectStore = this._connection
        .transaction([this._store], "readwrite")
        .objectStore(this._store);

      var request = objectStore.get(parseInt(idAnalise));

      request.onerror = function (event) {
        console.log(event);
      };

      request.onsuccess = function (event) {
        const results = request.result;

        resolve(results);
      };
    });
  }
}
