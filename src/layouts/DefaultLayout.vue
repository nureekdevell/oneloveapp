<template>
  <div class="bg h-screen">
    ><TheHeader />
    <div class="container">
      <div class="w-full min-h-[900px]"><RouterView /></div>
      <div><TheFooter /></div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped>
.bg {
  height: 100%;
  background-image: url('../public/bg.png');
}
</style>
