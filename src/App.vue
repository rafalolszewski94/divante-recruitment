<template>
  <div id="app">
    <c-header />
    <div class="container">
      <div class="row flex-col md:flex-row">
        <c-aside
          v-if="
            this.$router.currentRoute.name === 'Home' ||
              this.$router.currentRoute.name === 'Product'
          "
        />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Aside from '@/components/Aside';

export default {
  name: 'App',
  components: {
    'c-header': Header,
    'c-aside': Aside,
  },
};
</script>
