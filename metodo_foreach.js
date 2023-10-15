/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// Imprimir a través de un for
console.log('==========================================================')
console.log('Usando for para imprimir un array')
let amigos = ['Pedro', 'Andrea', 'Vanessa', 'Yesica', 'Marin']

// Con un for sería así

for (let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}

// Método .foreach() es un ciclo
console.log('==========================================================')
console.log('Usando el método .foreach() - es un ciclo')
/* For each significa para cada, ej para cada elemento
* For each necesita como parámetro UNA FUNCION
* La función necesita un parámetro, ese parámetro sería la variable, es decir cada elemento de la lista se convierte en la variable
IMPORTANTE: El parámetro dentro de la función se convierte en cada elemento del array, en este caso el param es "amigo"
*/

amigos.forEach(function (amigo) {
    console.log(amigo)
})

// Func flecha
console.log('==========================================================')
console.log('Usando el método .foreach() con func flecha')
amigos.forEach(amigo => console.log(amigo))
console.log('Como es una func flecha podemos omitir el () del param')
console.log('==========================================================')

// Func flecha con lógica
console.log('==========================================================')
console.log('Usando el método .foreach() con func flecha y lógica')
amigos.forEach((amigo) => {
    if (typeof amigos === "list") {
        console.log(amigo)
    } else {
        console.error('Tipo de dato no valido, amigo es un:', typeof amigos)
    }
})

// IMPORTANTE: SI AÑADIMOS FOREACH A UNA VARIABLE, FOREACH NO DEVUELVE NINGÚN DATO

// La finalidad de foreach es hacer algo con los elementos