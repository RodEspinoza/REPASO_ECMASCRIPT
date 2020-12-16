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
console.log(lorem)
// ES6
let lorem2 = `
No es necesario concaternar con slash N
Solamente baste el utilizar comillas francesas
`
console.log(lorem2)
