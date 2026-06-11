import contact from "./components/contact.vue";
import aboutme from "./components/aboutme.vue";
import gallery from "./components/gallery.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'contact',
        path: '/',
        component: contact
    },
    {
        name: 'aboutme',
        path: '/create-contact',
        component: aboutme
    },
    {
        name: 'gallery',
        path: '/contact/:id?',
        component: gallery
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;