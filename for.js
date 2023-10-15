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