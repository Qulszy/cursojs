/*const readline = require("readline-sync");

function main(){ 
    const primerio = readline.questionFloat("Primeiro numero: ");
    const operador = readline.question("Operador: ");
    const segundo = readline.questionFloat("Segundo numero: ");

    if (operador == '+'){
        soma(primerio,segundo)
        console.log(soma(primerio,segundo))
    }else if(operador == '-'){
        sub(primerio,segundo)
        console.log(sub(primerio,segundo))
    }else if(operador == '/'){
        div(primerio,segundo)
        console.log(div(primerio,segundo))
    }else if(operador == '*' || operador == 'x'){
        mult(primerio,segundo)
        console.log(mult(primerio,segundo))
    }

}   
function soma(primerio,segundo){
    let resultado = primerio+segundo
    return (resultado)
}function sub(primerio,segundo){
    let resultado = primerio-segundo
    return (resultado)
}function div(primerio,segundo){
    let resultado = primerio/segundo
    return (resultado)
}function mult(primerio,segundo){
    let resultado = primerio*segundo
    return (resultado)
}
main()*/

const readline = require("readline-sync");
const primerio = readline.questionFloat("Primeiro numero: ");
const segundo = readline.questionFloat("Segundo numero: ");
const terceiro = readline.questionFloat("Terceiro numero: ");

const conta1 = primerio => primerio**5
console.log(`${primerio} ** 5 = ${conta1(primerio)}`)

const conta2 = (segundo,terceiro) => {
    if (segundo > terceiro){
        return segundo
    }else{
        return terceiro
    }
}
console.log(`o maior entre o 2° (${segundo}) e o 3° (${terceiro}) número é o ${conta2(segundo,terceiro)}`)

