import { ComponentInjectionError } from '@/utils/errors';

/**
 * Inject factory
 *
 * @param {string} namespace
 * @param {string?} child
 * @param {string?} parent
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
 * Provide factory
 *
 * @param {string} namespace
 * @returns {{ provide(): object, methods: { unregister: null, register: null } }}
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
