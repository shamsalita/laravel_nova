const routes = [
    {
        path: '/',
        name: 'Frames',
        component: () => import(/* webpackChunkName: "Frames" */ '../views/Frames.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
    }
]

export default routes
