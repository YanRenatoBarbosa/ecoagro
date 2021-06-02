export function validarInputsQntd( inputs, setStatusInputRasos, setStatusInputProfs ) {
  if (inputs.length <= 0) {
    return false;
  }

  let [qtdRasos, qtdProfs] = inputs.map((element) => parseInt(element.value));

  if (qtdRasos < 0) {
    setStatusInputRasos("wrong");
    return false;
  }

  if (qtdProfs < 0) {
    setStatusInputProfs("wrong");
    return false;
  } 
  
  else if (qtdRasos > 0 || qtdProfs > 0) {
    setStatusInputRasos("noProblems");
    setStatusInputProfs("noProblems");

    return true;
  }
}

export function validarSelectsEspecificacoes(selects) {
  if (selects.length <= 0) {
    return false;
  }

  let escolhas = selects.map(select => select.value);
  let escolhasSaoValidas = false;

  escolhas.includes('opcaoPadrao') ?
    escolhasSaoValidas = false
  : escolhasSaoValidas = true;

  return escolhasSaoValidas;
}
