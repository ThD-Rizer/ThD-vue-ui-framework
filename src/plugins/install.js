import frameworkPlugin from './framework';
import registerComponentsPlugin from './components';
import registerDirectivesPlugin from './directives';
import './globalStyles';

const defaultOptions = {
  components: null,
  directives: null,
};

export default {
  installed: false,
  install(Vue, options = {}) {
    if (this.installed) return;

    const opts = { ...defaultOptions, ...options };

    Vue.use(frameworkPlugin, opts.plugins);
    Vue.use(registerComponentsPlugin, opts.components);
    Vue.use(registerDirectivesPlugin, opts.directives);

    this.installed = true;
  },
};
