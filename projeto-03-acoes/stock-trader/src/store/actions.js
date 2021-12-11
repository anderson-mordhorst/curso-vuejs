import Vue from 'vue';

export default {
    loadData(context) {
        Vue.prototype.$http('data.json').then(response => {
            const data = response.data;
            if (data) {
                context.commit('setStocks', data.stocks);
                context.commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio,
                })
            }
        });           
    },
};