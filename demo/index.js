import Vue from 'vue';
import UI from '@/lib';
import router from './router';
import App from './App';
import UiMain from './components/UiMain';
import UiSection from './components/UiSection';
import UiHeading from './components/UiHeading';
import UiButtonStyles from './styles/UiButton.scss';
import UiButtonThemeCoolStyles from './styles/UiButton.themeCool.scss';
import UiInputStyles from './styles/UiInput.scss';

Vue.use(UI, {
  components: {
    styles: {
      UiButton: {
        installedStyles: UiButtonStyles,
        installedThemesStyles: {
          cool: UiButtonThemeCoolStyles,
        },
      },
      UiInput: {
        installedStyles: UiInputStyles,
        installedResetDefaultStyles: true,
      },
    },
  },
});
Vue.component(UiMain.name, UiMain);
Vue.component(UiSection.name, UiSection);
Vue.component(UiHeading.name, UiHeading);
Vue.component('NuxtLink', {
  functional: true,
  render(h, { data, children }) {
    return h('RouterLink', data, children);
  },
});

Vue.config.devtools = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#demo');
