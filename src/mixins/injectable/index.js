import { DataInjectionError } from '@/utils/errors';
import { isEmptyObject } from '@/utils/inspect';

export const factoryInjectable = (config) => {
  const {
    providerName,
    injectorName,
    injectionData,
  } = config;

  const data = injectionData.reduce((acc, { from, to, default: defaultValue }) => ({
    ...acc,
    [to]() {
      const providerData = this[providerName];

      if (isEmptyObject(providerData)) {
        return defaultValue;
      }

      if (providerData.injectorName !== injectorName) {
        throw new DataInjectionError(providerName, injectorName);
      }

      if (from in providerData.injectionData) {
        return providerData.injectionData[from];
      }

      return defaultValue;
    },
  }), {});

  return {
    inject: {
      [providerName]: {
        default: () => ({}),
      },
    },
    computed: data,
  };
};
