export default {
    state: {
        quantidade: 0,
        preco: 0,        
    },

    mutations: {
        setQuantidade(state, quantidade) {
            state.quantidade = quantidade;
        },

        setPreco(state, preco) {
            state.preco = preco;
        },
    },   
}