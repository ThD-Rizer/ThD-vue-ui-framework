import { BREAKPOINTS } from '@/constants';
import { isNull, isNumber, isNaN } from '@/utils/inspect';
import { propValidator, parseBreakpoints, getSlot } from '@/utils/helpers';
import styles from './UiRow.scss';

/**
 * @TODO: Доделать gutters
 */

const tagValidator = propValidator('tag', [
  'div',
  'section',
]);
const gutterValidator = {
  validator: (propValue) => !isNaN(parseInt(propValue, 10)) && propValue >= 0 && propValue <= 4,
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
  },
  render() {
    const defaultSlot = getSlot(this);

    return this.genRoot([
      defaultSlot,
    ]);
  },
};
