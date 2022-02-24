<template>
    <div class="article-by-id">
        <page-title icon="fa fa-file-o" :main="article.name" :sub="article.description"/>
        <div class="article-content" v-html="article.content"/>
    </div>
</template>

<script>
import 'highlightjs/styles/dracula.css';
import hljs from 'highlightjs/highlight.pack.js';
import { baseApiUrl } from '@/global';
import axios from 'axios';
import PageTitle from '@/components/template/PageTitle.vue';

export default {
    name: 'ArticleById',
    components: { PageTitle },
    data() {
        return {
            article: {},
        };
    },
    mounted() {
        axios.get(`${baseApiUrl}/articles/${this.$route.params.id}`).then(response => this.article = response.data);
    },
    updated() {
        document.querySelectorAll('.article-content pre.ql-syntax').forEach(e => {
            hljs.highlightBlock(e)
        })
    },
}
</script>

<style>
    .article-content {
        background-color: #FFF;
        border-radius: 8px;
        padding: 25px;   
    }

    .article-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
    }

    .article-content img {
        max-width: 100%;
    }

    .article-content :last-child {
        margin-bottom: 0px;
    }    
</style>