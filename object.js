/*
Objetos en javascript
*/

// Declarando el objeto alumno y sus atributos
let alumno = {
    nombre: 'Yonier',
    edad: 32,
    studiante: true
}

// Acceder a todos los atributos
console.log(alumno)

// Acceder a la edad del objeto alumno

console.log(alumno['edad'])

// Acceder a las claves

let results = Object.keys(alumno)
console.log(results)

// Acceder a todos los valores, esto retorna un array de valores
let result = Object.values(alumno)
console.log(result)
