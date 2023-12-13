const opcao = prompt('Olá, Usuário. digite uma das opções abaixo: \n 1 - Cadastrar \n 2 - Listar \n 0 - Sair')
console.log(typeof opcao)
switch (opcao){
    case '1':
    alert('Cadastrar')
    break
    case '2':
    alert('listar')
    break
default:
alert('Sair')
}