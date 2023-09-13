import { createApp } from 'vue'
import Toast, { type PluginOptions } from 'vue-toastification'
import App from './App.vue'

import './assets/main.css'
import 'vue-toastification/dist/index.css'
''
const app = createApp(App)

const toastOptions: PluginOptions = {}

app.use(Toast, toastOptions)
app.mount('#app')
