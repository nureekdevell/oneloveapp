<template>
  <div v-if="showClose != true">
    <div
      id="sticky-banner"
      tabindex="-1"
      class="fixed top-0 start-0 z-50 p-2 flex bg-[#1B0522] justify-between w-full"
    >
      <div class="flex items-center mx-auto justify-center">
        <p class="flex items-center font-normal text-white">
          <span
            class="inline-flex p-1 me-3 rounded-full bg-violet-950 w-6 h-6 items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z"
              />
            </svg>
            <span class="sr-only flex">Light bulb</span>
          </span>
          <span class="flex gap-8"
            >Знакомства по всему миру
            <SelectCountry />
          </span>
        </p>
      </div>
      <div class="flex items-center">
        <span class="sr-only"><SelectCountry /></span>
      </div>
    </div>
  </div>
  <!-- <div class="h-12 flex items-center justify-center gap-5">
    <h1 class="text-white">Знакомства по всему миру</h1>
    <SelectCountry />
  </div> -->
</template>

<script setup>
import SelectCountry from './SelectCountry.vue'
</script>

<style scoped></style>
