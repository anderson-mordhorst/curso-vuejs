import Vue from 'vue';
import Vuex from 'vuex';
import carrinho from '@/store/modules/carrinho';
import parametros from '@/store/modules/parametros';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        carrinho,
        parametros,
    }
});