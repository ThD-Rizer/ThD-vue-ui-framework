import { propValidator, getSlot, trimSlotText } from '@/utils/helpers';
import { COLORS } from '@/constants/styles';
import styles from './UiText.scss';

const TAGS_FOR_TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  text: 'span',
};

const typeValidator = propValidator('type', Object.keys(TAGS_FOR_TYPES));
const weightValidator = propValidator('weight', [
  'thin',
  'light',
  'regular',
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
    block: {
      type: Boolean,
      default: false,
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
    localTag() {
      return this.tag || TAGS_FOR_TYPES[this.type];
    },
    rootClasses() {
      const {
        type,
        weight,
        color,
      } = this;
      return {
        [styles.isBlock]: this.block,
        [styles[`type_${type}`]]: true,
        [styles[`weight_${weight}`]]: !!weight,
        [styles[`color_${color}`]]: !!color,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.localTag, {
        class: this.rootClasses,
      }, childNodes);
    },
  },
  render() {
    const defaultSlot = trimSlotText(getSlot(this));

    return this.genRoot([
      defaultSlot,
    ]);
  },
};
