import {
  frameworkPlugin,
  componentsPlugin,
  directivesPlugin,
  installPlugin,
} from '@/install';
import * as utils from '@/utils';
import * as utilsInspect from '@/utils/inspect';
import * as utilsLogger from '@/utils/logger';
import * as utilsStyles from '@/utils/styles';
import * as directives from '@/directives';
import * as components from '@/components';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(installPlugin);
}

// Plugins
export { frameworkPlugin };
export { directivesPlugin };
export { componentsPlugin };

// Collections
export { utils };
export { utilsInspect };
export { utilsLogger };
export { utilsStyles };
export { directives };
export { components };

// Components
export * from '@/utils';
export * from '@/utils/inspect';
export * from '@/utils/logger';
export * from '@/utils/styles';
export * from '@/components';

export default installPlugin;
