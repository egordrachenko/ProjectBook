<template>

<div class="card text-left">
	<!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
	
	<div class="card-body">
		<div class="card-preview">
			<h2 class="card-title">{{ project.name }}</h2>
			<p class="text-muted"><em>{{ project.git }}</em></p>
			<p class="card-text">{{ project.text }}</p>

			<p class="card-text">{{ project.completeDescription }}</p>
		</div>

		<div class="card-content">
		</div>
	</div>

</div>

</template>


<script>
export default {
	name: 'ProjectPage',
	props: ['project_id'],
	data() {
		return {
			project: {}
		}
	},
	methods: {
		getProject() {
			this.project = RootScope.content.projects[this.project_id]
		}
	},
	created() {
		this.getProject()
		this.$watch('project_id', this.getProject.bind(this))
	}
}
</script>