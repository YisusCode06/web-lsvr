import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../components/Home/Home.vue'
import Contact from '../components/contact/Contact.vue'
import Products from '../components/products/Products.vue'
import AboutMe from '../components/aboutme/AboutMe.vue'
import DetailsProduct from '../components/products/detailsproduct/DetailsProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/home',   //para redirigir al home
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'contact',
          component: Contact
        },
        {
          path: 'products',
          component: Products
        },
        {
          path: 'details-product/:_id',
          component: DetailsProduct,
          props: true,
        },
        {
          path: 'aboutme',
          component: AboutMe
        },
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
