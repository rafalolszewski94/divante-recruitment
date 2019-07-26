<template>
  <main class="w-full" :class="getMainClass()">
    <template v-if="$router.currentRoute.name !== 'Product'">
      <product-card
        v-for="(product, i) in products"
        :key="`Product(${i})`"
        :product="product"
      />
    </template>

    <router-view />
  </main>
</template>

<script>
import { PRODUCTS } from '../utils';
import ProductCard from './ProductCard';

export default {
  name: 'Home',
  components: { ProductCard },
  data() {
    return {
      products: PRODUCTS,
    };
  },
  methods: {
    getMainClass() {
      return {
        'product-detail': this.$router.currentRoute.name === 'Product',
        'product-list': this.$router.currentRoute.name !== 'Product',
        'w-4/5': this.$router.currentRoute.name !== 'Product',
      };
    },
    viewProduct(productId) {
      this.$router.push(`/product/${productId}`);
    },
  },
};
</script>
