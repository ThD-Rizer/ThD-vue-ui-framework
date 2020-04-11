import Vue from 'vue';
import UI from '@/lib';

import router from './router';
import App from './App';

import UiSection from './components/UiSection';

Vue.use(UI);
Vue.component(UiSection.name, UiSection);

Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#demo');
