import flexible from '../../mixins/flexible';
import styles from './UiCol.scss';

/**
 * @TODO: доделать
 */

export default {
  name: 'UiCol',
  mixins: [
    flexible,
  ],
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isReverse]: this.reverse,
        ...this.flexClasses,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(this.tag, {
        class: this.classesRoot,
      }, childNodes);
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return defaultSlot();
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
