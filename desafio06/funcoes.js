function validaNome(nome) {
    if (nome.length <= 3 || /[0-9]/.test(nome)) {
        console.log('Nome deve conter estrutura padrão.')
        return false  // se for verdadeiro
    }
    return true // se falso
}

function validaEmail(email) {
    if (!/[a-z0-9]+@\S+\.\S+/.test(email)) {
        console.log('E-mail inválido')
        return false
    }
    return true
}

function validaIdade(idade) {
    if (idade < 17 || idade > 66) {
        console.log('Você não atende aos critérios de idade')
        return false
    }
    return true
}

module.exports = function validaFuncoes(nome, email, idade) {
    return validaNome(nome), validaEmail(email), validaIdade(idade)
}

