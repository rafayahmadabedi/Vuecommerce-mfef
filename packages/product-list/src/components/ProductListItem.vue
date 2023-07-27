<template>
    <router-link :to="`/product/${product.id}`" class="relative m-10 flex max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div class="relative items-center justify-center mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <img class="object-cover h-full" :src="product.image" :alt="product.title" />
        </div>
        <div class="mt-4 px-5 pb-5">
            <h5 class="text-xl tracking-tight text-slate-900">{{ product.title }}</h5>
            <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
                <span class="text-3xl font-bold text-slate-900" v-currency:RS="{amount: product.price}"></span>
            </p>
            </div>
        </div>
        <button class="flex items-center justify-center mb-10">
            View Details
        </button>
    </router-link>
</template>
 
<script>
export default {
    props: [
        'product'
    ]
}
</script>