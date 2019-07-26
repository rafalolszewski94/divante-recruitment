<template>
  <main class="w-full" :class="getMainClass()">
    <template v-if="$router.currentRoute.name !== 'Product'">
      <div
        class="col w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
        v-for="(product, i) in products"
        :key="`Product(${i})`"
      >
        <router-link
          tag="article"
          :to="{ name: 'Product', params: { id: product.id } }"
        >
          <img :src="product.img" alt="" />
          <div>
            <h2>{{ product.title }}</h2>
            <span>{{ product.desc }}</span>
          </div>
        </router-link>
      </div>
    </template>

    <router-view />
  </main>
</template>

<script>
import { PRODUCTS } from '../utils';

export default {
  name: 'Home',
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

<style scoped lang="scss"></style>
