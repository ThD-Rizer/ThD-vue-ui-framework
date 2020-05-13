import {
  frameworkPlugin,
  componentsPlugin,
  directivesPlugin,
  installPlugin,
} from '@/install';
import * as components from '@/components';
import * as directives from '@/directives';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(installPlugin);
}

// Plugins
export { frameworkPlugin };
export { componentsPlugin };
export { directivesPlugin };

// Collections
export { components };
export { directives };

// Components
export * from '@/components';

export default installPlugin;
