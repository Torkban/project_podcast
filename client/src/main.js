import './style.css'
import { createApp } from 'vue'
import App from './App.vue'

import AppHeader from '@components/base/AppHeader.vue'

const app = createApp(App)

app.mount('#app')

app.component("AppHeader", AppHeader)
