<template>
  <div class="">
    <form class="">
      <select class="bg-transparent border-none outline-none text-white">
        <option selected value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([])
</script>

<style lang="scss" scoped></style>
