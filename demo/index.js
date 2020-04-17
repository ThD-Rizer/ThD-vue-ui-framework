import Vue from 'vue';
import UI from '@/lib';

import router from './router';
import App from './App';

import UiMain from './components/UiMain';
import UiSection from './components/UiSection';

import uiStyles from './uiStyles';

Vue.use(UI, {
  components: {
    styles: uiStyles,
  },
});
Vue.component(UiMain.name, UiMain);
Vue.component(UiSection.name, UiSection);

Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#demo');
