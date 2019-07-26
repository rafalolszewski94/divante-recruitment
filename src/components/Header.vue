<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">LOGO</router-link>

      <div class="ml-6 flex">
        <ul class="links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>

        <div class="search">
          <button>
            <img :src="SVG_SEARCH" alt="" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import searchIcon from '@/assets/lnr-magnifier.svg';

export default {
  name: 'Header',
  computed: {
    SVG_SEARCH() {
      return searchIcon;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 100px;
  margin-bottom: 70px;
  border-color: #d6d6d6;

  @apply border-b;

  .container {
    @apply flex items-center w-full h-full;
  }
}

.logo {
  @apply mr-auto;
}

.links {
  @apply flex items-center;

  a {
    color: #424242;
    height: 99px;

    @apply flex-grow px-8 inline-flex items-center font-bold;

    &:hover {
      background-color: #f5f5f5;
    }
  }
}

.search {
  height: 99px;
  width: 100px;
  background-color: #f5f5f5;

  @apply inline-flex flex-grow items-center justify-center;

  button {
    @apply inline-flex h-full flex-grow items-center justify-center;
  }
}
</style>
