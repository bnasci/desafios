function countR(texto) {
  texto = texto.toLowerCase();
  let count = 0;

  for (var i = 0; i < texto.length; i++) {
    if (texto[i].includes(condicao1)) {
       count++;
    }
  }
  return count;
}
var texto = "o rato roeu a roupa do rei de roma";
let condicao1 = 'r'
  console.log(`Na frase: ${texto}, encontramos ${countR(texto)} caracteres "${condicao1}".`);
