import { createApp } from "vue";
import * as VueRouter from 'vue-router';

import "./index.scss";

import App from "./App.vue";
import ProductList from "./components/ProductList.vue";

const routes = [
    {path: '/', component: ProductList}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

createApp(App).use(router).mount("#app");
