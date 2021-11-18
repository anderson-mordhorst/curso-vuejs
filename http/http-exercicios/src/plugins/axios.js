import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vue-64199-default-rtdb.firebaseio.com/';
// forma de colocar um token no header em cada requisição
//axios.defaults.headers.common['Authorization'] = 'token_teste';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
        // interceptando as requisições
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            return config;
        }, error => Promise.reject(error));

        //interceptando as respostas
        Vue.prototype.$http.interceptors.response.use(config => {
            return config;
        }, error => Promise.reject(error));
    },
});