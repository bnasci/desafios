let minhaFrase = (nome) => {
  const preposicoes = ["da", "das", "de", "di", "do", "dos"];
  nome = nome.toLowerCase();
  const palavras = nome.split(" ");
  let fraseFormatada = [];

  for (let i = 0; i < palavras.length; i++) {
    let aux = palavras[i].split("");
    if (!preposicoes.includes(palavras[i])) {
      aux[0] = aux[0].toUpperCase();
    }
    fraseFormatada += `${aux.join("")} `;
  }
  return fraseFormatada.trim();
};
const nome = "aqui vai ser escrito um textão da silva sauro";
console.log(minhaFrase(nome));
