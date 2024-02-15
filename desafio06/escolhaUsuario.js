module.exports = async function opcaoUsuario() {
    while (true) {
      const num = await rl.question('Olá, Usuário. digite uma das opções abaixo: \n 1 - Cadastrar \n 2 - Listar \n 0 - Sair\n\n: ')
      switch (num) {
        case '0':
          console.log('Saindo...')
          rl.close()
          process.exit(0)
        case '1':
          await cadastro.cadastrar()
          break
        case '2':
          cadastro.listar()
          break
        default:
          console.log('Valor Inválido')
      }
    }
  }
  
  opcaoUsuario()