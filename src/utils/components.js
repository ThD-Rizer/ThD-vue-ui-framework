import { pascalToKebab } from '@/utils/helpers';

/**
 * @param {Object<Vue>} Vue
 * @param {Object} component
 */
const install = (Vue, component) => {
  if (!component) return;

  const kebabName = pascalToKebab(component.name);

  Vue.component(component.name, component);
  Vue.component(kebabName, component);
};

/**
 * Generate plugin for component
 *
 * @param {Object} component
 * @param {Array<Object>} additionalComponents
 * @returns {Object}
 */
export const generatePlugin = (component, additionalComponents = []) => ({
  ...component,
  install(Vue) {
    install(Vue, component);
    additionalComponents.forEach((additionalComponent) => {
      install(Vue, additionalComponent);
    });
  },
});
