<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import CatalogView from "./views/CatalogView.vue";
</script>

<template>
  <AppHeader />
  <main>
    <CatalogView />
  </main>
  <AppFooter />
</template>