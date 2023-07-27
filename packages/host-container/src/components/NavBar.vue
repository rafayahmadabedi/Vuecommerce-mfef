<template>
    <div class="text-3xl p-5 flex">
        <div class="font-bold flex-grow">
            vuE-SHOP
        </div>
        <div class="flex gap-3">
            <router-link to="/products" id="products-link">
                <h1>PRODUCTS</h1>
            </router-link>
            <div>|</div>
            <router-link to="/cart" id="cart-link">
                <button>CART</button>
            </router-link>
        </div>
    </div>
</template>