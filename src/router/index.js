import Vue from 'vue'
import Router from 'vue-router'
import ImageFlexible from 'src/components/transition/ImageFlexible.vue'
import BoxChange from 'src/components/animation/BoxChange.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/transition/image-flexible'
    },
    {
      path: '/transition/image-flexible',
      name: 'ImageFlexible',
      component: ImageFlexible
    },
    {
      path: '/animation/box-change',
      name: 'BoxChange',
      component: BoxChange
    }
  ]
})
