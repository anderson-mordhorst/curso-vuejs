<template>
    <div>
        <rotulo nome="Nome">
            <input type="text" ref="nome" :value="value.nome" @input="emitChange()">
        </rotulo>
        <rotulo nome="Sobrenome">
            <input type="text" ref="sobrenome" :value="value.sobrenome" @input="emitChange()">
        </rotulo>        
    </div>
</template>

<script>
import rotulo from '@/components/Rotulo.vue';

export default {
    props: {
        value: {
            type: Object,
            required: true,
        }
    },
    components: { rotulo },
    methods: {
        emitChange(){
            const event = {
                nome: this.$refs.nome.value,
                sobrenome: this.$refs.sobrenome.value
            };
            this.$emit('input', event);
        }
    }

}
</script>

<style>

</style>