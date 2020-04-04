import { propValidator } from '@/utils/helpers';
import { isUndefined, isString, isPlainObject } from '@/utils/inspect';
import { Logger } from '@/utils/logger';

const logger = new Logger({
  scope: 'mixin:routable',
});

const routeValidator = {
  /**
   * Validate route property value
   *
   * @param {String | { name: String, path: String }} value
   * @returns {Boolean}
   */
  validator: (value) => {
    if (
      isUndefined(value) || isString(value)
      || (isPlainObject(value) && (isString(value.name) || isString(value.path)))
    ) {
      return true;
    }

    logger.warn(
      'The "route" property is invalid!\n',
      '| Given value:', value,
    );

    return false;
  },
};

const targetValidator = propValidator('target', ['_blank', '_self', '_parent', '_top']);

/**
 * Default mount tag
 *
 * @type {string}
 */
const defaultTag = 'a';

export default {
  props: {
    tag: {
      type: String,
      default: undefined,
    },
    href: {
      type: [String, Object],
      default: undefined,
      ...routeValidator,
    },
    to: {
      type: [String, Object],
      default: undefined,
      ...routeValidator,
    },
    /**
     * Use native Vue component for router links (router-link).
     * By default used Nuxt links (nuxt-link)
     */
    native: {
      type: Boolean,
      default: false,
    },
    activeClass: {
      type: String,
      default: undefined,
    },
    append: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactActiveClass: {
      type: String,
      default: undefined,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: undefined,
      ...targetValidator,
    },
  },
  computed: {
    isLink() {
      return this.href || this.to;
    },
  },
  methods: {
    click(event) {
      this.$emit('click', event);
    },

    generateRouterLink(classes) {
      const { to } = this;
      let { exact } = this;
      let tag;

      const data = {
        attrs: {
          disabled: this.disabled,
        },
        class: classes,
        props: {},
        [to ? 'nativeOn' : 'on']: {
          ...this.$listeners,
          click: this.click,
        },
      };

      if (typeof exact === 'undefined') {
        exact = to === '/' || (to === Object(to) && to.path === '/');
      }

      if (to) {
        tag = this.native ? 'RouterLink' : 'NuxtLink';

        Object.assign(data.props, {
          exact,
          to,
          activeClass: this.activeClass,
          exactActiveClass: this.exactActiveClass || this.activeClass,
          append: this.append,
          replace: this.replace,
        });
      } else {
        const { href } = this;
        tag = (href && defaultTag) || this.tag || defaultTag;

        if (tag === defaultTag && href) {
          data.attrs.href = href;
        }
      }

      if (this.target) {
        data.attrs.target = this.target;
      }

      return { tag, data };
    },
  },
};
