new Vue({
	el: '#desafio',
	data: {
		currentEfeito: null,
		width300: 'width300',
		colorRed: 'colorRed',
		selectedClass: null,
		rotate: 'false',
		color: null,
		progress: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				if(!this.currentEfeito){
					this.currentEfeito = 'destaque'
				} else {
					this.currentEfeito = (this.currentEfeito == 'destaque' ? 'encolher' : 'destaque');
				}
			}, 1000);
		},
		iniciarProgresso() {
			const temporizador = setInterval(() => {
				this.progress = Math.min(this.progress + 5, 100);
				if(this.progress === 100){
					clearInterval(temporizador)
				}
			}, 500);
		}
	},

	computed: {
		rotacionar() {
			return this.rotate === 'true';
		},
		back() {
			return {
				backgroundColor: this.color,
			}
		},
		progressStyle() {
			return {
				width: '300px',
				textAlign: 'center',
				background: `linear-gradient(to right, yellow ${this.progress}%, white 0%)`,
			}
		}
	}
})
