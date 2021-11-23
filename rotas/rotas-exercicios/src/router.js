import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio.vue';
import Usuario from '@/components/usuario/Usuario.vue';
import UsuarioLista from '@/components/usuario/UsuarioLista.vue';
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe.vue';
import UsuarioEditar from '@/components/usuario/UsuarioEditar.vue';

Vue.use(Router);

export default new Router({
    mode: 'history', // hash
    routes: [{
        path: '/',
        component: Inicio,
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true, // todos os parâmetros da rota serão passados como propriedades
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ],
    }],
});