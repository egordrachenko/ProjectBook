import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ProjectPage from '@/components/ProjectPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: Dashboard
    },
    {
    	path: '/project/:id',
    	component: ProjectPage
    },
  ],
  mode: 'history'
})
