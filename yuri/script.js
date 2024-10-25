const readline = require('readline-sync');
lista = []

for (let i = 0; i < 3; i++){
    nome = readline.question()
    nome.toLowerCase();
    lista.unshift(nome);  
}
console.log(lista)
const filtro = lista => lista.startsWith('y');
console.log(lista.filter(filtro))

