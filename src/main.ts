import { createApp } from "vue"
import App from "./App.vue"

import './assets/img/favicon.ico'
const root = document.createElement("div")
document.body.appendChild(root)

const app = createApp(App)

app.mount(root)
