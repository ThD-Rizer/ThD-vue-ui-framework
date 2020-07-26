import { generateHash, getSlot, propValidator } from '@/utils/helpers';
import { factoryProvidable } from '@/mixins/providable';
import styles from './UiCheckboxGroup.scss';

const providable = factoryProvidable({
  providerName: 'UiCheckboxGroup',
  injectorName: 'UiCheckbox',
  reactiveData: [
    { from: 'model', to: 'model' },
    { from: 'localName', to: 'name' },
  ],
  staticData: [
    { from: 'classesChild', to: 'classes' },
    { from: 'handleChange', to: 'changeHandler' },
  ],
});

const directionValidator = propValidator('direction', [
  'horizontal',
  'vertical',
]);

export default {
  name: 'UiCheckboxGroup',

  mixins: [
    providable,
  ],

  model: {
    prop: 'model',
    event: 'change',
  },

  props: {
    model: {
      type: [Array, Object],
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
