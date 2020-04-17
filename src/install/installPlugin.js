import frameworkPlugin from './frameworkPlugin';
import componentsPlugin from './componentsPlugin';
import directivesPlugin from './directivesPlugin';
import './globalStyles';

const defaultOptions = {
  components: null,
  directives: null,
};

const installPlugin = {
  installed: false,
  install(Vue, options = {}) {
    if (this.installed) return;

    const opts = { ...defaultOptions, ...options };

    Vue.use(frameworkPlugin, opts.plugins);
    Vue.use(componentsPlugin, opts.components);
    Vue.use(directivesPlugin, opts.directives);

    this.installed = true;
  },
};

export default installPlugin;
