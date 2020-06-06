import { propValidator, getSlot } from '@/utils/helpers';
import styles from './UiContainer.scss';

const tagValidator = propValidator('tag', ['div', 'section', 'header', 'footer']);

export default {
  name: 'UiContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
      ...tagValidator,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.tag, {
        class: {
          [styles.root]: true,
          [styles.isFluid]: this.fluid,
        },
      }, childNodes);
    },
  },
  render() {
    const defaultSlot = getSlot(this);

    return this.genRoot([
      defaultSlot,
    ]);
  },
};
