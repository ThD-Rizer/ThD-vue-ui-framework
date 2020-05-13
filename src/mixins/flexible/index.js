import { BREAKPOINTS } from '@/constants/grid';
import { isBoolean } from '@/utils/inspect';
import styles from '@/styles/_flex.scss';

const flexPositions = [
  'start',
  'center',
  'end',
  'top',
  'middle',
  'bottom',
  'around',
  'between',
  'first',
  'last',
];

const propsFlexPositions = flexPositions.reduce((acc, key) => {
  const breakpoints = Object.keys(BREAKPOINTS)
    .splice(0, 1);

  return {
    ...acc,
    [key]: {
      type: [Boolean, String],
      default: false,
      validator: (_) => isBoolean(_) || breakpoints.includes(_),
    },
  };
}, {});

export default {
  props: {
    ...propsFlexPositions,
  },
  computed: {
    flexClasses() {
      return flexPositions.reduce((acc, key) => {
        const value = this[key];
        const style = isBoolean(value)
          ? { [styles[key]]: value }
          : { [styles[`${key}-${value}`]]: !!value };

        return {
          ...acc,
          style,
        };
      }, {});
    },
  },
};
