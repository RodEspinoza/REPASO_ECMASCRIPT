//Default parameters
function newFunction(name, age, country){
    var name = name || 'Default';
    var age = age || 18;
    var country = country || country;

    console.log(name, age, country )
}

newFunction()