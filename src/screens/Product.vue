<template>
  <div class="col">
    <div
      class="img-container"
      :style="{ backgroundImage: `url(${product.img})` }"
    ></div>
    <footer class="flex flex-col xl:flex-row items-start xl:items-center">
      <div class="details w-full xl:w-3/5">
        <h1>{{ product.title }}</h1>
        <p>{{ product.desc }}</p>
      </div>
      <button
        class="block w-full mt-6 xl:w-64"
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
      this.$store.dispatch('cart/addProductToCart', productId).then(() => {
        this.$notification.show({
          content: 'Product has been added to your cart!',
        });
        this.$router.push('/');
      });
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

  @apply bg-primary text-white;
}

.details {
  h1 {
    @apply text-2xl font-medium;
  }

  p {
    @apply opacity-75 mt-4;
  }
}

button {
  background-color: #49da7f;

  @apply text-white py-4 font-medium ml-auto;

  &.disabled {
    @apply opacity-75 cursor-not-allowed;
  }
}
</style>
