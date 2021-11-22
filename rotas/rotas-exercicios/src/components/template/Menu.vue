<template>
    <nav class="menu">
        <ul>
            <!-- Sem o exact, caso seja navegado para o usuário o link fica ativo porque /usuario possui o / -->
            <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
            <!-- Trocar do usuário 1 para o 2 direto não atualiza o param -->
            <router-link to="/usuario/1" tag="li" active-class="active"><a>Usuário 1</a></router-link>
            <router-link to="/usuario/2" tag="li" active-class="active"><a>Usuário 2</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>