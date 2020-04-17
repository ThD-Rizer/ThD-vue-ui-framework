import {
  frameworkPlugin,
  componentsPlugin,
  directivesPlugin,
  installPlugin,
  frameworkResources,
} from '@/install';

export { frameworkPlugin };
export { componentsPlugin };
export { directivesPlugin };

export * from '@/components';
export * from '@/directives';

export { frameworkResources };

export default installPlugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(installPlugin);
}
