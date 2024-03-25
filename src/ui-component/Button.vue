<template>
  <div>
    <button
      class="relative text-base inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden rounded-full"
    >
      <span
        class="relative px-5 py-2.5 outline bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 outline-pink-500 rounded-full hover:bg-opacity-0"
      >
        <slot />
      </span>
    </button>
  </div>
</template>

<script setup></script>

<style scoped></style>
