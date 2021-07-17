import React, { createContext, useEffect, useState } from "react";
import { ConnectionFactory } from "../services/connectionFactory";

export const ConnectionContext = createContext(null);

export default function ConnectionProvider({ children }) {
  const [connection, setConnection] = useState(null);

  useEffect(() => {

    if(connection === null) {
      ConnectionFactory.getConnection()
        .then(resp => setConnection(resp))
    }
  }, [connection, setConnection]);


  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
}
