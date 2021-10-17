new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Teste");
        },
        keyDown(event) {
          this.valor = event.target.value;  
        },
    },
})