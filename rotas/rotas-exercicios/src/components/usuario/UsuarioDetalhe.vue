<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'pt', hash: '#rodape' } }">Editar</router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from , next){
        // esse método é executado antes da criação do componente, por isso o this.id dá undefined
        // console.log('Id: ', this.id);
        console.log('dentro do componente -> usuário detalhe');
        next(instance => {
            console.log('aqui é possível acessar o id', instance.id);
        });
    },
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