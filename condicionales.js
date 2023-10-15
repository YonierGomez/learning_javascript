/* Condicionales
Invitación a una fiesta 
* si eres mayor de edad y menor de 65 años puedes entrar a la fiesta
* si tienes permiso firmado, puedes ingresar
* sino se cumple, quédate en casa

SINTAXIS - FORMULA
if (CONDICION) { ACCION } else
*/

//DECLARO VARIABLES
let persona = 'Yonier Manuel'
let edad = 80
let permiso = true

if (edad > 18 && edad < 65 ) {
    console.log(`${persona} puedes venir a la fiesta`)
} else if (permiso && edad < 18) {
    console.log(`${persona} puedes venir a la fiesta, tienes permiso en ${permiso}`)
} else {
    console.log(`${persona} tienes ${edad} años quédate en casa`)
}

// Condicionales múltiples
console.log('================================')
console.log('Condicionales múltiples')
console.log('================================')

/* ¿Qué personaje de Dragon ball eres?
* Si eres fuerte y comelon eres Goku
* Si eres veloz y egoista eres Vegueta
* Si eres pequeño y débil eres Krilin
* Si eres travieso y jugueton eres Trunks
* Si no eres ninguno eres una sabandija
*/
let personalidad = 'Fuerte y comelon'

if (personalidad === 'Fuerte y comelon') {
    console.log('Eres Goku')
} else if (personalidad === "Veloz y egoista") {
    console.log('Eres Vegueta')
} else if (personalidad === "Pequeño y débil") {
    console.log('Eres Krilin')
} else if (personalidad === "Travieso y jugueton") {
    console.log('Eres Trunks')
} else {
    console.log('Eres una sabandija')
}

// OPTIMIZACIÓN DEL CÓDIGO USANDO SWITCH
let mi_personalidad = 'Pequeño y débil'
// let mi_personalidad = 'Perro'

switch(mi_personalidad) {
    case 'Fuerte y comelon':
        console.log('Eres Goku')
        break
    case 'Veloz y egoista':
        console.log('Eres Vegueta')
        break
    case 'Pequeño y débil':
        console.log('Eres Krilin')
        break
    case 'Travieso y jugueton':
        console.log('Eres Trunks')
        break
    default:
        console.log('Eres una sabandija')
    }