import React, { useState } from "react";

import { StyledStepper } from "./style";

export const Stepper = ({ etapa }) => {
  const [progresso, setProgresso] = useState(["green", "", ""]);
  const [checkedList, setCheckedList] = useState(["", "", ""]);

  let progressoAux = progresso;
  progressoAux[etapa] = "green";

  //resetando etapas no caso de mudanças invertidas na etapa
  if (etapa === 0) {
    progressoAux[1] = "";
    progressoAux[2] = "";
  } else if (etapa === 1) {
    progressoAux[2] = "";
  }

  if (JSON.stringify(progresso) !== JSON.stringify(progressoAux)) {
    setProgresso(progressoAux);
  }

  //parte que mostra o sinal checked
  let checkedListAux = checkedList;

  if (etapa > 0) {
    checkedListAux[etapa - 1] = "checked";
  }

  if (etapa === 0) {
    checkedListAux[1] = "";
  }

  if (etapa === 1) {
    checkedListAux[1] = "";
  }

  if (JSON.stringify(checkedList) !== JSON.stringify(checkedListAux)) {
    setCheckedList(checkedListAux);
  }

  return (
    <StyledStepper>
      <div className={`circulo ${progressoAux[0]}`}>
        <p className={`${checkedListAux[0]}`}>1</p>
        <span className={`material-icons  ${checkedListAux[0]}`}>done</span>
      </div>
      <div className={`linha ${progressoAux[1]}`}></div>

      <div className={`circulo ${progressoAux[1]}`}>
        <p className={`${checkedListAux[1]}`}>2</p>
        <span className={`material-icons  ${checkedListAux[1]}`}>done</span>
      </div>
      <div className={`linha ${progressoAux[2]}`}></div>

      <div className={`circulo ${progressoAux[2]}`}>
        <p className={`${checkedListAux[2]}`}>3</p>
        <span className={`material-icons  ${checkedListAux[2]}`}>done</span>
      </div>
    </StyledStepper>
  );
};
