import { getSlot, trimSlotText } from '@/utils/helpers';
import routable from '@/mixins/routable';
import styles from './UiLink.scss';

export default {
  name: 'UiLink',

  mixins: [
    routable,
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
        [styles.root]: true,
        [styles.isPseudo]: this.pseudo,
        [styles.isDisabled]: this.disabled,
        [styles.isFocused]: this.focused,
        [styles.isActive]: this.active,
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
  },

  render() {
    const defaultSlot = trimSlotText(getSlot(this));

    return this.genRoot([
      defaultSlot,
    ]);
  },
};
