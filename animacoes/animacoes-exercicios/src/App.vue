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
		<hr>
		<button @click="showAgain = !showAgain">Alternar</button>
		<!-- :css="false" faz com que seja totalmente controlado via JS  -->
		<transition
			:css="false"
			@before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCanceled"
			@before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCanceled">
			<div class="caixa" v-if="showAgain"></div>
		</transition>
		<hr>
		<div class="mb-4">
			<b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'" class="mr-2">Info</b-button>
			<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from '@/AlertaAdvertencia.vue';
import AlertaInfo from '@/AlertaInfo.vue';

export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			message: 'Uma mensagem de informação para usuário',
			showMessage: false,
			showAgain: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo',
		}
	},
	methods: {
		adicionarAluno() {
			const aluno = Math.random().toString(36).substring(2);
			this.alunos.push(aluno);
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1);
		},
		beforeEnter(element) {
			this.larguraBase = 0;
			element.style.width = `${this.larguraBase}px`;
		},
		enter(element, done) {
			let rodada = 1;
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + rodada * 10;
				element.style.width = `${novaLargura}px`;
				rodada++;

				if (rodada > 30) {
					clearInterval(temporizador);
					done();
				}
			}, 20);
		},
		afterEnter(element) {
			//console.log("afterEnter");
		},
		enterCanceled(element) {
			//console.log("enterCancelled");
		},
		beforeLeave(element) {
			this.larguraBase = 300;
			element.style.width = `${this.larguraBase}px`;
		},
		leave(element, done) {
			let rodada = 1;
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase - rodada * 10;
				element.style.width = `${novaLargura}px`;
				rodada++;

				if (rodada > 30) {
					clearInterval(temporizador);
					done();
				}
			}, 20);
		},
		afterLeave(element) {
			//console.log("afterLeave");
		},
		leaveCanceled(element) {
			//console.log("leaveCancelled");
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

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
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
	position: absolute;
	transition: opacity 2s;
	animation: slide-out 2s ease;
	width: 100%;
}

.slide-move {
	transition: transform 1s;
}
</style>
