<template>
  <aside class="sidebar mr-12">
    <section>
      <h3><img src="../assets/book-alt.svg" alt="book icon" /> Contact</h3>
      <p class="text-sm opacity-75">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam
        hic id molestias.
      </p>
    </section>

    <section>
      <h3>
        <img src="../assets/cart.svg" alt="cart icon" /> Cart
        <span v-if="productsInCart.length">
          &nbsp;({{ productsInCart.length }})
        </span>
      </h3>
      <small class="block -mt-5 mb-3 opacity-75" v-if="productsInCart.length">
        Total value: ${{ totalCartValue }}
      </small>

      <div class="cart" :class="{ flex: !productsInCart.length }">
        <ul class="products-in-cart" v-if="productsInCart.length">
          <li
            v-for="(product, i) in productsInCart"
            :key="`ProductInCart${i}`"
            :title="product.title"
          >
            <span
              class="remove"
              title="Remove product from cart"
              @click="removeProductFromCart(product.id)"
            >
              <img src="../assets/multiply-white.svg" alt="multiply icon" />
            </span>
            <span class="price">{{ product.price }}</span> {{ product.title }}
          </li>
        </ul>
        <span v-else>Cart is empty</span>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  computed: {
    productsInCart() {
      return this.$store.getters['cart/productsInCart'];
    },
    totalCartValue() {
      return this.$store.getters['cart/totalCartValue'];
    },
  },
  methods: {
    removeProductFromCart(productId) {
      this.$store.dispatch('cart/removeProductFromCart', productId);
    },
  },
};
</script>

<style scoped lang="scss">
.cart {
  height: 130px;

  @apply border border-white border-dashed items-center justify-center overflow-y-auto w-full max-w-full;
}

h3 {
  @apply text-lg font-medium mb-6 flex items-center;

  img {
    height: 24px;

    @apply inline-block mr-2;
  }
}

.products-in-cart {
  @apply truncate p-2;

  li {
    background-color: #004db2;

    @apply py-2 px-3 truncate max-w-full relative;

    &:not(:last-child) {
      @apply mb-1;
    }

    &:hover {
      .remove {
        @apply opacity-100;
      }
    }

    .remove {
      @apply opacity-0 cursor-pointer;

      img {
        height: 14px;
        width: 14px;

        @apply absolute top-0 right-0 opacity-50;
      }
    }

    .price {
      width: 53px;
      @apply text-green-300 font-bold text-sm inline-block;
    }
  }
}
</style>
