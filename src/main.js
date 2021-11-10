import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseNav from './components/BaseNav'



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
app.use(router).mount('#app')
app.component('base-nav', BaseNav)

