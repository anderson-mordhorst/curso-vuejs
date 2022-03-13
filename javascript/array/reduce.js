const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];

console.log(alunos.map(aluno => aluno.nota));
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
});
console.log(resultado);


// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsita) => resultado && bolsita;
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas));


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsita) => resultado || bolsita;
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista));


Array.prototype.myReduce = function(callback) {
    let acumulador = this[0];
    for(let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);       
    }
    
    return acumulador;
}

const soma = (total, valor) => total + valor;
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.myReduce(soma));