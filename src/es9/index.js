const obj = {
    name: 'Rodrigo', 
    age: 25,
    country: 'CL'
}

let {name, ...all} = obj;
console.log(name, all)
// Spread operator 