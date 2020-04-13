import { propValidator, trimSlotText } from '@/utils/helpers';
import testable from '@/mixins/testable';

import $style from './UiText.scss';

const TAGS_FOR_TYPES = Object.freeze({
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  text: 'span',
});
const typeValidator = {
  validator: (value) => Object.keys(TAGS_FOR_TYPES).includes(value),
};
const weightValidator = propValidator('weight', [
  'thin',
  'light',
  'normal',
  'medium',
  'bold',
]);

export default {
  name: 'UiText',
  mixins: [
    testable,
  ],
  props: {
    tag: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
      ...typeValidator,
    },
    weight: {
      type: String,
      default: null,
      ...weightValidator,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    internalTag() {
      return this.tag || TAGS_FOR_TYPES[this.type];
    },
    rootClasses() {
      const {
        type,
        weight,
        color,
      } = this;
      return {
        [$style[type]]: true,
        [$style[weight]]: !!weight,
        [$style[`color-${color}`]]: !!color,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.internalTag, {
        class: this.rootClasses,
        attrs: this.qaAttributes,
      }, childNodes);
    },
    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return trimSlotText(defaultSlot());
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
