import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Local from '../views/Local.vue'
import Cardapio from '../views/Cardapio.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Product from '../views/Product.vue'
import Admin from '../views/Admin.vue'
import Categories from '../views/Categories.vue'
import EditCategory from '../views/EditCategory.vue'
import EditProduct from '../views/EditProduct.vue'
import CreateCategory from '../views/CreateCategory.vue'
import CreateProduct from '../views/CreateProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/local',
    name: 'Local',
    component: Local
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Cardapio
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Product
  },
  {
    path: '/products/new',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/products/:id/edit',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:id/edit',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/categories/new',
    name: 'CreateCategory',
    component: CreateCategory
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
