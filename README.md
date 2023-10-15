# Learning JavaScript

## Variables y constantes

```js
/* Variables y constantes
*/

// Declaración - Reserva el espacio para nombre
let nombre 

// Asignación
nombre = 'Yonier'

// Impresión
console.log(nombre)


// Declaración y asignación en 1 linea
let edad = 20

//Impresion
console.log(edad)

// Reasignacion
edad = 32

//Impresion
console.log(edad)


/* Constantes, para esto usamos la palabra reservada const, las constantes no se pueden cambiar
una vez declarada*/

const EMPRESA = 'neytor'

//Impresion
console.log(EMPRESA)
```



## Tipos de datos

```js
console.log(typeof 'Probando esta mierda') //Este tipo de dato es string
console.log(typeof 20) //Este tipo de dato es number
console.log(typeof 20.03) //Este tipo de dato es number
console.log(typeof true) //Este tipo de dato es bolean
console.log(typeof false) //Este tipo de dato es bolean

/* Objetos en javascript, los objetos son colecciones de datos o información que tienen un identificar (index) y un valor 

*/
console.log(['pera', 'mango', 'limon']) //Este tipo de colección de datos, listas, 
console.log(typeof ['pera', 'mango', 'limon']) //Este tipo de colección de datos, listas, 

/* Objetos en javascript, los objetos son colecciones de datos o información que tienen un identificar (index) y un valor 
A LOS IDENTIFICADORES EN EL OBJETO SE LE LLAMARÁ ATRIBUTO Y AL VALOR, VALOR
*/

console.log( {
    nombre: 'yonier',
    edad: 32
})

console.log(typeof {
    nombre: 'yonier',
    edad: 32
})

/* Tipo de dato Null, lo considera un objeto
*/
console.log(typeof null)



/* Tipo de dato Undefined
*/
console.log(typeof undefined)
```

## Operadores

```js
/* Operadores
*/

// Operadores de asignación
// El igual
let name 

name = 'Manuel'

console.log(name)

let edad = 32

// Operador aritmetico

let numero1 = 70
let numero2 = 30

console.log(numero1 - numero2)

// Template string
console.log(`Hola, mi nombre es: ${name} y mi edad es ${edad}`)

// Operadores de comparación

```

## Condicionales

```js
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
```

## For y while

### For

```js
/* Ciclos, bucles, loop

for (valor_inicializacion; condicion, incremental) {
    bloque_codigo
}

* El valor de inicializacion se ejecuta solo una vez
* La condición indica que el ciclo seguirá dando vueltas hasta que deje de ser verdadera
* Incrementa el valor inicial para que se acab la condición
*/

for (let i = 0; i < 5; i++) {
    console.log(i)
}

/*
Explicación 
* "i" es igual a 0 (esto se ejecuta una sola vez)
* si "i" es menor que 10 se ejecuta el bloque de código (bloque de código se ejecuta)
* "i" se incrementa y vale 1
* IMPORTANTE: CUANDO SE EJECUTA POR SEGUNDA VEZ SERÍA ASÍ

Segunda ejecución
* "i" es menor aque 10? si es así se ejecuta el bloque de código
* "i" se incrementa y vale 2 

Tercera ejecución
* "i" es menor aque 10? si es así se ejecuta el bloque de código
* "i" se incrementa y vale 3

*/

// Ejercicio de refuerzo, dado un texto vamos a recorrer letra por letra

let name = 'Yonier Gómez'

for (let i = 0; i < name.length; i++ ) {
    console.log(name[i])
}

// Ejercicio 2 con coleccion de datos

let animales = ['vaca', 'gato', 'perro']

for (let i = 0; i < animales.length; i++ ) {
    console.log(animales[i])
}
```

### While

```js
/* Ciclos, bucles, loop

SINTAXIS
while (condicion) {
    bloque_codigo
    incremental
}

* Tenemos 15 juguetes
* Mientras que juguetes sea mayor que 0
* Regalamos un jueguete
* Descontamos un jueguete
* El ciclo finaliza cuando ya no tengamos juguetes
*/

let juguetes = 15

while (juguetes > 0) {
    juguetes--
    console.log(`Regalamos un juguete, restante: ${juguetes} `)
}

```

## Funciones

### Funciones

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion lab_function 
function lab_function () {
    console.log('Hola, buenos días')
}

// Llamando a la función
lab_function()
```

### Funciones con parámetros

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func
SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
function c_param_function (myname) {
    if (typeof myname === "string") {
        console.log(`Hi, Mr ${myname} from conditional`)
    } else {
        console.log('Tenga cuidado con el tipo de dato')
    }
} 

// Llamando a la función
c_param_function('Manuel')
c_param_function(10)
```

### Funciones primera clase

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func
SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
function return_function (name, age) {
    let name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función, si la guardo con () estoy llamando a la funcion
let ejecutado = return_function('Manuel', 32)


// Si la guardo sin parámetro, estoy guardandando la funcion, por ende puedeo pasar param
let ejecutar = return_function

/* HAY QUE TENER EN CUENTA QUE return_function('Manuel', 32) se convierte en un tipo de dato
Por ende se puede guardar en una variable
*/
```

### Funciones retornar dato

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func
SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
function return_function (name, age) {
    let name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función
console.log(return_function('Manuel', 32))

// alert(return_function('Manuel', 32))
```

### Funciones anonimas

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Las funciones anonimas no tienen nombre
* Se almacenan en una variable

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
let lab_func = function (name, age) {
    let name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función a través de la variable, recuerda que las func anon no tienen nombre
console.log(lab_func('Manuel', 32))

//AUTO LLAMAR FUNCION ANONIMA

(function(num1, num2) {
    console.log(num1 + num2)
}(10, 20))
```

### Funciones con constante

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Las funciones anonimas no tienen nombre
* Se almacenan en una variable

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
const lab_func = function (name, age) {
    const name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función a través de la variable, recuerda que las func anon no tienen nombre
console.log(lab_func('Manuel', 32))

//AUTO LLAMAR FUNCION ANONIMA
```

### Funciones flecha

```js
/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Funciones flecha o arrow function
* =>

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion suma y resta normales
const func_suma = function (a, b) {
    return a+b
}

const func_restar = function (c, d) {
    return c-d
}

// Declarar funcion suma y resta normales pero con func flecha
const suma = (a, b) => a+b
const restar = (c, d) => c-d
const saludar = nombre => `Hola Mr ${nombre}`


// Llamar la func
console.log(suma(10, 20))
console.log(restar(40, 20))
console.log(saludar('Yonier Manuel'))

/* Explicación
* Se remueve la palabra "function"
* Se dejan únicamente los parámetros
* Se remueve {} que servía para el bloque de código porque no tiene mucha lógica
* Se pasa lo que se requiere retornar, no es necesario "return"
* Si la func recibe solo 1 param no es necesario los paréntesis

IMPORTANTE: Si la funcion no requiere param se deben poner pero vacios
*/

// Creamos funcion flecha con lógica, es decir se añaden los {bloque_codigo}
const saludandome = nombre => {
    if (typeof nombre === "string") {
        console.log(`Hola Mr ${nombre}`)
    } else {
        console.error(`Tipo de dato Nombre ${nombre} errado`)
    }
}

// Llamar la funcion
saludandome('Iris')
saludandome(20)
```

