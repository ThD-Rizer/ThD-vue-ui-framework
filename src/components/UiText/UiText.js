import { propValidator, trimSlotText } from '@/utils/helpers';
import { getScssVariablesMap } from '@/utils/styles';

import styles from './UiText.scss';

const TAGS_FOR_TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  text: 'span',
};
const COLORS = getScssVariablesMap('colors');

const typeValidator = propValidator('type', Object.keys(TAGS_FOR_TYPES));
const weightValidator = propValidator('weight', [
  'thin',
  'light',
  'normal',
  'medium',
  'bold',
]);
const colorValidator = propValidator('color', Object.keys(COLORS));

export default {
  name: 'UiText',
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
      ...colorValidator,
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
        [styles[type]]: true,
        [styles[weight]]: !!weight,
        [styles[`color_${color}`]]: !!color,
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
