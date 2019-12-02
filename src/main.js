import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@babel/polyfill';
import Es6Promise from 'es6-promise'
import VueAwesomeSwiper from 'vue-awesome-swiper'  
import axios from 'axios';
// import Vconsole from 'vconsole'
Es6Promise.polyfill()
Vue.config.productionTip = false; 
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
Vue.use(VueAwesomeSwiper)

// let vConsole = new Vconsole();
// export default vConsole
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next()
})
