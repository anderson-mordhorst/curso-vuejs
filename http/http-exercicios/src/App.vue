<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Infome o nome"/>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Infome o email"/>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: {{ usuario.nome }}</strong><br>
				<strong>Email: {{ usuario.email }}</strong><br>
				<strong>ID: {{ id }}</strong><br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

const USUARIOS_ENDPOINT = 'usuarios.json';
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: null,
				email: null,
			}
		};
	},

	created(){
		this.obterUsuarios();
	},

	methods: {
		salvar() {
			const method = this.id ? 'patch' : 'post';
			const endUrl = this.id ? `${this.id}.json` : '.json';
			this.$http[method](`/usuarios/${endUrl}`, this.usuario).then(() => {
				this.clear();
				this.addMensagem('Operação realizada com sucesso!', 'success');
				this.obterUsuarios();				
			});
		},

		obterUsuarios() {
			this.$http.get(USUARIOS_ENDPOINT).then(response => {
				this.usuarios = response.data;
			});
		},

		clear() {
			this.usuario.nome = null;
			this.usuario.email = null;
			this.id = null;
			this.mensagens = [];
		},

		carregar(id){
			this.id = id;
			this.usuario = { ...this.usuarios[id] };
		},

		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`).then(() => {
				this.clear();
				this.obterUsuarios();
			})
			.catch(() => {
				this.addMensagem('Problema ao excluir!', 'danger');
			});
		},

		addMensagem(texto, tipo){
			this.mensagens.push({
				texto: texto,
				tipo: tipo,
			}); 
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
