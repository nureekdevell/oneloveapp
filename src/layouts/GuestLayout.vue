<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><img src="../../public/logo.svg" alt="" /></li>
          <li></li>
        </ul>
      </nav>
    </header>
    <router-link :to="{ name: 'login' }">login</router-link>
    <router-link :to="{ name: 'register' }">Register</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
