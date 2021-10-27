<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->		
		<h1>Exercício 1</h1>
		<p>{{ texto | trocaEspacos }}</p>
		<hr>	
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<h1>Exercício 2</h1>
		<p>{{ texto | contar }}</p>		
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<h1>Exercício 3</h1>
		<p>{{ trocarEspacosComputed }}</p>
		<p>{{ contarComputed }}</p>
		<hr>		
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<h1>Exercício 4</h1>
		<p>{{ trocarEspacosComputedMixin }}</p>
		<p>{{ contarComputedMixin }}</p>		
	</div>
</template>

<script>
import mixinsDesafio from '@/mixinsDesafio';

export default {
	mixins: [ mixinsDesafio ],

	filters: {
		trocaEspacos(value) {
			return value.replace(/ /g, ',');
		},
	},

	data() {
		return {
			texto: 'Trocar espaços por vírgulas',
		}
	},

	computed: {
		trocarEspacosComputed() {
			return this.texto.replace(/ /g, ',');
		},
		contarComputed() {
			const words = this.texto.split(' ');
			let result = Array(words.length);
			for(let i = 0; i < words.length; i++) {
				let word = words[i]
				let size = word.length;
				result[i] = `${word} (${size})`;
			}

			return result.join(' ');
		}

	}
	
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
</style>
