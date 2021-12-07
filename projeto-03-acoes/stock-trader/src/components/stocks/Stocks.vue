<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import Stock from '@/components/stocks/Stock';

export default {
    components: { Stock },
    computed: {
        stocks: {
            get() {
                return this.$store.getters.stocks;
            }
        },
    }
}
</script>

<style>

</style>