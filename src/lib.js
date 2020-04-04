import install from './plugins/install';

export default install;

export { default as FrameworkPlugin } from './plugins/framework';
export { default as ComponentsPlugin } from './plugins/components';
export { default as DirectivesPlugin } from './plugins/directives';

export * from './components';
export * from './directives';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
