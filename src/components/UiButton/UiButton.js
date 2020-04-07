import { propValidator } from '@/utils/helpers';
import routable from '@/mixins/routable';
import $style from './UiButton.scss';

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
const textAlignValidator = propValidator('textAlign', ['left', 'center', 'right', 'justify']);

export default {
  name: 'UiButton',
  mixins: [
    routable,
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
      default: null,
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
    active: {
      type: Boolean,
      default: false,
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'center',
      ...textAlignValidator,
    },
    innerStyle: {
      type: [Object, String],
      default: null,
    },
  },
  computed: {
    attributes() {
      return (this.tag === 'button')
        ? { type: this.type }
        : null;
    },
    hasIcon() {
      return this.$scopedSlots.icon;
    },
    classesRoot() {
      const {
        size,
        theme,
        flat,
        textAlign,
      } = this;
      return {
        [$style.root]: true,
        [$style.isDisabled]: this.disabled,
        [$style.isFluid]: this.fluid,
        [$style.isRound]: this.round,
        [$style.isCircle]: this.circle,
        [$style.isSquared]: this.squared,
        [$style.isFlat]: flat,
        [$style.hasIcon]: this.hasIcon,
        [$style.isDepressed]: (this.depressed && !flat),
        [$style.isActive]: this.active,
        [$style.sizeSmall]: size === 'small',
        [$style.sizeNormal]: size === 'normal',
        [$style.sizeLarge]: size === 'large',
        [$style.themePrimary]: theme === 'primary',
        [$style.themeSecondary]: theme === 'secondary',
        [$style.themeSuccess]: theme === 'success',
        [$style.themeDanger]: theme === 'danger',
        [$style.themeWarning]: theme === 'warning',
        [$style.themeInfo]: theme === 'info',
        [$style.themeLight]: theme === 'light',
        [$style.themeDark]: theme === 'dark',
        [$style.themeSilent]: theme === 'silent',
        [$style.themeBackgroundBrand]: theme === 'background-brand',
        [$style.themeOutlineBrand]: theme === 'outline-brand',
        [$style.textAlignLeft]: textAlign === 'left',
        [$style.textAlignCenter]: textAlign === 'center',
        [$style.textAlignRight]: textAlign === 'right',
        [$style.textAlignJustify]: textAlign === 'justify',
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
      const { default: defaultSlot } = this.$scopedSlots;

      if (!defaultSlot) return null;

      return defaultSlot();
    },
    genIconSlot() {
      const { icon } = this.$scopedSlots;

      if (!icon) return null;

      return icon();
    },
    genContent() {
      const defaultSlot = this.genDefaultSlot();

      if (!this.hasIcon && !defaultSlot) return null;

      return this.$createElement('span', {
        class: $style.inner,
        style: this.innerStyle,
      }, this.genIconSlot() || defaultSlot);
    },
  },
  render() {
    return this.genRoot([
      this.genContent(),
    ]);
  },
};
