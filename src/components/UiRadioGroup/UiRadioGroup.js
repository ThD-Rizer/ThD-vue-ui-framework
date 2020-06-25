import { generateHash, getSlot, propValidator } from '@/utils/helpers';
import styles from './UiRadioGroup.scss';

const directionValidator = propValidator('direction', [
  'horizontal',
  'vertical',
]);

export default {
  name: 'UiRadioGroup',

  provide() {
    const vm = this;
    const state = {
      get model() {
        return vm.model;
      },
      get name() {
        return vm.localName;
      },
    };
    const classes = this.classesChild;
    const changeHandler = this.handleChange;

    return {
      state,
      classes,
      changeHandler,
    };
  },

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
    direction: {
      type: String,
      default: 'horizontal',
      ...directionValidator,
    },
  },

  computed: {
    localName() {
      return this.name || `radio-group-${generateHash()}`;
    },

    classesRoot() {
      const { direction } = this;
      return {
        [styles[`direction_${direction}`]]: direction,
      };
    },

    classesChild() {
      return {
        [styles.radio]: true,
      };
    },
  },

  methods: {
    handleChange(payload) {
      this.$emit('change', payload);
    },

    genRoot(childNodes = []) {
      return this.$createElement('div', {
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
