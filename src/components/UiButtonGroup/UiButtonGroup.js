import {
  props,
  defaultTheme,
} from '@/components/UiButton/options';
import styles from './UiButtonGroup.scss';

export default {
  name: 'UiButtonGroup',
  props: {
    ...props,
    theme: {
      type: String,
      default: defaultTheme,
    },
  },
  computed: {
    properties() {
      return Object.keys(this.$props).reduce((acc, key) => ({
        ...acc,
        [key]: this[key],
      }), {});
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement('div', {
        style: styles.root,
      }, childNodes);
    },

    genButton(button, index, list) {
      // eslint-disable-next-line
      console.log('[UiButtonGroup:genButton] button:', button);

      if (!button) return null;

      const options = button.componentOptions;
      const getProps = () => {
        switch (index) {
          case 0:
            return { square: 'right' };
          case list.length - 1:
            return { square: 'left' };
          default:
            return { square: true };
        }
      };

      return this.$createElement(options.tag, {
        ...button.data,
        props: {
          ...this.properties,
          ...options.propsData,
          ...getProps(),
        },
        on: options.listeners,
      }, options.children);
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return defaultSlot().map(this.genButton);
    },
  },

  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
