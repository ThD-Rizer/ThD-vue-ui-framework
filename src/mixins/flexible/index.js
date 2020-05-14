import { BREAKPOINTS } from '@/constants/grid';
import { isBoolean } from '@/utils/inspect';
import styles from '@/styles/flex.scss';

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

const propsFlexPositions = flexPositions.reduce((acc, position) => {
  const breakpoints = Object.keys(BREAKPOINTS)
    .splice(0, 1);

  return {
    ...acc,
    [position]: {
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
      return flexPositions.reduce((acc, position) => {
        const value = this[position];
        const style = isBoolean(value)
          ? { [styles[position]]: value }
          : { [styles[`${position}-${value}`]]: !!value };

        return {
          ...acc,
          ...style,
        };
      }, {});
    },
  },
};
