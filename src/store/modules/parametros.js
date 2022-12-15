export default {
    // Quer dizer estado compartilhado
    state: {
        quantidade: 2,
        preco: 19.99
    },


    // Funções que são responsáveis por alterar o estado global -
    // - da aplicação controlada pelo VueX
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },

}