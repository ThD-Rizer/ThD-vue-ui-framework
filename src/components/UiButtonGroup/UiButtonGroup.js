import { getSlot, propValidator } from '@/utils/helpers';
import styles from './UiButtonGroup.scss';

const directionValidator = propValidator('direction', [
  'horizontal',
  'vertical',
]);

export default {
  name: 'UiButtonGroup',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      ...directionValidator,
    },
  },
  computed: {
    classesRoot() {
      const { direction } = this;
      return {
        [styles.root]: true,
        [styles[`direction_${direction}`]]: direction,
      };
    },
  },

  methods: {
    genRoot(childNodes = []) {
      return this.$createElement('div', {
        class: this.classesRoot,
      }, childNodes);
    },

    genButton(node, index, list) {
      const options = node?.componentOptions;

      if (!options) return null;

      const isHorizontal = this.direction === 'horizontal';
      const isVertical = this.direction === 'vertical';

      const getProps = () => {
        let square = true;

        if (isHorizontal && index === 0) {
          square = 'right';
        }
        if (isHorizontal && index === list.length - 1) {
          square = 'left';
        }
        if (isVertical && index === 0) {
          square = 'bottom';
        }
        if (isVertical && index === list.length - 1) {
          square = 'top';
        }

        return { square };
      };

      return this.$createElement(options.tag, {
        ...node.data,
        class: [
          node.data?.class,
          node.data?.staticClass,
          styles.button,
        ],
        props: {
          ...options.propsData,
          ...getProps(),
        },
        on: options.listeners,
      }, options.children);
    },
  },

  render() {
    const defaultSlot = getSlot(this) || [];
    const buttons = defaultSlot.map(this.genButton);

    return this.genRoot([
      buttons,
    ]);
  },
};
