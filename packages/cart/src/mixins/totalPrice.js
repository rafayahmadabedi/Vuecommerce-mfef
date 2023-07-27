import axios from "axios";

export default {
    methods: {
        getCartItems: async () => {
            const cart = await axios.get('https://fakestoreapi.com/carts/6');
            return cart.data.products;
        },
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((acc, curr) => {
                const price = this.products.filter(pr => pr.id === curr.productId)[0]?.price;
                return price ? acc + (price * curr.quantity) : acc;
            }, 0);
        }
    }
}