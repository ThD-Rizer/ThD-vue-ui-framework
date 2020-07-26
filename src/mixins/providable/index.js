export const factoryProvidable = (config) => {
  const {
    providerName,
    injectorName,
    reactiveData,
    staticData,
  } = config;

  return {
    provide() {
      const vm = this;
      const injectionData = {};

      reactiveData.forEach(({ from, to }) => {
        Object.defineProperty(injectionData, to, {
          get: () => vm[from],
        });
      });

      staticData.forEach(({ from, to }) => {
        Object.defineProperty(injectionData, to, {
          value: vm[from],
        });
      });

      return {
        [providerName]: {
          injectorName,
          injectionData,
        },
      };
    },
  };
};
