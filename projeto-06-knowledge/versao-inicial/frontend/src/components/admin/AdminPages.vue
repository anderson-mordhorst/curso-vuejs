<template>
    <div class="admin-pages">
        <page-title icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia"/>
        <div class="admin-pages-tabs">
            <b-card no-nody>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <article-admin/>
                    </b-tab>
                    <b-tab title="Categorias">
                        <category-admin/>
                    </b-tab>
                    <b-tab title="Usuários">
                        <user-admin/>
                    </b-tab>                          
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle.vue';
import ArticleAdmin from '@/components/admin/ArticleAdmin.vue';
import CategoryAdmin from '@/components/admin/CategoryAdmin.vue';
import UserAdmin from '@/components/admin/UserAdmin.vue';

export default {
    name: 'AdminPages',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin },
}
</script>

<style>

</style>