const pessoa = require('./index');
const Usuario = new pessoa('Maria', 'henrique@gmail.com', 40)

test('Deve receber nome de pessoas acima de 3 caracteres', () => {
    expect(Usuario.nome.length).toBeGreaterThan(3) //toBeGreaterThan significa MAIOR QUE | toBeLessThan significa MENOR QUE
})
test('Deve receber apenas nomes de pessoas que não contenham números', () => {
    expect(Usuario.nome).toBe(String.nome)
})

