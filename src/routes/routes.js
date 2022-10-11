import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home';
import Details from '@/pages/Details';
import NotFound from '@/pages/NotFound';

const routes = [
    { path: '/', component: Home },
    { path: '/details/:name', component: Details},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})