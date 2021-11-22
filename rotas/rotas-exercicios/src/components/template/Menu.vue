<template>
    <nav class="menu">
        <ul>
            <!-- Sem o exact, caso seja navegado para o usuário o link fica ativo porque /usuario possui o / -->
            <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
            <router-link to="/usuario" tag="li" active-class="active"><a>Usuário</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>