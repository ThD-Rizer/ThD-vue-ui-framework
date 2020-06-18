import { getSlot, propValidator } from '@/utils/helpers';
import styles from './UiRadioGroup.scss';

const directionValidator = propValidator('direction', [
  'horizontal',
  'vertical',
]);

export default {
  name: 'UiRadioGroup',
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
    genRadio(node) {
      const options = node?.componentOptions;

      if (!options) return null;

      return this.$createElement(options.tag, {
        ...node.data,
        class: [
          node.data?.class,
          node.data?.staticClass,
          styles.radio,
        ],
        props: {
          ...options.propsData,
        },
        on: options.listeners,
      }, options.children);
    },
  },
  render() {
    const defaultSlot = getSlot(this) || [];
    const radios = defaultSlot.map(this.genRadio);

    return this.genRoot([
      radios,
    ]);
  },
};
