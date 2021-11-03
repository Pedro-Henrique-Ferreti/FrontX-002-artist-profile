import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js';

import utils from '@/utils/install.js';
import globalComponents from '@/plugins/globalComponents.js';

const appInstance = createApp(App);

appInstance.use(store);
appInstance.use(utils);
appInstance.use(globalComponents);
appInstance.mount('#app');
