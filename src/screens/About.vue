<template>
  <main>
    <div class="icon">
      <img src="../assets/book-alt-blue.svg" alt="" />
    </div>

    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
      dignissimos dolor doloremque, doloribus ducimus eos ex exercitationem
      facere facilis ipsam ipsum iusto laboriosam laborum magnam maiores
      numquam pariatur, ratione reiciendis saepe tempore tem.
    </p>
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
  padding: 50px 130px;

  @apply bg-white w-full mx-auto text-center;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
}

h1 {
  @apply uppercase text-3xl font-bold text-gray-800 mb-6;
}

p {
  @apply text-gray-600 text-lg text-justify;
}
</style>
