// Apoyo por la IA - Claude

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutMe.vue'
import GalleryView from '../views/Gallery.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',        component: HomeView    },
    { path: '/about',   component: AboutView   },
    { path: '/gallery', component: GalleryView },
    { path: '/contact', component: ContactView },
  ],
})

export default router