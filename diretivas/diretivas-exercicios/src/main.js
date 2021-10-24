import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	// el, binding, vnode
	bind(el, binding) {
		// 3 segundos de atraso
		const atraso = binding.modifiers['atrasar'] ? 3000 : 0;

		setTimeout(() => {
			//el.style.backgroundColor = 'lightgreen';
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, atraso);
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
