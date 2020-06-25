import { isArray } from '@/utils/inspect';
import {
  generateHash,
  // cloneArray,
  getSlot,
  propValidator,
} from '@/utils/helpers';
import styles from './UiCheckboxGroup.scss';

const directionValidator = propValidator('direction', [
  'horizontal',
  'vertical',
]);

export default {
  name: 'UiCheckboxGroup',

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
      type: [String, Number, Boolean, Array],
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
      return this.name || `checkbox-group-${generateHash()}`;
    },

    classesRoot() {
      const { direction } = this;
      return {
        [styles[`direction_${direction}`]]: direction,
      };
    },

    classesChild() {
      return {
        [styles.checkbox]: true,
      };
    },
  },

  methods: {
    handleChange(payload) {
      const isArrayModel = isArray(this.model);

      console.log('[UiCheckboxGroup:handleChange] payload:', payload);
      console.log('[UiCheckboxGroup:handleChange] isArrayModel:', isArrayModel);

      // if (isArrayModel) {
      //   const model = cloneArray(this.model);
      //
      //   if (this.model.includes(payload)) {
      //     model.splice(model.indexOf(payload), 1);
      //   } else {
      //     model.push(payload);
      //   }
      //
      //   this.$emit('change', model);
      // } else {
      //   this.$emit('change', payload);
      // }
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
