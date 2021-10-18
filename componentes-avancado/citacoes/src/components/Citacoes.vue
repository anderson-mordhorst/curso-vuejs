<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <citacao>
            <h6 class="warning">Tanto no pai do slot quanto no filho é possivel aplicar estilos, respeitando pai -> filho</h6>
            <h1  slot="autor">{{ citacoes[indice].autor }}</h1>
            <p slot="texto">{{ citacoes[indice].texto }}</p>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
        </citacao>
        <div>
            <button @click="dynamicComponent = 'FirstDynamicComponent'">First</button>
            <button @click="dynamicComponent = 'SecondDynamicComponent'">Second</button>
            <keep-alive>
                <component :is="dynamicComponent"/>
            </keep-alive>            
        </div>
    </div>
</template>

<script>
import Citacao from '@/components/Citacao.vue';
import FirstDynamicComponent from '@/components/FirstDynamicComponent.vue'
import SecondDynamicComponent from '@/components/SecondDynamicComponent.vue'

export default {
  components: { Citacao, FirstDynamicComponent, SecondDynamicComponent },

    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }],
            dynamicComponent: 'FirstDynamicComponent',
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: green;
    }

    .warning {
        color: red;
    }
</style>
