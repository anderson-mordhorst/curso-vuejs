let dobro = function(a) {
    return 2 * a;
}

// arrow function com bloco precisa ter o return
dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return implícito

console.log(dobro(Math.PI));

let ola = function() {
    return 'Olá!';
}

ola = () => 'Olá!';
ola = _ => 'Olá!'; // possui um parâmetro


function Pessoa() {
    this.idade = 0;

    // chamar com arrow function faz com que o this fique no escopo da classe (léxico)
    setInterval(() =>  {
        this.idade++;
        console.log(this.idade);
    }, 1000);
};

// new Pessoa;

// mais exemplos com this
let comparaComThis = function(param) {
    console.log(this === param);
}

// testar com o objeto global
comparaComThis(global); // retorna true

const objeto = {}
comparaComThis = comparaComThis.bind(objeto);
comparaComThis(global);
comparaComThis(objeto);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); // retorna false
comparaComThisArrow(module.exports); // compara com o módulo corrente...retorna true

// arrow function com bind, mesmo assim o this aponta para o local onde a function foi declarada
comparaComThisArrow = comparaComThisArrow.bind(objeto);
comparaComThisArrow(objeto); // retorna false
