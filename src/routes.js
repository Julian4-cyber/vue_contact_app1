// Apoyo de la IA de Google - Gemini: https://gemini.google.com/share/35454c1d2588

import aboutme from "./components/aboutme.vue";
import gallery from "./components/gallery.vue";
import contact from "./components/contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'aboutme',
        path: '/about',
        component: aboutme
    },
    {
        name: 'gallery',
        path: '/gallery',
        component: gallery
    },
    {
        name: 'contact',
        path: '/contact',
        component: contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;