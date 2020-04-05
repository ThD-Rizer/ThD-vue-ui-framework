import * as components from '@/components';

export default {
  installed: false,
  install(Vue) {
    if (this.installed) return;

    Object.values(components).forEach((component) => {
      Vue.use(component);
    });

    this.installed = true;
  },
};
