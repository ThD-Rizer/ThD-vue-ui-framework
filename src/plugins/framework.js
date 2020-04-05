import { FrameworkError } from '@/utils/errors';
import Framework from '@/framework';

export default {
  installed: false,
  install(Vue, plugins = []) {
    if (this.installed) return;

    if ('$ui' in Vue.prototype) {
      throw new FrameworkError('$ui has already defined in Vue prototype');
    }

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$ui = new Framework(plugins);

    this.installed = true;
  },
};
