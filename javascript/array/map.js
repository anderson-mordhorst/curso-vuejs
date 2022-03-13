const nums = [1, 2, 3, 4, 5];

// Map => For com propósito
let resultado = nums.map(numero => numero * 2);

console.log(nums);
console.log(resultado);


const somaDez = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

console.log(nums.map(somaDez).map(triplo).map(paraDinheiro));