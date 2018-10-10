import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
//@ts-ignore
import Profile from './views/Profile.vue'
import Keeps from './views/Keeps.vue'
import Vaults from './views/Vaults.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/profile/keeps',
            name: 'keeps',
            component: Keeps
        },
        {
            path: '/profile/vaults',
            name: 'vaults',
            component: Vaults
        }
    ]
})
