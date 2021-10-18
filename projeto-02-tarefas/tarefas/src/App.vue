<template>
	<div id="app">
		<h1>Tarefas</h1>
		<task-progress :progress="progress"/>
		<new-task @taskAdded="addTask"/>
		<task-grid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"/>
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {
	components: { TaskGrid, NewTask, TaskProgress },

	data() {
		return {
			tasks: [],
		};
	},

	methods: {
		addTask(task) {
			if(task && task.name && !this.tasks.some(currentTask => currentTask.name === task.name)){
				this.tasks.push({
					name: task.name,
					pending: true,
				});
			}
		},
		deleteTask(index) {
			if (index > -1) {
				this.tasks.splice(index, 1);
			}			
		},

		toggleTaskState(index) {
			if(index > -1) {
				const task = this.tasks[index];
				task.pending = !task.pending;
			}			
		}
	},

	computed: {
		progress(){
			const total = this.tasks.length;
			const done = this.tasks.filter(task => !task.pending).length;
			return Math.round(done / total * 100) || 0;
		}
	},

	watch: {
		tasks: {
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	},

	created(){
		const json = localStorage.getItem('tasks');
		this.tasks = JSON.parse(json) || [];
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
