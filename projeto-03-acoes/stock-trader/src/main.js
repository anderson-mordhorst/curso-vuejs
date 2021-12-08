import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from '@/router.js';
import store from '@/store/store.js';

Vue.config.productionTip = false

Vue.filter('money', valor => {
	return `R$ ${valor.toLocaleString()}`;
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
