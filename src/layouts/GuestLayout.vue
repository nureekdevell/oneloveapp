<template>
  <header class="bg w-full h-screen">
    <div class="container">
      <nav class="">
        <ul>
          <li>
            <router-link to="/"
              ><img src="../assets/img/logo.svg" alt="" />
              <h1 class="text-base text-white">OneLove</h1></router-link
            >
          </li>
          <li class="text-base text-white">
            <router-link to="/">Впервые здесь?</router-link>
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
