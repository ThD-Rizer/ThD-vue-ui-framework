import * as components from '@/components';

/**
 * Вернуть подготовленные настройки компонента, переданные при его инсталляции
 *
 * @param {Object} component
 * @param {Object} options
 * @returns {{ styleOptions?: Object }}
 */
function getComponentOptions(component, options) {
  const customIcons = (options?.icons) ? { icons: options.icons } : null;
  const styleOptions = options?.styles?.[component.name];

  return {
    ...customIcons && { customIcons },
    ...styleOptions && { styleOptions },
  };
}

const componentsPlugin = {
  installed: false,
  install(Vue, options = null) {
    if (this.installed) return;

    Object.values(components).forEach((component) => {
      const componentOptions = getComponentOptions(component, options);

      Vue.use(component, componentOptions);
    });

    this.installed = true;
  },
};

export default componentsPlugin;
