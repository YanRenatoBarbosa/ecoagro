// this will come be a api
export function getData() {

  return new Promise((resolve, reject) => {
    resolve( { 
      Aspersão: [ 
        { "tensao": [10, 20], "hortalicas": ["Aipo", "alface", "alho", "cebola", "cenoura", "morango", "rabanete"]},
        { "tensao": [20, 40], "hortalicas": ["Abóbora", "abobrinha", "alho-porro", "batata", "berinjela", "brócolos", "espinafre", "feijão-vagem", "jiló", "melancia", "melão", "nabo", "pimentão"]},
        { "tensao": [40, 70], "hortalicas": ["Batata-doce", "beterraba", "couve", "couve-flor", "mandioquinha-salsa", "milho-doce", "pepino", "pimenta", "quiabo", "repolho", "tomate"]} 
      ],
        
      Sulco: [
        { "tensao": [20, 40], "hortalicas": [ "Abóbora", "abobrinha", "aipo", "alface", "alho", "alho-porro", "batata", "berinjela", "brócolos", "cebola", "cenoura", "espinafre", "feijão-vagem", "jiló", "melancia", "melão", "morango", "nabo", "pimentão", "rabanete"]},
        { "tensao": [40, 70], "hortalicas": [ "Batata-doce", "beterraba", "couve", "couve-flor", "mandioquinha-salsa", "milho-doce", "pepino", "pimenta", "quiabo", "repolho", "tomate" ]}
      ],
        
      Gotejamento: [
        { "tensao": [10, 20], "hortalicas": [ "Abóbora", "abobrinha", "aipo", "alface", "alho", "alho-porro", "batata", "berinjela", "brócolos", "cebola", "cenoura", "espinafre", "feijão-vagem", "jiló", "melancia", "melão", "morango", "nabo", "pimentão", "rabanete" ]},
        { "tensao": [20, 40], "hortalicas": [ "Batata-doce", "beterraba", "couve", "couve-flor", "mandioquinha-salsa", "milho-doce", "pepino", "pimenta", "quiabo", "repolho", "tomate" ]},
        { "tensao": [40, 70], "hortalicas": [ "Ervilha", "grão-de-bico", "lentilha" ]}
      ]
    } );
  })
}
