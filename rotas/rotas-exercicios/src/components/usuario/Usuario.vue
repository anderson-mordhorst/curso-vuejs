<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },

    // watch: {
    //     // esse watch em $route garante que ao navegar diretamente de usuario 1 <-> usuario 2 o id seja atualizado
    //     $route(to) {
    //         this.id = to.params.id;
    //     },
    // },

    methods: {
        irParaInicio() {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>