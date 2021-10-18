import Vue from 'vue';

const USUARIO_SELECIONADO_EVENT = 'usuarioSelecionado';
export default new Vue({

    methods: {
        setUsuatioSelecionado(usuario){
            this.$emit(USUARIO_SELECIONADO_EVENT, usuario);
        },

        onUsuarioSelecionado(callback){
            this.$on(USUARIO_SELECIONADO_EVENT, callback);
        }
    }
});