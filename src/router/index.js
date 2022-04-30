import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    meta: {
      title: '武器红字'
    },
    path: '/',
    name: 'weapon-tables',
    component: () => import(/* webpackChunkName: "tables" */ '../views/WeaponTables.vue')
  },
  {
    meta: {
      title: '手雷红字'
    },
    path: '/grenade-tables',
    name: 'grenade-tables',
    component: () => import(/* webpackChunkName: "forms" */ '../views/GrenadeTables.vue')
  },
  {
    meta: {
      title: '护盾红字'
    },
    path: '/shield-tables',
    name: 'shield-tables',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ShieldTables.vue')
  },
  {
    meta: {
      title: '神器红字'
    },
    path: '/artifact-tables',
    name: 'artifact-tables',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ArtifactTables.vue')
  },
  {
    meta: {
      title: 'About'
    },
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "client-form" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
