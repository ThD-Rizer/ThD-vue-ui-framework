import { BREAKPOINTS } from '@/constants/grid';
import { isBoolean } from '@/utils/inspect';
import { propValidator, parseBreakpoints } from '@/utils/helpers';
import flexible from '@/mixins/flexible';
import styles from './UiCol.scss';

/**
 * @TODO: доделать
 */

const tagValidator = propValidator('tag', ['div', 'section']);

/**
 * @type {string[]}
 */
const breakpoints = Object.keys(BREAKPOINTS);

/**
 * @type {object}
 */
const breakpointsProps = breakpoints.reduce((acc, breakpoint) => ({
  ...acc,
  [breakpoint]: {
    type: [Boolean, String, Number],
    default: false,
  },
  // [`${breakpoint}Offset`]: {
  //   type: [String, Number],
  //   default: null,
  // },
  // [`${breakpoint}OffsetRight`]: {
  //   type: [String, Number],
  //   default: null,
  // },
}), {});

export default {
  name: 'UiCol',
  mixins: [
    flexible,
  ],
  props: {
    tag: {
      type: String,
      default: 'div',
      ...tagValidator,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    breakpoints: {
      type: [String, Object],
      default: null,
    },
    ...breakpointsProps,
  },
  computed: {
    computedBreakpoints() {
      return parseBreakpoints(this.breakpoints);
    },
    classesBreakpoint() {
      return breakpoints.reduce((acc, breakpoint) => {
        const value = this.computedBreakpoints[breakpoint] || this[breakpoint];
        const key = isBoolean(value)
          ? styles[breakpoint]
          : styles[`${breakpoint}${value}`];

        return {
          ...acc,
          [key]: !!value,
        };
      }, {});
    },
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isReverse]: this.reverse,
        ...this.classesBreakpoint,
        ...this.flexClasses,
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
