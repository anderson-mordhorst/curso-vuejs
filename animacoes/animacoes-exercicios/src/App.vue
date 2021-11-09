<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="showMessage = !showMessage">Mostrar mensagem</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-if="showMessage"> {{ message }}</b-alert>
		</transition>		
		<transition name="slide" appear>
			<!--appear na transição executa a transição no carregamento do componente-->
			<b-alert variant="info" show v-show="showMessage"> {{ message }}</b-alert>
		</transition>
		<transition enter-active-class="animated bounce" leave-active-class="animated shake">
			<b-alert variant="info" show v-show="showMessage"> {{ message }}</b-alert>
		</transition>
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="showMessage" key="first"> {{ message }}</b-alert>
			<b-alert variant="warning" show v-else key="second"> {{ message }}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			message: 'Uma mensagem de informação para usuário',
			showMessage: false,
			tipoAnimacao: 'fade',
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
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {
		transform: translateY(40px);
	}

	to {
		transform: translateY(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
	}

	to {
		transform: translateY(40px);
	}	
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-enter-active {
	transition: opacity 2s;
	animation: slide-in 2s ease;
} 

.slide-leave-active {
	transition: opacity 2s;
	animation: slide-out 2s ease;
}
</style>
