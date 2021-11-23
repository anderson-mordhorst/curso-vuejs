<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'pt' } }">Editar</router-link>
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
}
</script>

<style>

</style>