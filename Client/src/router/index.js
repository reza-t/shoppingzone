import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Products from '@/components/Products'
import TestApi from '@/components/TestApi'
Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/items',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks
        },
        {
            path: '/storage',
            name: 'Storage',
            component: Storage
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
      {
        path: '/products',
        name: 'Products',
        component: Products
      },
<<<<<<< HEAD
      {
        path: '/testapi',
        name: 'TestApi',
        component: TestApi
      }
=======
>>>>>>> 663aafb64f09311a739c8fbe9b1e66bcf59b4447
    ]
});
