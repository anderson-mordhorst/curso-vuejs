import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import './config/msgs';
import Vue from 'vue';
import App from './App';
import store from '@/config/store';
import router from '@/config/router';

Vue.config.productionTip = false;

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZGVyc29uIE1vcmRob3JzdCIsImVtYWlsIjoiYW5kZXJzb24ubW9yZGhvcnN0QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDU1NzQxNzksImV4cCI6MTY0NTgzMzM3OX0.pqXcMIY6muHFXPzmY4NfA2e0Qq84riXL6m_S_HwITPw';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');