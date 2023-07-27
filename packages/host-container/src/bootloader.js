import { createApp } from "vue";
import router from "./router";

import "./index.scss";

import App from "./App.vue";
import currency from "product_detail_mfe/currency";

const app = createApp(App);
app.directive('currency', currency);

app.use(router).mount("#app");
