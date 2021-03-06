import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio.vue';
import Usuario from '@/components/usuario/Usuario.vue';
import UsuarioLista from '@/components/usuario/UsuarioLista.vue';
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe.vue';
// import UsuarioEditar from '@/components/usuario/UsuarioEditar.vue';

// import dinâmico (náo irá ser carregado esse componente dentro do app.js carregado na aplicação). 
// Será feito prefetch (0.js) e assim que entrar no componente irá ser feito a requisição HTTP 0.js)
// webpackChunkName: irá criar um arquivo .js com o nome especificado e colocar cada import com esse comentário dentro do arquivo.
// Ideal para carregar arquivos de módulos tardiamente em um único arquivo
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */ '@/components/usuario/UsuarioEditar.vue');

Vue.use(Router);

const router = new Router({
    mode: 'history', // hash
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
        if(to.hash) {
            return {
                selector: to.hash,
            }
        }
        return {
            x: 0,
            y: 0,
        }
    },
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
            { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: ((to, from, next) => { console.log('Antes da rota -> usuário detalhe'); next(); })},
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ],
    }, 
    {
        path: '/redirecionar',
        redirect: '/usuario',
    }, 
    // redirect "pega tudo"
    {
        path: '*',
        redirect: '/',
    }],
});

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global');
    next();
});

export default router;