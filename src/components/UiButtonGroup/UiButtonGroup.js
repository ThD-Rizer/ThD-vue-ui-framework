import { getSlot } from '@/utils/helpers';
import styles from './UiButtonGroup.scss';

export default {
  name: 'UiButtonGroup',
  props: {
    // @TODO
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement('div', {
        style: styles.root,
      }, childNodes);
    },

    genButton(node, index, list) {
      const options = node?.componentOptions;

      if (!options) return null;

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
        ...node.data,
        props: {
          ...options.propsData,
          ...getProps(),
        },
        on: options.listeners,
      }, options.children);
    },
  },

  render() {
    const defaultSlot = getSlot(this) || [];
    const buttons = defaultSlot.map(this.genButton);

    return this.genRoot(buttons);
  },
};
