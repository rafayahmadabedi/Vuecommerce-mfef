<template>
    <div class="flex items-center justify-center">
        <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>
    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
        <div class="bg-white shadow">
            <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root" v-if="cartItems.length && products.length">
                    <ul class="-my-8">
                        <CartItem 
                            v-for="cartObj of cartItems" 
                            :key="cartObj.productId" 
                            :product-list="products" 
                            :cart-obj="cartObj"
                            @removeFromCart="removeFromCart"
                        />
                    </ul>

                    <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Total</p>
                        <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> {{ totalPrice }}</p>
                    </div>

                    <div class="mt-6 text-center">
                        <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="flow-root" v-else>
                    <h3>
                        Your cart is empty, add items now!
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CartItem from "./CartItem.vue";
import totalPrice from "../mixins/totalPrice";
export default {
    components: {
        CartItem
    },
    mixins: [totalPrice],
    data() {
        return {
            cartItems: [],
            products: []
        }
    },
    async created() {
        this.cartItems = await this.getCartItems();
        this.getProducts();
    },
    methods: {
        async getProducts() {
            await axios.get("https://fakestoreapi.com/products")
            .then( res => this.products = res.data );
        },
        removeFromCart(id) {
            this.cartItems = this.cartItems.filter( it => it.productId !== id );
        }
    },
}
</script>