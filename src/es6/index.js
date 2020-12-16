//Default parameters  

function newFunction(name, age, country){
    var name = name || 'Default';
    var age = age || 18;
    var country = country || country;

    console.log(name, age, country )
}

let hello = 'Hello'
let world = 'World'
let concateSimple = hello + world

// Concatenacion a partir de ecma6
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase)

// Multilinea
let lorem = 'Lorem ipsum dolor sit amet, \n '
+'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

// ES6
let lorem2 = `
No es necesario concaternar con slash N
Solamente baste el utilizar comillas francesas
`
console.log(lorem)
console.log(lorem2)

// DESECTRUCRAR

function desectructure(){
    let person = {
        'name':'Rodrigo', 
        'age':25,
        'country':'CL'
    }
    let {name, age, country} = person;
    console.log(name, age, country)
}

function test(){
    let team1 = ['Rod', 'Chr']
    let team2 = ['Pato']
    let mixing = [...team1, ...team2]
    return mixing
}

// let disponible en el scope
// var global
// const  scope no reasignable


// ES6 Objetos mejorados
let name = 'Rodrigo'
let age = 25
let obj = {name: name, age:age}
let obj6 = {name, age}
console.log(obj6)

const objs = [obj6, obj6]
// iteracion antigua
let listOfNames = objs.map(function (item){
    return item.name
})
let listOfNames6 = objs.map(item => item.name)


