import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import record from '@/components/record.vue' 
import success from '@/components/success.vue'
Vue.use(Router)

export default new Router({
	mode: 'hash', 
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/record',
			name: 'record',
			component: record
		}, 
		{
			path:'/success',
			name:"success",
			component:success
		}
	]
})
