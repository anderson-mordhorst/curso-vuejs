import Vue from 'vue';
import Vuex from 'vuex';
import stocks from '@/store/modules/stocks.js';
import portfolio from '@/store/modules/portfolio.js';
import actions from '@/store/actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio,
    },
});