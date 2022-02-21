<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" id="category-id" v-model="category.id">
            <b-form-group label="Nome:" label-for="category-name">
                <b-form-input id="category-name" type="text" v-model="category.name" required :readonly="mode === 'remove'" placeholder="Informe o nome"/>
            </b-form-group>
            <b-form-group label="Categoria Pai:" label-for="category-parentId">
                <b-form-select id="category-parentId" v-if="mode === 'save'" :options="categories" v-model="category.parentId"/>
            </b-form-group>
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"/>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')" class="mr-2">
                    <i class="fa fa-trash"/>
                </b-button>                
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
    name: 'CategoryAdmin',
    data() {
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'path', label: 'Caminho', sortable: true },
                { key: 'actions', label: 'Ações' },
            ],
        };
    },
    methods: {
        loadCategories() {
            axios.get(`${baseApiUrl}/categories`).then(response => {
                this.categories = response.data.map(category => {
                    return {
                        ...category,
                        value: category.id,
                        text: category.path,
                    }
                });
            });
        },
        save() {
            const method = this.category.id ? 'put' : 'post';
            const urlId = this.category.id ? `/${this.category.id}` : '';
            axios[method](`${baseApiUrl}/categories${urlId}`, this.category).then(() => {
                this.$toasted.global.defaultSuccess();
                this.reset();
            }).catch(showError);
        },
        remove() {
            const id = this.category.id;
            axios.delete(`${baseApiUrl}/categories/${id}`).then(() => {
                this.$toasted.global.defaultSuccess();
                this.reset();                
            }).catch(showError);
        },
        reset() {
            this.mode = 'save';
            this.category = {};
            this.loadCategories();
        },
        loadCategory(category, mode = 'save') {
            this.mode = mode;
            this.category = { 
                id: category.id,
                name: category.name,
                parentId: category.parentId,
             };
        }
    },
    mounted() {
        this.loadCategories();
    } 
}
</script>

<style>

</style>