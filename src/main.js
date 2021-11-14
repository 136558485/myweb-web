import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import popup from './plugin/dialog/popup';
import carouser from './plugin/carousel/carousel';
import i18n from "./language/index" 

createApp(App).use(store).use(popup).use(carouser).use(router).use(i18n).mount('#app');

