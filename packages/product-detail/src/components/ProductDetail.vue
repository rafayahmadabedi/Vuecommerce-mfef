<template>
    <div class="py-12 sm:py-16" v-if="product.id">
        <div class="container mx-auto px-4">
            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div class="lg:col-span-3 lg:row-end-1">
                    <div class="lg:flex lg:items-start">
                        <div class="lg:order-2 lg:ml-5">
                            <div class="max-w-xl overflow-hidden rounded-lg">
                                <img class="h-fit w-full max-w-full object-cover" :src="product?.image" :alt="product?.title" />
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{{ product?.title }}</h1>
    
                    <h2 class="mt-8 text-base text-gray-900">
                        <span class="font-bold">
                            Rating:
                        </span> 
                        {{ product?.rating.rate }}/5
                    </h2>
    
                    <h2 class="mt-8 text-base text-gray-900">
                        <span class="font-bold">
                            Category:
                        </span> 
                        {{ product?.category }}
                    </h2>
    
    
                <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                    <div class="flex items-end">
                        <h1 class="text-3xl font-bold" 
                            v-currency:USD="{amount: product.price, currency: currencyUSD}"
                        ></h1>
                    </div>
                    
                    <input
                        type="checkbox"
                        id="currencyCheck"
                        v-model="currencyUSD"
                        />
                    <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                        for="currencyCheck"
                    >
                        USD
                    </label>

                    <button type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
    
                <ul class="mt-8 space-y-2">
                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
                    </svg>
                    Free shipping worldwide
                </li>
    
                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
                    </svg>
                    Cancel Anytime
                </li>
                </ul>
                </div>
            </div>

            <div class="lg:col-span-3">
                <div class="border-b border-gray-300">
                    <nav class="flex gap-4">
                        <p class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </p>
                    </nav>
                </div>

                <div class="mt-8 flow-root sm:mt-12">
                    <p class="mt-4">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- <NotFound v-else /> -->
    <div v-else>
        <h1>Product Not Found</h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    created() {
        this.getProductDetails(this.$route.params.id);
        this.consoleTimer = setInterval(() => {
            console.log('You are at Product detail Page!!!');
        }, 10 * 1000);
    },
    unmounted() {
        clearInterval(this.consoleTimer);
    },
    data() {
        return {
            product: {},
            currencyUSD: true,
            consoleTimer: null
        }
    },
    methods: {
        async getProductDetails(productId) {
            await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => this.product = res.data);
        },
        addToCart() {
            
        }
    }
}
</script>