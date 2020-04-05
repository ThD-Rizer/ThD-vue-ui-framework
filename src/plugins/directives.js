import * as directives from '@/directives';

export default {
  installed: false,
  install(Vue) {
    if (this.installed) return;

    Object.values(directives).forEach((directive) => {
      Vue.directive(directive.name, directive);
    });

    this.installed = true;
  },
};
