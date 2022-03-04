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

/* this pode variar usado dentro de uma funcion declarada normalmente 
   Porém, quando usado em arrow function o comportamento do this não altera
   
   this léxico: associado no local onde foi escrita a function e não onde ela é resolvida (executada)
*/
