<template>
    <div class="usuario-editar">
        <h3>Usuário editar</h3>
        <hr>
        <p><strong>Código: </strong>{{ $route.params.id }}</p>
        <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua: </strong>{{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false,
        }
    },
    // executa antes de sair da rota do componente
    beforeRouteLeave(to, from, next) {
        if(!this.confirmou) {
            this.confirmou = confirm('Tem certeza');
        }
        next(this.confirmou );
    },
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>