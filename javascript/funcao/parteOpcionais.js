// função pode não retornar valor
function area(largura, altura) {
    const area = largura * altura;
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area;
    }
};

console.log(area(2, 2));
// é possível passagem opcional de parâmetros
console.log(area(2));
console.log(area());
console.log(area(5, 5));
