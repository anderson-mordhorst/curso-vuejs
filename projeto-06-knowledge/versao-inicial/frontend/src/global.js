import Vue from 'vue';
export const baseApiUrl = 'http://localhost:3000';
export const userKey = '__knowledge_user';

// mensagem genérica do catch do axios
export function showError(error) {
    if(error && error.response && error.response.data) {
        Vue.toasted.global.defaultError({ msg: error.response.data });
    }
    else if(typeof error === 'string') {
        Vue.toasted.global.defaultError({ msg: error });
    }
    else {
        Vue.toasted.global.defaultError(); 
    }
}

export default { baseApiUrl, showError, userKey };