import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

createApp(App).use(Swipe).use(SwipeItem).mount('#app')
