/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// Declarar un array
let animales = ['perro', 'gato']

// Añadiendo elementos al array con el método .push()
console.log('=============================================================')
console.log('Creando array y añadiendo con el metodo .push()')
animales.push('vaca')
console.log(animales)

// Si guardo a .push() en una variable me arorja el numero de elementos
let cantidad = animales.push('oso')
console.log(cantidad)

console.log('=============================================================')
console.log('Repasando for imprimiendo el array')
// Repasando un ciclo for
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i])
}

console.log('=============================================================')
console.log('Quitando elementos del array, en este caso es "OSO"')
// Quitando elementos de array con el método .pop
animales.pop('oso')
console.log(animales)


// Método .slice() lo que hace es dividir nuestro array en 2
console.log('=============================================================')
console.log('Usando método .slice() para crear una nueva lista')
let amigos = ['Pedro', 'Andrea', 'Vanessa', 'Yesica', 'Marin']
let amigo = amigos.slice(0, 2) // con el slice le digo que toma la posicion 1 que es pedro y el 2 que es que es Vanessa pero no se cuenta, entonces queda Andrea
console.log(amigo) //Imprimo la nueva lista