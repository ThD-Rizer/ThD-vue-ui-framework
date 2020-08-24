import { InvalidTypeError } from './errors';
import { isNull, isBoolean, isPlainObject } from './inspect';
import { pascalToKebab } from './helpers';

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

  const {
    customIcons,
    styleOptions,
  } = options;

  // Инъекция кастомных иконок в компонент `UiIcon`
  if (
    isPlainObject(customIcons)
    && !isEmptyObject(customIcons)
    && component.name === 'UiIcon'
  ) {
    // eslint-disable-next-line no-param-reassign
    component.customIcons = customIcons;
  }

  // Настройки кастомных стилей компонента
  if (isPlainObject(styleOptions) && !isEmptyObject(styleOptions)) {
    const { data = null } = component;
    const {
      installedStyles = null,
      installedThemesStyles = null,
      installedResetDefaultStyles = false,
    } = styleOptions;

    if (!isPlainObject(installedStyles) && !isNull(installedStyles)) {
      throw new InvalidTypeError(installedStyles, 'installedStyles', 'Object');
    }
    if (!isPlainObject(installedThemesStyles) && !isNull(installedThemesStyles)) {
      throw new InvalidTypeError(installedThemesStyles, 'installedThemesStyles', 'Object');
    }
    if (!isBoolean(installedResetDefaultStyles)) {
      throw new InvalidTypeError(
        installedResetDefaultStyles,
        'installedResetDefaultStyles',
        'Object',
      );
    }

    // eslint-disable-next-line no-param-reassign
    component.data = () => ({
      ...data && data(),
      installedOptions: {
        installedStyles,
        installedThemesStyles,
        installedResetDefaultStyles,
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
