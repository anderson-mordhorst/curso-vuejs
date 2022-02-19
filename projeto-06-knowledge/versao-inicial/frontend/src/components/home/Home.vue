<template>
    <div class="home">
        <page-title icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento"/>
        <div class="stats">
            <stat title="Categoria" :value="stat.categories" icon="fa fa-folder" color="#d54d50"/>
            <stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480"/>
            <stat title="Usuários" :value="stat.users" icon="fa fa-user" color="#3282cd"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle.vue';
import Stat from '@/components/home/Stat.vue';
import axios from 'axios';
import { baseApiUrl } from '@/global';

export default {
    name: 'Home',
    components: { PageTitle, Stat },
    data() {
        return {
            stat: {},
        };
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(response => {
                this.stat = response.data;
            });
        }
    },
    mounted(){
        this.getStats();
    },
}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>