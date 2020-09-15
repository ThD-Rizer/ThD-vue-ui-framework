import * as components from '@/components';

/**
 * Вернуть подготовленные настройки компонента, переданные при его инсталляции
 *
 * @param {String} componentName
 * @param {Object} options
 * @returns {{ styleOptions?: Object }}
 */
function getComponentOptions(componentName, options) {
  const customIcons = options?.icons;
  const styleOptions = options?.styles?.[componentName];

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
      const componentOptions = getComponentOptions(component.name, options);

      Vue.use(component, componentOptions);
    });

    this.installed = true;
  },
};

export default componentsPlugin;
