import {
  frameworkPlugin,
  componentsPlugin,
  directivesPlugin,
  installPlugin,
} from '@/install';
import * as components from '@/components';
import * as directives from '@/directives';

export { frameworkPlugin };
export { componentsPlugin };
export { directivesPlugin };

export { components };
export { directives };

export default installPlugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(installPlugin);
}
