import {createRouter, createWebHistory} from 'vue-router';
import {useUserStore} from './stores/user';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registro from './views/Registro.vue';


const requireAuth = async(to, from, next ) => {
    const store = useUserStore();
    store.loadingSesion = true;
    const user = await store.currentUser()
    if(user){
        next();
    }else{
        next('/login')
    }
    store.loadingSesion = false;
}

const routes = [
    {path: '/', component: Home, beforeEnter: requireAuth},
    {path: '/login', component: Login},
    {path: '/registro', component: Registro},
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;