import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import popup from './plugin/dialog/popup'
import carouser from './plugin/carousel/carousel'

createApp(App).use(store).use(popup).use(carouser).use(router).mount('#app')

