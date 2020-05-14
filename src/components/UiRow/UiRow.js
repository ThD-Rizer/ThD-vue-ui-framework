import { BREAKPOINTS } from '@/constants/grid';
import { isNull, isNumber, isNaN } from '@/utils/inspect';
import { propValidator, parseBreakpoints } from '@/utils/helpers';
import styles from './UiRow.scss';

/**
 * @TODO: Доделать gutters
 */

const tagValidator = propValidator('tag', [
  'div',
  'section',
]);
const gutterValidator = {
  validator: (_) => !isNaN(parseInt(_, 10)) && _ >= 0 && _ <= 4,
};

export default {
  name: 'UiRow',
  props: {
    tag: {
      type: String,
      default: 'div',
      ...tagValidator,
    },
    gutter: {
      type: [String, Number],
      default: null,
      ...gutterValidator,
    },
    gutters: {
      type: [String, Object],
      default: null,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gutterClasses() {
      const { gutter } = this;

      return {
        [styles[`xs-${gutter}`]]: !isNull(gutter),
      };
    },
    guttersClasses() {
      const gutters = parseBreakpoints(this.gutters);

      return Object.keys(BREAKPOINTS).reduce((acc, breakpoint) => {
        const gutter = gutters[breakpoint];

        return {
          ...acc,
          [styles[`${breakpoint}-${gutter}`]]: isNumber(gutter),
        };
      }, {});
    },
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isReverse]: this.reverse,
        ...this.gutterClasses,
        ...this.guttersClasses,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.tag, {
        class: this.classesRoot,
      }, childNodes);
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return defaultSlot();
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
