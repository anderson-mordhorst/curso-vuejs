<template>
    <div class="articles-by-category">
        <page-title icon="fa fa-folder-o" :main="category.name" sub="Categoria"/>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <article-item :article="article"/>
            </li>
        </ul>
        <div class="load-more">
            <button v-if="loadMore" class="btn btn-lg btn-outline-primary" @click="loadArticles">Carregar mais artigos</button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global';
import axios from 'axios';
import PageTitle from '@/components/template/PageTitle.vue';
import ArticleItem from '@/components/article/ArticleItem.vue';

export default {
    name: 'ArticlesByCategory',
    components: { PageTitle, ArticleItem },
    data(){
        return {
            category: {},
            articles: [],
            page: 1,
            loadMore: true,
        };
    },
    methods: {
        loadCategory() {
            axios.get(`${baseApiUrl}/categories/${this.category.id}`).then(response => this.category = response.data);
        },
        loadArticles() {
            axios.get(`${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`)
                .then(response => {
                    this.articles = this.articles.concat(response.data);
                    this.page++;
                    if (response.data.length === 0) {
                        this.loadMore = false;
                    }
                });
        }
    },
    mounted(){
        const id = parseInt(this.$route.params.id);
        if (id) {
            this.category.id = id;
            this.loadCategory();
            this.loadArticles();
        }
    },
    watch: {
        $route(to) {
            this.category.id = to.params.id;
            this.articles = [];
            this.page = 1;
            this.loadMore = true;

            this.loadCategory();
            this.loadArticles();            
        }
    }
}
</script>

<style>
    .articles-by-category ul {
        list-style-type: none;
        padding: 0px;
    }

    .articles-by-category .load-more {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>