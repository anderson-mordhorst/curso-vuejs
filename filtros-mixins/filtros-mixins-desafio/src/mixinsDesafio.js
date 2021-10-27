export default {
    computed: {
		trocarEspacosComputedMixin() {
			return this.texto.replace(/ /g, ',');
		},
		contarComputedMixin() {
			const words = this.texto.split(' ');
			let result = Array(words.length);
			for(let i = 0; i < words.length; i++) {
				let word = words[i]
				let size = word.length;
				result[i] = `${word} (${size})`;
			}

			return result.join(' ');
		}        
    },
}