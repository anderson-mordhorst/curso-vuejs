<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong> {{ inverterNome() }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome()"> Reiniciar nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    props: {
        nome: {
            type: String,
            required: true,
        },
        idade: {
            type: Number,
            required: true,
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },

        reiniciarNome() {
            const antigo = this.nome;
            this.nome = 'Anderson';
            // forma indireta via evento
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: antigo,
            });
            // comunicação entre irmãos: pode ser emitido um evento para o pai que através de props atualiza o componente irmão
        }
    },

    created(){
        barramento.$on('idadeMudou', idade => {
            this.idade = idade;
        });
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
