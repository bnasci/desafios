function contarR(texto, condicao1){
    texto = texto.toLowerCase();
    let count = 0;
    for (let i = 0; i < texto.length;i++){
        if(texto[i] === condicao1){
            count++;
        }
    }
return count;
}
console.log(contarR("o rato roeu a roupa do rei de roma","a"))


function validacao(){
    let condicao1 = 'd';
    let texto = 'O rato roeu a roupa do rei de roma';
    let resultado = contarR(texto, condicao1);
    resultado === 2? console.log('PASSOU'):console.log('NÃO PASSOU');  // aqui eu use o operador ternário
}
    validacao();

