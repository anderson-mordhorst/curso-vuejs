// let e const para declarar variáveis e constantes
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a);
// erro porque b tem escopo no bloco
// console.log(b);


// template string
const produto = 'iPad';
console.log(`${produto} é caro!`);

// Destructuring
const [x, y] = [1, 2, 3];
console.log(x, y);
const { nome, idade } = { nome: 'Ana', idade: 18, sexo: 'Feminino' };
console.log(nome, idade);

// parâmetros default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('Erro');

// operador rest (juntar)/spread(espalhar)
function total(...numeros) {
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
};

console.log(total(2, 3, 4, 5));

// sprear com objeto
const funcionario = {
    nome: 'Maria',
    salario: 12348.99,
};

const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread em array
const grupo = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupo];
console.log(grupoFinal);


// ES8: Object.values/Object.entries
const objeto = { nome: 'Ana', idade: 18, sexo: 'Feminino' };
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

// Melhorias na notação literal
const nomePessoa = 'Carla';
const pessoa = {
    nomePessoa, // não precisa definir nomePessoa: nomePessoa
    ola() { // não precisa mais colocar a palavra reservada function
        console.log('Olá!');
    },
};

console.log(pessoa.nomePessoa);
pessoa.ola();

// Classes
class Animal {};
class Cachorro extends Animal {
    falar() {
        return 'Au au!';
    };
};

console.log(new Cachorro().falar());