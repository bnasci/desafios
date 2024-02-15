//cli → Significa Interface de linha de comando

import { createInterface } from 'node:readline/promises';
import { stdin as i, stdout as o } from 'node:process';

const rl = createInterface({ input: i, output: o });

class Usuario {
  constructor(nome, email, idade) {
    this.nome = nome
    this.email = email
    this.idade = idade
  }
}

class Cadastro {
  constructor() {
    this.pessoas = []
  }
  async cadastrar() {
    let nome = await rl.question("Digite seu nome: ")    
    // verificar se o nome atende aos criterios
    let email = await rl.question("Digite seu E-mail: ")
    // verificar se o email atende aos criterios
    let idade = await rl.question("Digite sua idade: ")
    // verificar se a idade atende aos criterios    
    let pessoa = new Usuario(nome, email, idade)
    this.pessoas.push(pessoa)
    console.log(`A pessoa ${pessoa.nome} foi cadastrada com sucesso!`)
  }

  listar() {
    if (this.pessoas.length === 0) {
      console.log("Não existem pessoas cadastradas")
    } else {
      for (let i = 0; i < this.pessoas.length; i++) {
        console.log(`Nome :${this.pessoas[i].nome} \n E-mail | ${this.pessoas[i].email} \n Idade | ${this.pessoas[i].idade} \n`)
        this.pessoas.forEach((valores) => console.table(valores))
      }
    }
  }

}
const cadastro = new Cadastro()

async function main() {
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

main()


