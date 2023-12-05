// let minhaFrase = (nome) => {
//   const preposicoes = ["da", "das", "de", "di", "do", "dos"];
//   nome = nome.toLowerCase();
//   const palavras = nome.split(" ");
//   let fraseFormatada = [];

//   for (let i = 0; i < palavras.length; i++) {
//     let aux = palavras[i].split("");
//     if (!preposicoes.includes(palavras[i])) {
//       aux[0] = aux[0].toUpperCase();
//     }
//     fraseFormatada += `${aux.join("")} `;
//   }
//   return fraseFormatada.trim();
// };
// const nome = "aqui vai ser escrito um textão da silva sauro";
// console.log(minhaFrase(nome));

function localizarCondicao(frase){
  frase = frase.toLowerCase();
  const criterio = ['da','das','de','di','do','dos','du'];
  const palavras = frase.split(' ');
  const localizarCondicao = palavras.map(palavra => {
return criterio.includes(palavra)? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1);
  });
  return  localizarCondicao.join(' ');
}
const frase = "xUXA josé de almeida sobrinho";
const resultado = localizarCondicao(frase);
console.log(resultado);