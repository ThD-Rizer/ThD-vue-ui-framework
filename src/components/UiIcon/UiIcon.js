import icons from '@/icons';
import { propValidator } from '@/utils/helpers';
import styles from './UiIcon.scss';

const tagValidator = propValidator('tag', ['span', 'i']);

export default {
  name: 'UiIcon',
  props: {
    tag: {
      type: String,
      default: 'span',
      ...tagValidator,
    },
    name: {
      type: String,
      required: true,
    },
    colorDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icons() {
      const customIcons = this.$options.customIcons || null;
      return {
        ...icons,
        ...customIcons,
      };
    },
    icon() {
      return this.icons[this.name];
    },
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.colorDisabled]: this.colorDisabled,
      };
    },
  },
  methods: {
    genRoot() {
      if (!this.icon) return null;

      return this.$createElement(this.tag, {
        class: this.classesRoot,
        domProps: {
          innerHTML: this.icon,
        },
      });
    },
  },
  render() {
    return this.genRoot();
  },
};
