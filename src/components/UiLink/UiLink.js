import { trimSlotText } from '@/utils/helpers';
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
    activeClass: {
      type: String,
      default: styles.isActive,
    },
    exactActiveClass: {
      type: String,
      default: styles.isActive,
    },
  },
  computed: {
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isPseudo]: this.pseudo,
        [styles.isDisabled]: this.disabled,
        [this.activeClass]: this.active,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      const { tag, data } = this.generateRouterLink(this.classesRoot);

      return this.$createElement(tag, data, childNodes);
    },
    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return trimSlotText(defaultSlot());
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
