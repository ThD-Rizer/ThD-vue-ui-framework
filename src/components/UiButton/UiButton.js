import { isBoolean, isString } from '@/utils/inspect';
import { getSlot, trimSlotText } from '@/utils/helpers';
import routable from '@/mixins/routable';
import {
  stylable,
  props,
} from './options';

export default {
  name: 'UiButton',

  mixins: [
    routable,
    stylable,
  ],

  props,

  data: () => ({
    focused: false,
  }),

  computed: {
    attributes() {
      const type = (this.tag === 'button')
        ? { type: this.type }
        : null;

      return {
        ...type,
      };
    },

    classesRoot() {
      const { size, square, contentAlign } = this;
      return {
        [this.styles.root]: true,
        [this.styles.isFluid]: this.fluid,
        [this.styles.isRound]: this.round,
        [this.styles.isCircle]: this.circle,
        [this.styles.isSquare]: isBoolean(square) && square,
        [this.styles[`square_${square}`]]: isString(square),
        [this.styles.hasIcon]: this.hasIcon,
        [this.styles.isDisabled]: this.disabled,
        [this.styles.isEmpty]: this.empty,
        [this.styles[`size_${size}`]]: size,
        [this.styles[`contentAlign_${contentAlign}`]]: contentAlign,
        [this.styles.isFocused]: this.focused,
        [this.styles.isActive]: this.active,
      };
    },
  },

  methods: {
    handleFocus() {
      if (this.disabled) return;

      this.focused = true;
      this.$emit('focus');
    },

    handleBlur() {
      if (this.disabled) return;

      this.focused = false;
      this.$emit('blur');
    },

    handleClick() {
      if (this.disabled) return;

      this.click();
    },

    genRoot(childNodes = []) {
      const { tag, data } = this.generateRouterLink(this.classesRoot);
      const listenersKey = this.to ? 'nativeOn' : 'on';

      return this.$createElement(tag, {
        ...data,
        attrs: {
          ...data.attrs,
          ...this.attributes,
        },
        [listenersKey]: {
          ...data[listenersKey],
          focus: this.handleFocus,
          blur: this.handleBlur,
          click: this.handleClick,
        },
      }, childNodes);
    },

    genInner(childNodes = []) {
      return this.$createElement('span', {
        class: this.styles.inner,
      }, childNodes);
    },

    genLink(childNodes = []) {
      return this.$createElement('span', {
        class: this.styles.link,
      }, childNodes);
    },
  },

  render() {
    const defaultSlot = trimSlotText(getSlot(this));
    const content = (this.theme === 'link')
      ? this.genLink(defaultSlot)
      : defaultSlot;

    return this.genRoot([
      this.genInner([
        content,
      ]),
    ]);
  },
};
