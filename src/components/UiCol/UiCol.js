import { BREAKPOINTS } from '@/constants';
import { propValidator, parseBreakpoints, getSlot } from '@/utils/helpers';
import styles from './UiCol.scss';

const tagValidator = propValidator('tag', [
  'div',
  'section',
]);

/**
 * @type {string[]}
 */
const breakpoints = Object.keys(BREAKPOINTS);

/**
 * @type {Object}
 */
const breakpointsProps = breakpoints.reduce((acc, breakpoint) => ({
  ...acc,
  [breakpoint]: {
    type: [String, Number, Boolean],
    default: false,
  },
  [`${breakpoint}Offset`]: {
    type: [String, Number],
    default: null,
  },
  [`${breakpoint}OffsetRight`]: {
    type: [String, Number],
    default: null,
  },
}), {});

export default {
  name: 'UiCol',
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
    offsets: {
      type: [String, Object],
      default: null,
    },
    offsetsRight: {
      type: [String, Object],
      default: null,
    },
    ...breakpointsProps,
  },
  computed: {
    computedBreakpoints() {
      return parseBreakpoints(this.breakpoints);
    },
    computedOffsets() {
      return parseBreakpoints(this.offsets);
    },
    computedOffsetsRight() {
      return parseBreakpoints(this.offsetsRight);
    },
    classesBreakpoint() {
      return breakpoints.reduce((acc, breakpoint) => {
        const value = this.computedBreakpoints[breakpoint] || this[breakpoint];
        const key = styles[`${breakpoint}-${value}`];

        return {
          ...acc,
          [key]: !!value,
        };
      }, {});
    },
    offsetClasses() {
      return breakpoints.reduce((acc, breakpoint) => {
        const value = this.computedOffsets[breakpoint] || this[`${breakpoint}Offset`];
        const key = styles[`${breakpoint}-${value}_offset`];

        return {
          ...acc,
          [key]: !!value,
        };
      }, {});
    },
    offsetRightClasses() {
      return breakpoints.reduce((acc, breakpoint) => {
        const value = this.computedOffsetsRight[breakpoint] || this[`${breakpoint}OffsetRight`];
        const key = styles[`${breakpoint}-${value}_offsetRight`];

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
        ...this.offsetClasses,
        ...this.offsetRightClasses,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.tag, {
        class: this.classesRoot,
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
