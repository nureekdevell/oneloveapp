<template>
  <header class="bg w-full h-screen">
    <div class="container">
      <nav class="pt-10">
        <ul class="flex justify-between items-center">
          <li>
            <router-link to="/" class="flex gap-2 items-center"
              ><img src="../assets/img/logo.svg" alt="" />
              <h1 class="text-base text-white">OneLove</h1></router-link
            >
          </li>
          <li class="flex text-base items-center gap-2 text-white">
            <router-link class="flex items-center" to="/">Впервые здесь?</router-link>
            <Button />
          </li>
        </ul>
      </nav>

      <router-view></router-view>
    </div>
  </header>
</template>

<script setup>
import Button from '@/ui-component/Button.vue'
</script>

<style scoped>
.bg {
  background-image: url('../public/bg.png');
}
</style>
