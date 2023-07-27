<template>
    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0" v-if="item">
        <div class="shrink-0">
            <img class="h-24 w-24 max-w-full rounded-lg object-cover" :src="item?.image" :alt="item?.title" />
        </div>
        <div class="relative flex flex-1 flex-col justify-between">
            <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                <div class="pr-8 sm:pr-5">
                    <p class="text-base font-semibold text-gray-900">{{ item?.title }}</p>
                    <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">{{ item?.price }}</p>
                </div>

                <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                    <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{{ item?.quantity * item?.price }}</p>

                    <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                            <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{{ item?.quantity }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-red-500" @click="$emit('removeFromCart', item?.id)">
                    Remove From Cart
                </button>
            </div>
        </div>
    </li>
    <li v-else>
        <h5>Error loading item</h5>
    </li>
</template>

<script>
export default {
    props: {
        cartObj: {
            type: Object,
            required: true
        },
        productList: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            item: {}
        }
    },
    created() {
        this.item = this.setItem(this.cartObj, this.productList);
    },
    methods: {
        setItem: (cartObj, productList) => {
            const obj = productList.find( pr => pr.id === cartObj.productId );
            if (obj) {
                return {
                    ...obj,
                    quantity: cartObj.quantity
                }
            }
        }
    }
}
</script>