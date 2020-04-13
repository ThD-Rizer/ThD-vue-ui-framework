import { propValidator } from '@/utils/helpers';

import $style from './UiContainer.scss';

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
          [$style.root]: true,
          [$style.isFluid]: this.fluid,
        },
      }, childNodes);
    },

    genSlotDefault() {
      return this.$slots.default;
    },
  },
  render() {
    return this.genRoot([
      this.genSlotDefault(),
    ]);
  },
};
