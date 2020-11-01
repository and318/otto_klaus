import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    meta: {
      autenticado:true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/editar/',
    name: 'Editar',
    meta: {
      autenticado:true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/editar/:id',
    name: 'EditarToy',
    meta: {
      autenticado:true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarToy.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    meta: {
      autenticado:true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      autenticado: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  console.log(to, 'en route')
  let private_rute = to.matched.some((record)=>record.meta.autenticado)
  if(private_rute && !user){
    next({name: 'Home'})
  }
  else if(!private_rute && user){
    next('')
  }
  else next()
});
export default router
