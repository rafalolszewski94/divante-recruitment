<template>
  <main>
    <div class="icon">
      <img src="../assets/book-alt-blue.svg" alt="" />
    </div>

    <h1>Contact</h1>
    <address class="not-italic">
      <a href="mailto:divante@divante.pl">divante@divante.pl</a><br /><br />
      <a href="tel:+48123456789">tel. 123-456-789</a><br />
      <a href="tel:+48887236324">tel. 887-236-324</a><br /><br />
      ul. Dmowskiego 17<br />
      00-000 Wrocław
    </address>
  </main>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped lang="scss">
main {
  max-width: 670px;
  padding: 50px 20px;

  @apply bg-white w-full mx-auto text-center;
}

.icon {
  height: 100px;
  width: 100px;

  @apply border-2 border-primary rounded-full mx-auto mb-10 flex justify-center items-center;

  img {
    height: 50px;
  }
}

h1 {
  @apply uppercase text-3xl font-bold text-gray-800 mb-6;
}

address {
  @apply text-gray-600 text-lg;
}
</style>
