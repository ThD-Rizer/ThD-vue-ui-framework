import icons from '@/icons';
import { propValidator } from '@/utils/helpers';

import $style from './UiIcon.scss';

const tagValidator = propValidator('tag', ['span', 'i']);
const nameValidator = propValidator('name', Object.keys(icons || {}));

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
      ...nameValidator,
    },
    colorDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon() {
      return icons?.[this.name];
    },
    classesRoot() {
      return {
        [$style.root]: true,
        [$style.colorDisabled]: this.colorDisabled,
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
