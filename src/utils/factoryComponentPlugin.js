import { isPlainObject } from '@/utils/inspect';
import { pascalToKebab } from '@/utils/helpers';

const isEmptyObject = (object) => !Object.values(object).length;

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
 * Подготовка и инъекция настроек компонента, переданных при его инсталляции
 *
 * @param {Object} component
 * @param {Object} options
 * @returns {void}
 */
function injectInstalledOptions(component, options) {
  if (!isPlainObject(options) || isEmptyObject(options)) return;

  const { styleOptions } = options;

  // Настройки кастомных стилей компонента
  if (isPlainObject(styleOptions) && !isEmptyObject(styleOptions)) {
    const { data = null } = component;
    const {
      installedStyles = null,
      resetDefaultStyles = false,
    } = styleOptions;

    // eslint-disable-next-line no-param-reassign
    component.data = () => ({
      ...data && data(),
      installedOptions: {
        installedStyles,
        installedResetDefaultStyles: resetDefaultStyles,
      },
    });
  }
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
      injectInstalledOptions(component, options);

      install(Vue, component);

      additionalComponents.forEach((additionalComponent) => {
        install(Vue, additionalComponent);
      });
    },
  };
}
