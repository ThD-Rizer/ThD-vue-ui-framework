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
  computed: {
    classesRoot() {
      return {
        [this.styles.root]: true,
        [this.styles.isPseudo]: this.pseudo,
        [this.styles.isDisabled]: this.disabled,
        [this.styles.isActive]: this.active,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      const { tag, data } = this.generateRouterLink(this.classesRoot);

      return this.$createElement(tag, data, childNodes);
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
