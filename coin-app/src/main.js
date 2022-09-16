import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'
import Vuelidate from 'vuelidate'


const app = createApp(App)
app.use(Vuelidate)
app.use(router)
app.mount('#app')
