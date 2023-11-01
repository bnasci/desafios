const preposicoes = ["da", "das", "de", "di", "do", "dos"];
const minhaFrase = "raul alencar do nascimento";
const palavras = minhaFrase.split(" ");
let fraseFormatada = "";
for (let i = 0; i < palavras.length; i++) {
  let aux = palavras[i].split("");
  if (!preposicoes.includes(palavras[i])) {
    aux[0] = aux[0].toUpperCase();
  }
  fraseFormatada += ` ${aux.join("")}`;
}
console.log(fraseFormatada);
