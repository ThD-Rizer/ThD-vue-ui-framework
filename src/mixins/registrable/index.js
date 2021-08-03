import { ComponentInjectionError } from '@/utils/errors';

/**
 * Фабрика инъекции
 *
 * @param {string} namespace
 * @param {string} [child]
 * @param {string} [parent]
 * @returns {{ inject: Object }}
 */
export const registrableInject = (namespace, child = undefined, parent = undefined) => {
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
 * @param {string} namespace
 * @returns {{ methods: Object, provide: function }}
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
