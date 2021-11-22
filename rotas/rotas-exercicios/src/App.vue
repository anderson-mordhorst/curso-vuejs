<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu/>
		<!-- local onde será carregado os componentes da rota -->
		<router-view />
	</div>
</template>

<script>
import Menu from '@/components/template/Menu.vue';

export default {
	components: { Menu },
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
