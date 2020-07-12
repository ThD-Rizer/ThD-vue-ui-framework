import { getSlot, trimSlotText } from '@/utils/helpers';
import routable from '@/mixins/routable';
import { factoryStylable } from '@/mixins/stylable';
import defaultStyles from './UiLink.scss';

export const stylable = factoryStylable({
  defaultStyles,
});

export default {
  name: 'UiLink',

  mixins: [
    routable,
    stylable,
  ],

  props: {
    pseudo: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    focused: false,
  }),

  computed: {
    classesRoot() {
      return {
        [this.styles.root]: true,
        [this.styles.isPseudo]: this.pseudo,
        [this.styles.isDisabled]: this.disabled,
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
  },

  render() {
    const defaultSlot = trimSlotText(getSlot(this));

    return this.genRoot([
      this.genInner([
        defaultSlot,
      ]),
    ]);
  },
};
