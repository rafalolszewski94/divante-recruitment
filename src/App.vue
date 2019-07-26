<template>
  <div id="app">
    <c-header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    'c-header': Header,
  },
};
</script>
