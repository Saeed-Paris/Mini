import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import barname from '../views/barname.vue'
import dooz from '../views/dooz.vue'
import dooz2 from '@/views/dooz2.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/history.vue')
        },

    }
    ,
    {
        path:"/barname",
        name:"barname",
        component:barname
    },
    {
        path:"/dooz",
        name:"dooz",
        component:dooz
    }, {
        path:"/dooz2",
        name:"dooz2",
        component:dooz2
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router