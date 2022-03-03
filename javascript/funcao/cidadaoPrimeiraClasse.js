// Função em JS é First-Class Object (Citizens)
// Higher-Order function

// forma literal
// retorno default: undefined
function myFunction() {}

// Poder armazenar em uma variável
const newFunction = function() {};

// Armazenar em um array
const array = [ function (a, b) { return a + b }, newFunction, myFunction ];

console.log(array[0](1, 2));

// Armazenar em objetos
const object = {};
object.talk = function() { return "Hi!" };
console.log(object.talk());

// Passar function como parâmetro
function runFunction(newFunction) {
    newFunction();
}

function sayHello() {
    console.log("Say Hello!");
}

runFunction(sayHello);

// Uma função pode retornar/conter outra função
function sum(a, b) {
    return function(c) {
        return a + b + c;
    }
}

console.log(sum(2, 4)(3));
const sixPlus = sum(2, 4);
console.log(sixPlus(2));
