import { generateHash } from '@/utils';
import { getSlot } from '@/utils/helpers';
import styles from './UiSelect.scss';

/**
 * @TODO: Доработать!
 */

export default {
  name: 'UiSelect',

  model: {
    prop: 'model',
    event: 'change',
  },

  props: {
    model: {
      type: [String, Number, Boolean],
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },

  computed: {
    localName() {
      return this.name || `select-${generateHash()}`;
    },

    classesRoot() {
      return {
        [styles.root]: true,
      };
    },
  },

  methods: {
    genRoot(childNodes = []) {
      return this.$createElement('select', {
        class: this.classesRoot,
      }, childNodes);
    },
  },

  render() {
    const defaultSlot = getSlot(this);

    return this.genRoot([
      defaultSlot,
    ]);
  },
};
