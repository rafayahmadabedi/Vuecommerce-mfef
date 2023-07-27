import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./index.scss";

import App from "./App.vue";
import ProductDetail from "./components/ProductDetail"
import currency from "./directives/currency";

const routes = [
    { path: "/product/:id", component: ProductDetail}
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
const app = createApp(App);
app.directive('currency', currency);

app.use(router).mount("#app");
