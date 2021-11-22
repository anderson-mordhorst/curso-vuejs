import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio.vue';
import Usuario from '@/components/usuario/Usuario.vue';

Vue.use(Router);

export default new Router({
    mode: 'history', // hash
    routes: [{
        path: '/',
        component: Inicio,
    },
    {
        path: '/usuario/:id',
        component: Usuario,
        props: true, // todos os parâmetros da rota serão passados como propriedades
    }],
});