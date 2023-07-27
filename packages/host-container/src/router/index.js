import * as VueRouter from "vue-router";

import NotFound from "../components/NotFound";
import ProductList from "product_list_mfe/ProductList";
import Cart from "cart_mfe/Cart";

const routes = [
    {
      path: '/products',
      component: ProductList
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/product/:id',
    //   component: ProductDetail
      component: () => import('product_detail_mfe/ProductDetail')
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router;