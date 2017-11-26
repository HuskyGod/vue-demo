import component from './component/HelloWorld.vue'
import A from './1.vue'
import B from './2'
import C from './3'

export default {
  path: '/project',
  name: 'project',
  redirect: '/project/1',
  component: component,
  children: [
    {
      path: '/project/1',
      name: '1',
      component: A
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
