//cli → Significa Interface de linha de comando
const validaFuncoes = require('./funcoes');
const Usuario = require('./classeUsuario');


class Cadastro {
  constructor() {
    this.pessoas = []
  }
  async cadastrar(nome, email, idade) {
    // verificar se o nome atende aos criterios 
    if(validaFuncoes(nome, email, idade)){
      let pessoa = new Usuario(nome, email, idade)
      this.pessoas.push(pessoa)
    }  else{
      console.log("ERRO")
    }

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
cadastro.cadastrar('Henrique', 'bnascimento@gmail.com', 20)





