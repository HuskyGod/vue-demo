import Vue from 'vue'
import Router from 'vue-router'
import component from '../components/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'project',
      redirect: '/login',
      component: component,
      children: [
          require('../components/project/route').default,
          require('../components/login/route').default
      ]
    }
  ]
})
