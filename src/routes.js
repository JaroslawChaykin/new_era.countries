import Home from '@/pages/Home';
import Details from '@/pages/Details';
import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '@/pages/NotFound';

const routes = [
    { path: '/', component: Home },
    { path: '/details/:id', component: Details},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})