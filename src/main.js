import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify.js';
import 'material-icons/iconfont/material-icons.css';

createApp(App).use(store).use(router).use(vuetify).mount('#app');
