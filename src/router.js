import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/main',  name:'Resume', component: () =>import('./components/Resume')},
        
    ]
});

export default router;