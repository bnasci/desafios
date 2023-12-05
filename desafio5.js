function crc (nome){
let minusculas = nome.toLowerCase();
let consoantes = 'bcdfghjklmnpqrstvwxyz'
let vogais = 'aeiou'
let zero = ''
let binario = []
let contador = 0
let valorBinario = 0

for (let i = 0; i < minusculas.length; i++){
if(consoantes.includes(minusculas[i])){
    contador++
}
}
if(contador < 10){
zero = '0' + contador
}
for (let i = 0; i < vogais.length; i++){
    if(minusculas.includes(vogais[i])){
        binario.push(1)
    }else{
        binario.push(0)
    }
}0
binario.reverse()
// i de index ou indice
for(let i = 0; i < minusculas.length; i++){
    if(binario[i] === 1){
        valorBinario = valorBinario + 1 * Math.pow(2,i)
    }
}
if(contador < 10){
console.log(`${valorBinario}${zero}`)
}else{
    console.log(`${valorBinario}${contador}`)
}
}
crc('Marlon');