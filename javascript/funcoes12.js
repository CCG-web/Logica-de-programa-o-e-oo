function nomeDaFuncao(parametro) {

}

function queDiaEhoje() {
    const data = new Date()
    console.log(`Hoje é dia:${data.getDate()}`)
}

queDiaEhoje()

function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2);
}

// const idade = 20;
// const tamanho = 10
// const resultado = soma(idade, tamanho)
// console.log('resultado', resultado)
// function Multiplicar(valor1, valor2) {
//     const resultado = valor1 * valor2
//     return resultado
// }

// console.log(Multiplicar(30,40))

const funcionario1 = {
    nome: 'zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 1800
}
const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 1999
}

const descontoFuncionario = (funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto))
const descontoFuncionario2 = (funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto))

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

// console.log(
//     `DescontoFuncionario01: ${descontoFuncionario}
//     DescontoFuncionario02 ${descontoFuncionario2}`
// )

function calcularDesconto(salarioBruto,desconto){
    return salarioBruto - (salarioBruto*desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto

)
funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto

)


console.log(
    `
    Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)