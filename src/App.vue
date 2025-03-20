<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavbarStatic.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Global styles if needed */
</style>
