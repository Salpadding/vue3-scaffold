import { createApp } from 'vue'
import App from './App.vue'

import './assets/img/favicon.ico'
const root = document.getElementById('app')
const app = createApp(App)

app.mount(root)
