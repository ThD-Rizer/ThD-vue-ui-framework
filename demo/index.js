import Vue from 'vue';
import UI from '@/lib';

import router from './router';
import App from './App';

import UiMain from './components/UiMain';
import UiSection from './components/UiSection';

import UiButtonStyles from './styles/UiButton.scss';

console.log('UiButtonStyles:', UiButtonStyles);

Vue.use(UI, {
  components: {
    styles: {
      UiButton: {
        installedStyles: UiButtonStyles,
      },
    },
  },
});
Vue.component(UiMain.name, UiMain);
Vue.component(UiSection.name, UiSection);

Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#demo');
