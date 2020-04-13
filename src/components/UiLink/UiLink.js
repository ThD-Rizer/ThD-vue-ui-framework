import { trimSlotText } from '@/utils/helpers';
import routable from '@/mixins/routable';

import $style from './UiLink.scss';

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
      default: $style.isActive,
    },
    exactActiveClass: {
      type: String,
      default: $style.isActive,
    },
  },
  computed: {
    classesRoot() {
      return {
        [$style.root]: true,
        [$style.isPseudo]: this.pseudo,
        [$style.isDisabled]: this.disabled,
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
