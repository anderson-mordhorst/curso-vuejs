import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import Vue from 'vue';
import App from './App';
import store from '@/config/store';
import router from '@/config/router';

Vue.config.productionTip = false;

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZGVyc29uIE1vcmRob3JzdCIsImVtYWlsIjoiYW5kZXJzb24ubW9yZGhvcnN0QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDUyNzE1MDEsImV4cCI6MTY0NTUzMDcwMX0.MmWIX9q13GMiYmUvlUpJB8dTlHRJv-1hWaqnC42-TzU';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');