import Vue from 'vue';
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import './scss/app.scss'
import router from './router/index.js'



import app from './App.vue';
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
})