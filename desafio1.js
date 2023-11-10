function countR(string) {
  string = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === condicao1) {
      count++;
    }
  }
  return count;
}
var texto = "o rato roeu a roupa do rei de roma.";
let condicao1 = "i";
console.log(
  `Na frase : ` +
    texto +
    " Encontrei " +
    countR(texto) +
    ` caracteres ` +
    condicao1
);
