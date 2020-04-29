import { ComponentInjectionError } from '@/utils/errors';

/**
 * Фабрика инъекции
 *
 * @param {String} namespace
 * @param {String} [child]
 * @param {String} [parent]
 * @returns {{ inject: Object }}
 */
export const registrableInject = (namespace, child, parent) => {
  let implementation = null;

  if (child && parent) {
    implementation = {
      register: () => {
        throw new ComponentInjectionError(parent, child);
      },
      unregister: () => {
        throw new ComponentInjectionError(parent, child);
      },
    };
  }

  return {
    inject: {
      [namespace]: {
        default: implementation,
      },
    },
  };
};

/**
 * Фабрика провайдера
 * @param {String} namespace
 * @return {{ methods: Object, provide: Function }}
 */
export const registrableProvide = (namespace) => ({
  methods: {
    register: null,
    unregister: null,
  },
  provide() {
    return {
      [namespace]: {
        register: this.register,
        unregister: this.unregister,
      },
    };
  },
});

export default {
  registrableInject,
  registrableProvide,
};
