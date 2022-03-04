const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    },
};

pessoa.falar();
const falar = pessoa.falar;
// aqui dá undefined...a variável não possui o this...está em outro contexto
falar();

// dessa forma, passando como parâmetro pessoa para o bind, a função pode resolver o this
// amarra como dono da função o objeto pessoa, retornando OUTRA função
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

// sem o bind(this), retorna NaN
function Pessoa() {
    this.idade = 0;

    // sem o bind, poderíamos armazenar o this.
    const self = this;
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/* .bind(this) */, 1000);
};

new Pessoa;