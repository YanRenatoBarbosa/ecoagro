export function getAnalise(resultado, data, setAnalise, analise) {
  
  let dataIsValid = (JSON.stringify(resultado) !== '{}' && JSON.stringify(data) !== '{}');

  if(dataIsValid) { 
    let analiseAux = {card: {}, text: ''}

    let tipoIrrigacao = resultado.tipoIrrigacao;
    let cultura = (resultado.cultura).toLowerCase();
    let tensoesArray = data[tipoIrrigacao];

    var tensaoMinima, tensaoMaxima;
    tensoesArray.forEach((element, i) => {
      if(element.hortalicas.includes(cultura)){
        tensaoMinima = element.tensao[1];
        tensaoMaxima = element.tensao[0];
      }
    });

    if(resultado.mediaGeral > tensaoMinima){
      analiseAux.card = { status: 'bad', text: 'Solo com umidade baixa!' }
      analiseAux.text = 'Os  dados apontam uma umidade abaixo do ideal, recomendamos que se irrigue a plantação!';
    }
    
    else if(resultado.mediaGeral < tensaoMaxima){
      analiseAux.card = { status: 'bad', text: 'Solo com umidade alta!' }
      analiseAux.text = 'Os  dados apontam uma umidade acima do ideal, recomendamos que não se irrigue a plantação!';
    }
    
    else {
      analiseAux.card = { status: 'good', text: 'Solo em ótima condição!' }
      analiseAux.text = 'Os dados apontam uma umidade ideal, por hora não recomendamos a irrigação.';
    }
  
    if( JSON.stringify(analiseAux) !== JSON.stringify(analise) ){
      setAnalise(analiseAux);
    }
  }
}