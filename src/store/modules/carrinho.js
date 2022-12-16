export default {
    // namespaced: true,


    // Quer dizer estado compartilhado
    state: {
        produtos: [],

    },

    // Funções que leem o estado e fazem algum tipo de processamento
    getters: {
        valorTotal(state) {
            return state.produtos
                .map((p) => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },

    // Funções que são responsáveis por alterar o estado global -
    // - da aplicação controlada pelo VueX
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        },

    },

    actions: {
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}