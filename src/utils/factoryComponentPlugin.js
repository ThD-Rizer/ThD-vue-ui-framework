import { isPlainObject } from '@/utils/inspect';
import { pascalToKebab } from '@/utils/helpers';

/**
 * @param {Object<Vue>} Vue
 * @param {Object} component
 * @returns {void}
 */
function install(Vue, component) {
  if (!component || !component.name) return;

  const pascalName = component.name;
  const kebabName = pascalToKebab(pascalName);

  Vue.component(pascalName, component);
  Vue.component(kebabName, component);
}

/**
 * Фабрика плагина для компонента
 *
 * @param {Object} component
 * @param {Object[]} [additionalComponents]
 * @returns {Object}
 */
export default function factoryComponentPlugin(component, additionalComponents = []) {
  return {
    ...component,
    install(Vue, options = null) {
      const styleOptions = options?.styleOptions;

      if (isPlainObject(styleOptions)) {
        const { data } = component;
        const {
          installedStyles = null,
          resetDefaultStyles = false,
        } = styleOptions;

        // eslint-disable-next-line no-param-reassign
        component.data = () => ({
          ...data && data(),
          installedStyles,
          installedResetDefaultStyles: resetDefaultStyles,
        });
      }

      install(Vue, component);

      additionalComponents.forEach((additionalComponent) => {
        install(Vue, additionalComponent);
      });
    },
  };
}
