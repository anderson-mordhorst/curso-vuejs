import Vue from 'vue';
import Vuex from 'vuex';
import stocks from '@/store/modules/stocks.js';
import portfolio from '@/store/modules/portfolio.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio,
    },
});