<template>
  <div class="bg-[#2D1436] h-[170px] sticky top-0 pt-10 flex items-center">
    <header class="container">
      <nav class="flex justify-between items-center">
        <router-link to="/home" class="flex gap-2 items-center"
          ><img src="../assets/img/logo.svg" alt="" />
          <h1 class="text-base text-white">{{ $t('cart') }}</h1></router-link
        >
        <ul class="flex gap-8 items-center text-white">
          <li class="visited:text-purple-600"><router-link to="/resume">Анкеты</router-link></li>
          <li><router-link to="/message">Сообщения</router-link></li>
          <li><router-link to="/subscription">Подписка</router-link></li>

          <li class="ml-20"><SelectCountry /></li>
        </ul>
        <div class="flex items-center">
          <button
            type="button"
            class="font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z"
                fill="#925FA4"
              />
            </svg>
          </button>
          <button
            type="button"
            class="font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8162 14.0942C15.5562 13.0292 14.8337 11.4725 14.8337 9.82333V7.5C14.8337 4.5675 12.6553 2.14 9.83366 1.73333V0.833333C9.83366 0.3725 9.46033 0 9.00033 0C8.54033 0 8.16699 0.3725 8.16699 0.833333V1.73333C5.34449 2.14 3.16699 4.5675 3.16699 7.5V9.82333C3.16699 11.4725 2.44449 13.0292 1.17699 14.1008C0.852826 14.3783 0.666992 14.7817 0.666992 15.2083C0.666992 16.0125 1.32116 16.6667 2.12533 16.6667H15.8753C16.6795 16.6667 17.3337 16.0125 17.3337 15.2083C17.3337 14.7817 17.1478 14.3783 16.8162 14.0942Z"
                fill="#925FA4"
              />
              <path
                d="M9.00014 20C10.5093 20 11.7718 18.9242 12.0618 17.5H5.93848C6.22848 18.9242 7.49098 20 9.00014 20Z"
                fill="#925FA4"
              />
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <img
            class="w-10 h-10 rounded-full"
            src="../assets/img/avatar1.svg"
            alt="Rounded avatar"
          />
          <span class="text-white">Ivan Ivanov</span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import SelectCountry from '../components/SelectCountry.vue'
</script>

<style scoped></style>
