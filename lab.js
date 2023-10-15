const saludar = (name) => `Hola Mr ${name}`

console.log(saludar('Yonier'))


function lab () {
    console.log('Todo bonito')
}

lab()

let permit = function (namee) {
    console.log(namee)
} 

permit('si')

let nombre
nombre = 'Man'
if (nombre === 'Yonier') {
    console.log('Eres el mejor')
} else if (nombre === 'Manu') {
    console.log('Eres un baboso')
} else {
    console.log('Estas pailas')
}


let myname = 'Yonier'

switch(myname) {
    case 'Yonier':
        console.log('Eres el mejor')
        break
    
    case 'Manu':
        console.log('Eres un baboso')
        break
    
    default:
        console.log('Estas pailas')

}