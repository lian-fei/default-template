
import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '@/welcome'

Vue.use(VueRouter)

var router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'welcome', component: welcome },
		{ path: '*', redirect: '/' }
	]
})
export default router
