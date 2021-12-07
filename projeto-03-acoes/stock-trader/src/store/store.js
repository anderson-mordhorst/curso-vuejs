import Vue from 'vue';
import Vuex from 'vuex';
import stocks from '@/store/modules/stocks.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
    },
});