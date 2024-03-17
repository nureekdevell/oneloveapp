import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import EN from '@/locale/en.json'
import RU from '@/locale/ru.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  locale: 'RU',
  messages: {
    EN: EN,
    RU: RU
  }
})

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
