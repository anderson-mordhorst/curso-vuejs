import stocks from '@/data/stocks.js';

export default {
    state: {
        stocks: [],
    },
    
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks;
        },
    },

    actions: {
        buyStock(context, order) {
            context.commit(order);
        },
        
        initStocks(context) {
            context.commit('setStocks', stocks);
        },
    },

    getters: {
        stocks(state) {
            return state.stocks;
        },
    },
}