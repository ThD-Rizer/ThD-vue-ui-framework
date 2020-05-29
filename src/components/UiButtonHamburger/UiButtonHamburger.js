import { factoryToggleable } from '@/mixins/toggleable';
import {
  stylable,
  props,
} from '@/components/UiButton/options';
import UiButton from '@/components/UiButton';
import styles from './UiButtonHamburger.scss';

const toggleable = factoryToggleable('active');

export default {
  name: 'UiButtonHamburger',
  mixins: [
    stylable,
    toggleable,
  ],
  props: {
    ...props,
  },
  computed: {
    classesRoot() {
      const { size } = this;
      return {
        [styles.root]: true,
        [styles.isActive]: this.active,
        [styles[`size_${size}`]]: size,
      };
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement(UiButton, {
        class: this.classesRoot,
        props: {
          ...this.$props,
          hasIcon: true,
        },
        on: {
          click: this.toggle,
        },
      }, childNodes);
    },
    genContent(childNodes = []) {
      return this.$createElement('div', {
        class: styles.content,
      }, childNodes);
    },
    genLine() {
      return this.$createElement('span', {
        class: styles.line,
      });
    },
  },
  render() {
    return this.genRoot([
      this.genContent([
        this.genLine(),
        this.genLine(),
        this.genLine(),
        this.genLine(),
      ]),
    ]);
  },
};
