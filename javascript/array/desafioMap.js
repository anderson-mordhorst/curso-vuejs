const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Cadersno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];


// Retornar o array apenas com o preço
console.log(carrinho.map(stringElement => JSON.parse(stringElement)).map(element => element.preco));


// Criando um novo método map
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};

console.log(carrinho.myMap(stringElement => JSON.parse(stringElement)).myMap(element => element.preco));