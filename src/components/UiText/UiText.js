import { COLORS } from '@/constants/styles';
import { propValidator, getSlot, trimSlotText } from '@/utils/helpers';
import { factoryStylable } from '@/mixins/stylable';
import defaultStyles from './UiText.scss';

const TAGS_FOR_TYPES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  text: 'span',
};

export const stylable = factoryStylable({
  defaultStyles,
});

const typeValidator = propValidator('type', Object.keys(TAGS_FOR_TYPES));
const weightValidator = propValidator('weight', [
  'thin',
  'extraLight',
  'light',
  'regular',
  'medium',
  'semiBold',
  'bold',
  'extraBold',
  'black',
]);
const colorValidator = propValidator('color', Object.keys(COLORS));

export default {
  name: 'UiText',
  mixins: [
    stylable,
  ],
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
        [this.styles.isBlock]: this.block,
        [this.styles[`type_${type}`]]: true,
        [this.styles[`weight_${weight}`]]: !!weight,
        [this.styles[`color_${color}`]]: !!color,
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
