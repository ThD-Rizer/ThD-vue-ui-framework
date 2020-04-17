import { ComponentInjectionError } from '@/utils/errors';

/**
 * Фабрика инъекции
 *
 * @param {String} namespace
 * @param {String} [child]
 * @param {String} [parent]
 * @returns {{ inject: {} }}
 */
export const inject = (namespace, child, parent) => {
  const implementation = child && parent ? {
    register: () => {
      throw new ComponentInjectionError(parent, child);
    },
    unregister: () => {
      throw new ComponentInjectionError(parent, child);
    },
  } : null;

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
 *
 * @param {String} namespace
 * @returns {{ provide(): Object, methods: { unregister: null, register: null } }}
 */
export const provide = (namespace) => ({
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
  inject,
  provide,
};
