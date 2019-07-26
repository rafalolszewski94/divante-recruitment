<template>
  <div class="container mb-10">
    <div class="row">
      <main>
        <div
          class="img-container"
          :style="{ backgroundImage: `url(${product.img})` }"
        ></div>
        <footer>
          <div class="details">
            <h1>{{ product.title }}</h1>
            <p>{{ product.desc }}</p>
          </div>
          <button
            @click="addProductToCart(product.id)"
            :disabled="productIsInCart"
            :class="{ disabled: productIsInCart }"
          >
            <template v-if="productIsInCart">
              Added
            </template>
            <template v-if="!productIsInCart">
              Add to Cart
            </template>
          </button>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import { getProductById } from '../utils';

export default {
  name: 'Product',
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.product = getProductById(this.$route.params.id);
  },
  computed: {
    productsInCart() {
      return this.$store.getters['cart/productsInCart'];
    },
    productIsInCart() {
      return this.productsInCart.find(
        product => product.id === this.product.id,
      );
    },
  },
  methods: {
    addProductToCart(productId) {
      this.$store.dispatch('cart/addProductToCart', productId);
    },
  },
};
</script>

<style scoped lang="scss">
main {
  max-width: 100%;

  @apply bg-white w-full mx-auto;
}

.img-container {
  height: 470px;

  @apply w-full bg-cover bg-no-repeat bg-center;
}

footer {
  padding: 40px 50px;

  @apply flex items-center bg-primary text-white;
}

.details {
  @apply w-3/5;

  h1 {
    @apply text-2xl font-medium;
  }

  p {
    @apply opacity-75 mt-4;
  }
}

button {
  background-color: #49da7f;

  @apply text-white px-24 py-4 font-medium ml-auto;

  &.disabled {
    @apply opacity-75 cursor-not-allowed;
  }
}
</style>
