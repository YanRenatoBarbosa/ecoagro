import React from "react";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";

export default function Grafico({ data }) {
  if (JSON.stringify(data) === "{}") {
    return <p>carregando..</p>;
  }

  let formatedData = [];

  ["rasos", "profundos"].forEach((element) => {
    data.leituras[element].forEach((leitura) => {
      let objAux = {};
      objAux[element] = leitura;

      formatedData.push(objAux);
    });
  });

  console.log(formatedData);

  return (
    <div>
      <LineChart
        className="grafico"
        width={window.innerWidth * 0.9}
        height={window.innerHeight * 0.4}
        data={formatedData}
      >
        <Line
          type="monotone"
          dataKey="rasos"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="profundos"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        
        <CartesianGrid strokeDasharray="0 1" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}
