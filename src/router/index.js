import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ElemeMint from '@/components/ElemeMint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {default: Hello, ElemeMint: ElemeMint}
    }
  ]
})

