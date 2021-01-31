<template>

	<div class="dashboard">
		<div class="column" v-on:click="centerColumn($event)" data-index="0">
			<div class="container">
				<div class="row">
					
					<div class="col-12 mb-4" v-for="(project) in projects" :key="project.id" v-if="notSelected(project.id)">
						<project-preview-card 
							:project_id="project.id" 
							@project-selection="setProject"
						>
						</project-preview-card>
					</div>

				</div>
			</div>
		</div>

		<div class="column" v-on:click="centerColumn($event)" data-index="1">
			<div class="container">
				<div class="row">
					
					<div class="col-12 mb-4" v-if="projectIsSelected()">
						<project-page v-bind:project_id="selectedProject"></project-page>
					</div>

				</div>
			</div>
		</div>

		<div class="column" v-on:click="centerColumn($event)" data-index="2">
		</div>
	</div>

</template>

<script>
import ProjectPreviewCard from './ProjectPreviewCard'
import ProjectPage from './ProjectPage'

export default {
	name: 'Dashboard',
	data() {
		return {
			projects: [],
			selectedProject: false,
		}
	},
	methods: {
		getProjects() {
			this.projects = RootScope.content.projects
		},
		setProject(id) {
			this.selectedProject = id;
			this.centerColumnInit(1)
		},

		notSelected(id) {
			return this.selectedProject !== id;
		},
		projectIsSelected() {
			return this.selectedProject !== false;
		},

		centerColumn(e) {
			RootScope.functions.ColumnManager.center( e.target )
		},

		centerColumnInit(i) {
			RootScope.functions.ColumnManager.center( $('.column').get(i) )
		}
	},
	created() {
		this.getProjects()
	},
	mounted() {
		this.centerColumnInit(0)
	},
	components: {
		"project-preview-card": ProjectPreviewCard,
		"project-page": ProjectPage,
	}
}
</script>


<style>
	.dashboard {
		max-width: auto;
		max-height: calc(100vh - 30px);
		overflow-y: hidden;
		overflow-x: scroll;

		display: flex;
		scrollbar-width: none;  /* Firefox */
		-ms-overflow-style: none;  /* IE and Edge */
	}
	.dashboard::-webkit-scrollbar {
		display: none;
	}
	.column {
		width: 800px;
		max-height: 100%;
		flex-basis: 800px;
		flex-grow: 0;
		flex-shrink: 0;

		overflow-y: scroll;

		transition: transform 0.4s;
		scrollbar-width: none;  /* Firefox */
		-ms-overflow-style: none;  /* IE and Edge */
	}
	.column::-webkit-scrollbar {
		display: none;
	}
</style>