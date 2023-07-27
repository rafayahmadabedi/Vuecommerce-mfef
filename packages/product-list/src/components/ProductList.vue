<template>
    <main class="grid grid-cols-2 gap-x-6 gap-y-10 px-1 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        <ProductListItem v-for="product in products" :key="product.id" v-bind:product="product" />
   </main>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
import axios from "axios";
export default {
    components: {
        ProductListItem
    },
    created() {
        this.getProducts();
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        async getProducts() {
            await axios.get("https://fakestoreapi.com/products")
            .then( res => this.products = res.data );
        }
    }
}
</script>