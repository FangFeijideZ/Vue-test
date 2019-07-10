import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../components/layout/HomeContainer.vue';
import member from '../components/layout/MemberContainer.vue';
import search from '../components/layout/SearchContainer.vue';
import shopcar from '../components/layout/ShopcarContainer.vue';


var router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/search', component: search },
        { path: '/shopcar', component: shopcar },
    ]
});
export default router;