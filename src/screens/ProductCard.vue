<template>
  <div class="col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <router-link
      tag="article"
      :to="{ name: 'Product', params: { id: product.id } }"
    >
      <img src="" alt="" v-if="!imgLoaded" />
      <transition name="fade">
        <img :src="url" alt="" v-show="imgLoaded" @load="onImgLoad" />
      </transition>
      <div>
        <h2>{{ product.title }}</h2>
        <span>{{ product.desc }}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      required: true,
    },
  },
  data() {
    return {
      imgLoaded: false,
      url: '',
    };
  },
  created() {
    this.loadImg();
  },
  methods: {
    loadImg() {
      this.imgLoaded = false;
      this.$nextTick(() => {
        this.url = this.product.img;
      });
    },
    onImgLoad() {
      this.imgLoaded = true;
    },
  },
};
</script>
