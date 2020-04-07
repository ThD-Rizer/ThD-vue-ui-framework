import { pascalToKebab } from '@/utils/helpers';

/**
 * @param {Object<Vue>} Vue
 * @param {Object} component
 */
const install = (Vue, component) => {
  if (!component || !component.name) return;

  const camelName = component.name;
  const kebabName = pascalToKebab(camelName);

  Vue.component(camelName, component);
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
