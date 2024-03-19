<template>
  <div class="bg h-screen">
    <TheBanner />
    <TheHeader />
    <div class="container">
      <div class="w-full pt-8 min-h-[calc(100vh-170px)]"><RouterView /></div>
      <div><TheFooter /></div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheBanner from '@/components/TheBanner.vue'
import TheFooter from '@/components/TheFooter.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.cookie = 'locale=RU'
})
</script>

<style scoped>
.bg {
  height: 100%;
  background-image: url('../public/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
