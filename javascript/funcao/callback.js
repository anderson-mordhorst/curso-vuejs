const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
};

// chamada do callback
fabricantes.forEach(imprimir);

// resgatar notas menores que 7.0
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callback
let notasBaixas = [];
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// com callback usando arrow function
const notasAbaixoDeSete = nota => nota < 7;
notasBaixas = notas.filter(notasAbaixoDeSete);
console.log(notasBaixas);

//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(event) {
    console.log(`${event} ocorreu!`);
};

