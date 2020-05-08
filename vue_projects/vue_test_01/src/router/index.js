import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    {
        path:'/one',
        component:()=>import('@/components/One'),
    },
    {
        path:'/two',
        component:()=>import('@/components/Two'),
    }
]
const router = new VueRouter({
    routes
})
export default router;