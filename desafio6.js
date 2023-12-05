//cli → Significa Interface de linha de comando
class usuario{
    constructor(nome, email, idade){
        this.nome = nome
        this.email = email
        this.idade =  idade
    }
}

class cadastro{
    constructor(){
        this.pessoinha = []        
     }
     cadastrar(){
        let nome = prompt("Digite seu nome:")
        let email = prompt("Digite seu E-mail:")
        let idade = prompt("Digite sua idade:")
        let pessoa = new usuario(nome, email, idade)
        this.pessoinha.push(pessoa)
        return this.pessoinha
    }

    listar(){
        if(this.pessoinha.length === 0){
            alert("Não existem pessoas cadastradas")
        }else{
            for (let i = 0; i< this.pessoinha.length; i++){
                alert(`Nome :${this.pessoinha[i].nome} \n E-mail | ${this.pessoinha[i].email} \n Idade | ${this.pessoinha[i].idade} \n`)
                this.pessoinha.forEach((valores)=> console.table(valores))
            }
        }
    }

}
const cadastrando = new cadastro ()
cadastrando.cadastrar()
cadastrando.listar()

