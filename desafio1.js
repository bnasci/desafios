// function countR(texto) {
//   texto = texto.toLowerCase();
//   let count = 0;

//   for (var i = 0; i < texto.length; i++) {
//     if (texto[i].includes(condicao1)) {
//        count++;
//     }
//   }
//   return count;
// }
// var texto = "rafael da silva sauro";
// let condicao1 = 's'
//   console.log(`Na frase: ${texto}, encontramos ${countR(texto)} caracteres "${condicao1}".`);

  function contarCaractere(frase){
    frase = frase.toLowerCase();
    let count = 0
    for(let i = 0; i < frase.length ; i++){
        if(frase[i].includes(condicao)){
            count++;
        }
    }
    return count;
}
let frase = "o rato roeu a roupa do rei de roma"
let condicao = 'r'
console.log(`Na frase: [${frase}], encontramos ${contarCaractere(frase)} caracteres de acordo com a condição [${condicao}]`)