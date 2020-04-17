import * as components from '@/components';

const componentsPlugin = {
  installed: false,
  install(Vue, options = null) {
    if (this.installed) return;

    /**
     * @param {Object} component
     * @returns {{ styleOptions?: Object }}
     */
    const getComponentOptions = (component) => {
      const styleOptions = options?.styles?.[component.name];

      return {
        ...styleOptions && { styleOptions },
      };
    };

    Object.values(components).forEach((component) => {
      const componentOptions = getComponentOptions(component);

      Vue.use(component, componentOptions);
    });

    this.installed = true;
  },
};

export default componentsPlugin;
