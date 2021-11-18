<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
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
				<strong>ID: {{ id }}</strong>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

const USUARIOS_ENDPOINT = 'usuarios.json';
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: null,
				email: null,
			}
		};
	},

	created(){
		//this.createUsuario();
	},

	methods: {
		createUsuario() {
			this.$http.post(USUARIOS_ENDPOINT, {
				nome: 'Anderson Mordhorst',
				email: 'anderson.mordhorst@gmail.com'
			}).then(response => console.log(response.data.name));
		},
		salvar() {
			this.$http.post(USUARIOS_ENDPOINT, this.usuario).then(() => {
				// deveria tratar o response.code
				this.clear();
			})
		},

		obterUsuarios() {
			this.$http.get(USUARIOS_ENDPOINT).then(response => {
				this.usuarios = response.data;
			});
		},

		clear() {
			this.usuario.nome = null;
			this.usuario.email = null;
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
