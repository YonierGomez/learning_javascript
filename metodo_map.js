/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// Método .map() es un ciclo y si permite retornar un dato si se guarda en variable
console.log('==========================================================')
console.log('Usando el método .map() - es un ciclo')
/* .map() significa para cada, ej para cada elemento
* .map() necesita como parámetro UNA FUNCION
* La función necesita un parámetro, ese parámetro sería la variable, es decir cada elemento de la lista se convierte en la variable
IMPORTANTE: El parámetro dentro de la función se convierte en cada elemento del array, en este caso el param es "amigo"
*/

// Func flecha
console.log('==========================================================')

console.log('Usando el método .map() con func flecha')
let amigos = ['Pedro', 'Andrea', 'Vanessa', 'Yesica', 'Marin']
let myfriend = amigos.map(amigo => `Hola, ${amigo}` )

// Se imprime la variable que retorna un dato
console.log(myfriend)

console.log('==========================================================')
