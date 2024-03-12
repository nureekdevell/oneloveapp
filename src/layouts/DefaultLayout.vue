<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped></style>
