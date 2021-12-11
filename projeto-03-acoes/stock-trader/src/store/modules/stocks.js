import stocks from '@/data/stocks.js';

export default {
    state: {
        stocks: [],
    },
    
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks;
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42));
            });
        },
    },

    actions: {
        buyStock(context, order) {
            context.commit('buyStock', order);
        },
        
        initStocks(context) {
            context.commit('setStocks', stocks);
        },
        randomizeStocks(context) {
            context.commit('randomizeStocks');
        },
    },

    getters: {
        stocks(state) {
            return state.stocks;
        },
    },
}