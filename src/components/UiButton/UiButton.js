import { trimSlotText, propValidator, kebabToCamel } from '@/utils/helpers';
import routable from '@/mixins/routable';
import { factoryStylable } from '@/mixins/stylable';

import defaultStyles from './UiButton.scss';

const stylable = factoryStylable(defaultStyles);

const tagValidator = propValidator('tag', ['button', 'a', 'div']);
const typeValidator = propValidator('type', ['button', 'submit', 'reset']);
const sizeValidator = propValidator('size', ['small', 'normal', 'large']);
const themeValidator = propValidator('theme', [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'silent',
  'background-brand',
  'outline-brand',
]);
const contentAlignValidator = propValidator('contentAlign', ['left', 'center', 'right', 'justify']);

export default {
  name: 'UiButton',
  mixins: [
    routable,
    stylable,
  ],
  props: {
    tag: {
      type: String,
      default: 'button',
      ...tagValidator,
    },
    type: {
      type: String,
      default: 'button',
      ...typeValidator,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
      ...sizeValidator,
    },
    theme: {
      type: String,
      default: 'secondary',
      ...themeValidator,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    contentAlign: {
      type: String,
      default: 'center',
      ...contentAlignValidator,
    },
  },

  computed: {
    attributes() {
      if (this.tag !== 'button') return null;
      return { type: this.type };
    },
    classesRoot() {
      const {
        size,
        theme,
        flat,
        contentAlign,
      } = this;
      return {
        [this.styles.root]: true,
        [this.styles.isFluid]: this.fluid,
        [this.styles.isRound]: this.round,
        [this.styles.isCircle]: this.circle,
        [this.styles.isSquared]: this.squared,
        [this.styles.isFlat]: flat,
        [this.styles.isDepressed]: (this.depressed && !flat),
        [this.styles.isActive]: this.active,
        [this.styles.hasIcon]: this.hasIcon,
        [this.styles.isDisabled]: this.disabled,
        [this.styles[kebabToCamel(`size-${size}`)]]: size,
        [this.styles[kebabToCamel(`theme-${theme}`)]]: theme,
        [this.styles[kebabToCamel(`contentAlign-${contentAlign}`)]]: contentAlign,
      };
    },
  },

  methods: {
    genRoot(childNodes = []) {
      const { tag, data } = this.generateRouterLink(this.classesRoot);

      data.attrs = { ...data.attrs, ...this.attributes };

      return this.$createElement(tag, data, childNodes);
    },
    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return trimSlotText(defaultSlot());
    },
    genContent(childNodes = []) {
      return this.$createElement('span', {
        class: this.styles.inner,
      }, childNodes);
    },
  },

  render() {
    console.log('styles:', this.styles);
    return this.genRoot([
      this.genContent([
        this.genDefaultSlot(),
      ]),
    ]);
  },
};
