<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo">LOGO</router-link>

      <div
        :class="{
          hidden: !showMenu,
          'sm:flex': !showMenu,
          'mobile-menu': showMenu,
        }"
      >
        <ul class="links" @click="toggleMenu">
          <li class="flex sm:hidden">
            <a href="#">
              <img src="../assets/multiply.svg" class="w-6 h-6" alt="" />
            </a>
          </li>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>

        <div class="search">
          <button>
            <img src="../assets/lnr-magnifier.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="toggle-menu flex sm:hidden">
        <button @click="toggleMenu">
          <img src="../assets/ellipsis-v.svg" alt="" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {},
  methods: {
    toggleMenu() {
      if (window.innerWidth < 768) {
        this.showMenu = !this.showMenu;
      }
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
  @apply mr-auto font-hairline text-2xl;
}

.links {
  @apply flex items-center;

  a {
    color: #424242;
    height: 99px;

    @apply flex-grow px-8 inline-flex items-center font-bold;

    &:hover {
      background-color: #f5f5f5;

      @apply text-primary;
    }

    &.router-link-exact-active {
      @apply text-primary;
    }
  }
}

.search {
  height: 99px;
  width: 100px;

  @apply inline-flex items-center justify-center;

  button {
    @apply inline-flex h-full flex-grow items-center justify-center;
  }
}

.toggle-menu {
  height: 99px;
  width: 100px;

  @apply items-center justify-center;

  img {
    height: 28px;
  }

  button {
    &:focus {
      background-color: #f5f5f5;
    }
  }
}

.search {
  background-color: #f5f5f5;

  @apply flex-grow;
}

.mobile-menu {
  z-index: 1;
  height: 100vh;

  @apply fixed w-full bg-white left-0 top-0 flex flex-col shadow-xl overflow-y-auto;

  li {
    @apply w-full flex-grow;
  }

  .links {
    @apply flex-col;

    a {
      @apply w-full justify-center;
    }
  }

  .search {
    @apply w-full flex-shrink-0;
  }
}
</style>
