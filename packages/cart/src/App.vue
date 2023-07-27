<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: cart</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
  <Cart />
</template>

<script>
import Cart from './components/Cart.vue';
export default {
  components: {
    Cart
  }
}
</script>