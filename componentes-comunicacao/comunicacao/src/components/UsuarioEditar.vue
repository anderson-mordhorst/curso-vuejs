<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade()">Alterar idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    props: {
        idade: {
            type: Number,
            required: true,
        }
    },
    methods: {
        alterarIdade(){
            //this.$emit('idadeMudou', 18);
            let alterado = this.idade;
            alterado = 18;
            barramento.$emit('idadeMudou', alterado);
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
