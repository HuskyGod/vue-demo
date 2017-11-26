import component from './component/HelloWorld.vue'

import B from './2'
import C from './3'

export default {
  path: '/project',
  name: 'project',
  redirect: '/project/staffinfo',
  component: component,
  children: [
    {
      path: '/project/staffinfo',
      name: '1',
      component: resolve => require(['./staffinfo.vue'],resolve)
    },
    {
      path: '/project/2',
      name: '2',
      component: B
    },
    {
      path: '/project/3',
      name: '3',
      component: C
    }
  ]
}
