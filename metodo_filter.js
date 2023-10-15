/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// Método .map() es un ciclo y si permite retornar un dato si se guarda en variable
console.log('==========================================================')
console.log('Usando el método .map() para crear una lista')

let mynum = [30, 23, 10, 12, 19, 21, 54, 5464, 67, 23, 1566, 67, 7878, 4545]
newmynum = []


mynum.map(num => {
    if (num > 20) {
        console.log(num)
        newmynum.push(num)
    }
})

console.log(newmynum)

// Usando .filter - debemos pasar una funct
console.log('==========================================================')
console.log('Usando el método .filter() para simplificar')
let listnum = [30, 23, 10, 12, 19, 21, 54, 834, 10, 19, 67, 23, 1566, 67, 7878, 4545]

let num_dato = listnum.filter(l_num => l_num > 20)

console.log(num_dato)
