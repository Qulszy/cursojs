/*lista = [ 8, 9, 12, 15, 27, 30, 33, 39, 40, 42, 58, 59, 60, 63, 65 ]
listam3 =[]
listam5 = []
listam35 = []
x = lista.length
for(i = 0;i < x;i++){
    if (lista[i]%3 == 0){
        listam3.push(lista[i])
    }
}for(k = 0;k < x;k++){
    if (lista[k]%5 == 0){
        listam5.push(lista[k])
    }
}for(l = 0;l < x;l++){
    if ((lista[l]%3 == 0) && (lista[l]%5 == 0)){
        listam35.push(lista[l])
    }
}   
console.log(lista)
console.log(listam3)
console.log(listam5)
console.log(listam35)*/

let lista = [ 8, 9, 12, 15, 27, 30, 33, 39, 40, 42, 58, 59, 60, 63, 65 ]
console.log(lista.filter(n => n%3 == 0));
console.log(lista.filter(n => n%5 == 0));
console.log(lista.filter(n => (n%3 == 0) && (n%5 == 0)));