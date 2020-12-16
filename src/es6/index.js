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