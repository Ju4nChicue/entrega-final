import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/bootstrap.min.css'
import './assets/bootstrap.bundle.min.js'



const app = createApp(App)



app.use(router, VueAxios, axios)


app.mount('#app')
