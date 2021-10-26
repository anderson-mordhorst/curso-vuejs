<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpfFilter | inverter }}</p>
		<input type="text" :value="cpf | cpfFilter">
		<!-- | cpfFilter aplica o filtro -->	
		<hr>
		<frutas/>
		<hr>
	</div>
</template>

<script>
import Frutas from './Frutas.vue';
import frutasMixin from './frutasMixin';

export default {
  components: { Frutas },
  mixins: [ frutasMixin ],
	filters: {
		cpfFilter(valor){
			const array = valor.split('');
			array.splice(3, 0, '.');
			array.splice(7, 0, '.');
			array.splice(11, 0, '-');
			return array.join('');
		},
	},
	data() {
		return {
			cpf: '60070080090',
		};
	},
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		font-size: 2.5rem;
	}

	input {
		font-size: 2.5rem;
	}
</style>
