export function converterMedidas(inputs, btnsMedidas, medidas) {
  medidas.forEach((btnSelecionado, i) => {
    if (btnSelecionado.classList[1] === "atm") {
      converterAtmParaCbar(inputs[i], btnsMedidas[i], btnSelecionado);
    } else if (btnSelecionado.classList[1] === "bar") {
      converterBarParaCbar(inputs[i], btnsMedidas[i], btnSelecionado);
    }
  });
}

function converterAtmParaCbar(target, btnsMedidas, btnSelecionado) {
  let novoValor = target.value.replace(",", ".");
  novoValor *= 101.325;
  target.value = novoValor.toFixed(2);

  btnSelecionado.classList.replace("selected", "unselected");
  let btnTarget = btnsMedidas.querySelector(".cbar");
  btnTarget.classList.replace("unselected", "selected");
}

function converterBarParaCbar(target, btnsMedidas, btnSelecionado) {
  let novoValor = target.value.replace(",", ".");
  novoValor *= 100;
  target.value = novoValor.toFixed(2);

  btnSelecionado.classList.replace("selected", "unselected");
  let btnTarget = btnsMedidas.querySelector(".cbar");
  btnTarget.classList.replace("unselected", "selected");
}
