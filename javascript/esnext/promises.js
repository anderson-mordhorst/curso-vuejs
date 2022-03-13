function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        // resolve é invocado quando a promessa é atendida
        // reject é invocado quando gera erro. Precisa ser tratado no catch
        // resolve joga pro then. Aceita apenas UM parâmetro
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000);
    });
};

/*
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(final => console.log(final))
    .catch(() => console.log('Aqui é tratado o reject'));
*/


// Usando callback (sem promisse)
const http = require('http');
const buildUrl = letra => `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

const getTurma = (letra, callback) => {
    http.get(buildUrl(letra), response => {
        let resultado = '';
        response.on('data', dados => {
            resultado += dados;
        });

        response.on('end', () => {
            callback(JSON.parse(resultado));
        })
    });
};

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
            console.log(nomes);
        });
    });
});

// Usando promises
const getTurmaPromise = letra => {
    return new Promise((resolve, reject) => {
        http.get(buildUrl(letra), response => {
            let resultado = '';
            response.on('data', dados => {
                resultado += dados;
            });
    
            response.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                }
                catch(e) {
                    reject(e);
                }
            })
        });        
    });
};

console.log('Invocando Promisse.all');
Promise.all([getTurmaPromise('A'), getTurmaPromise('B'), getTurmaPromise('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));

getTurmaPromise('D').catch(e => console.log(e.message));
