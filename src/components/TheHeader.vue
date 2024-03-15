<template>
  <div class="bg-[#2D1436] h-[170px] flex items-center">
    <header class="container">
      <nav class="flex justify-between items-center">
        <router-link to="/" class="flex gap-2 items-center"
          ><img src="../assets/img/logo.svg" alt="" />
          <h1 class="text-base text-white">OneLove</h1></router-link
        >
        <ul class="flex gap-2 items-center text-white">
          <li><router-link :to="'/'">Анкеты</router-link></li>
          <li>logo2</li>
          <li>logo3</li>
          <li class="ml-20"><SelectCountry /></li>
        </ul>
        <div class="flex items-center">search notifa</div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full" src="../assets/img/logo.svg" alt="Rounded avatar" />
          <span>Ivan Ivanov</span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import SelectCountry from '../components/SelectCountry.vue'
</script>

<style scoped></style>
