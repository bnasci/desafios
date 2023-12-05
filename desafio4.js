function cifra(nome, deslocamento){
    const nomeSeparado = nome.split("");
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const maiusculo = alfabeto.toUpperCase();
    let vazio = []

    for (let i = 0 ; i < nomeSeparado.length; i++){
        if (maiusculo.includes(nomeSeparado[i])){
            const valorIndex = maiusculo.indexOf(nomeSeparado[i]) + deslocamento
            vazio.push(maiusculo[valorIndex]);
        } 
           if (alfabeto.includes(nomeSeparado[i])){
            const valorIndex = alfabeto.indexOf(nomeSeparado[i]) + deslocamento
            vazio.push(alfabeto[valorIndex]);       
           }

        }
        return vazio.join("");
}
console.log(cifra('ZEBRA', 1));